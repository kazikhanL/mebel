import { motion, Variants, Transition } from "framer-motion";
import Link from "next/link";

import styles from "./MenuModal.module.scss";
import MenuModalProps from "./MenuModal.props";
import Overlay from "../Overlay";
import PromoCard from "@components/cards/PromoCard";

const MenuModal = ({
    isOpen,
    categories,
    closeHandler,
    className = "",
}: MenuModalProps): JSX.Element => {
    const transition: Transition = { duration: 0.7 };
    const variants: Variants = {
        initial: { top: -300 },
        animate: { top: 60 },
    };

    return (
        <Overlay isOpen={isOpen} closeHandler={closeHandler}>
            <motion.div
                variants={variants}
                transition={transition}
                initial="initial"
                animate="animate"
                exit="initial"
                className={`${styles.wrapper} ${className}`}
            >
                <nav className={styles.inner}>
                    <ul className={styles.categories}>
                        {categories.map(((card) => (
                            <li key={card.id}>
                                <PromoCard {...card} className={styles.card} />
                            </li>
                        )))}
                    </ul>
                    <ul className={styles.aside}>
                        <li>
                            <Link href="/conditions" prefetch={false}>
                                <a>Условия аренды</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/news" prefetch={false}>
                                <a>Мероприятия</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacts" prefetch={false}>
                                <a>Контакты</a>
                            </Link>
                        </li>
                        <li className={styles.dop}>
                            <Link href="/favorites" prefetch={false}>
                                <a>Избранное</a>
                            </Link>
                        </li>
                        <li className={styles.dop}>
                            <Link href="/cart" prefetch={false}>
                                <a>Корзина</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </motion.div>
        </Overlay>
    );
};

export default MenuModal;
