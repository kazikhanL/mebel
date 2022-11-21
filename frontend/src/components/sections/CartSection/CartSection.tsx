import { motion, Variants, Transition, AnimatePresence } from "framer-motion";
import DatePicker from "react-datepicker";
import ru from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";

import styles from "./CartSection.module.scss";
import CartCard from "@components/cards/CartCard";
import { useAppSelector } from "@hooks/store";
import getTotalSum, { getDateDiff, getTotalSumWithoutDiscount } from "@utilities/getTotalSum";
import RubIcon from "@components/icons/Rub";
import QuestionIcon from "@components/icons/QuestionIcon";
import Button from "@components/ui/Button";
import { useState } from "react";
import priceToPretty from "@utilities/priceToPretty";
import PhoneFormModal from "@components/modals/PhoneFormModal";
import useControllers from "@hooks/useControllers";

const getDiscount = (total: number, econom: number): number => {

    const fractionOfPercent = (total / 100);
    const prercents = 100 - (100 - Math.floor(econom / fractionOfPercent));

    return prercents;
};

const CartSection = (): JSX.Element => {
    const cards = useAppSelector((state) => state.cart.cards);
    const [modalIsActive, showModal, closeModal] = useControllers();
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([new Date(), new Date()]);
    const [startDate, endDate] = dateRange;

    const dateDiff = startDate && endDate ? getDateDiff(startDate, endDate) + 1 : 1;
    const totalSum = startDate && endDate ? getTotalSum(cards, startDate, endDate) : getTotalSum(cards);
    const totalEconomSum = getTotalSumWithoutDiscount(cards, dateDiff) - parseFloat(totalSum.replace(" ", ""));
    const discount = getDiscount(getTotalSumWithoutDiscount(cards, dateDiff), totalEconomSum);

    const compareDates = (select: Date | null, prev: Date | null): boolean => {
        if (select == null || prev === null) return false;
        if (startDate == null || endDate === null) return false;

        return select.getTime() >= startDate.getTime() && select.getTime() <= endDate.getTime();
    };


    const variants: Variants = {
        initial: { x: -100, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        hidden: { x: -110, opacity: 0 },
    };

    const transition: Transition = {
        duration: 0.5,
    };

    return (
        <section className={`container ${styles.section}`}>
            <h1>Корзина</h1>
            <div className={styles.wrapper}>
                <AnimatePresence>
                    <motion.ul className={styles.list} layout>
                        <AnimatePresence>
                            {cards.map((card) => (
                                <motion.li
                                    layout
                                    key={card.id}
                                    transition={transition}
                                    variants={variants}
                                    initial="initial"
                                    animate="animate"
                                    exit="hidden"
                                >
                                    <CartCard info={card} />
                                </motion.li>
                            ))}
                        </AnimatePresence>
                    </motion.ul>
                </AnimatePresence>
                <div className={styles.aside}>
                    <div className={styles.totalInfo}>
                        <p className={styles.asideTitle}>Сумма заказа</p>
                        <p>{totalSum} <RubIcon /></p>
                    </div>
                    <div className={styles.economInfo}>
                        <p className={styles.asideTitle}>Вы экономите</p>
                        <p>
                            {priceToPretty(totalEconomSum)} <RubIcon />
                            <span>( {discount} %)</span>
                        </p>
                        <button>
                            <QuestionIcon />
                        </button>
                    </div>
                    <div className={styles.cardsInfo}>
                        <p className={styles.asideTitle}>Позиций <span>{cards.length}</span></p>
                        <p className={styles.asideTitle}>Товаров <span>{cards.reduce((sum, card) => card.count + sum, 0)}</span></p>
                    </div>
                    <div className={styles.timeInfo}>
                        <p className={styles.asideTitle}>Время аренды</p>
                        <div>
                            <DatePicker
                                selectsRange={true}
                                startDate={startDate}
                                endDate={endDate}
                                onChange={setDateRange}
                                withPortal
                                minDate={new Date()}
                                customInput={<button className={styles.datePicker}>{dateDiff > 0 ? dateDiff : 1} Дн</button>}
                                dayClassName={(date) => (compareDates(date, startDate) ? styles.selectedDay : null)}
                                className={styles.datePicker}
                                locale={ru}
                            />
                        </div>
                    </div>
                    <Button className={styles.orderBtn} onClick={showModal}>Оформить заказ</Button>
                </div>
            </div>
            <PhoneFormModal
                isOpen={modalIsActive}
                closeHandler={closeModal}
                title="Оформление заказа"
                buttonInner="Оформить заказ"
                submitHandler={(phone) => { console.log(phone); }}
            />
        </section>
    );
};

export default CartSection;
