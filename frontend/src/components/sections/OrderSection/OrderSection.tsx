import styles from "./OrderSection.module.scss";
import OrderSectionProps from "./OrderSection.props";
import Button from "@components/ui/Button";
import PhoneFormModal from "@components/modals/PhoneFormModal";
import useControllers from "@hooks/useControllers";

const OrderSection = ({ className = "" }: OrderSectionProps): JSX.Element => {
    const sectionStyleClasses = `container ${styles.section} ${className}`;
    const [modalIsOpen, openModal, closeModal] = useControllers();

    return (
        <section className={sectionStyleClasses}>
            <div>
                <p>Не нашли то,<br />что искали?</p>
                <p>Оставьте заявку и наш менеджер перезвонит вам в ближайшее время и ответит на все ваши вопросы</p>
                <Button className={styles.button} color="green" onClick={openModal}>Оставить заявку</Button>

                <picture>
                    <source srcSet="/images/answer.webp" type="image/webp" />
                    <img
                        src="/images/answer.png"
                        alt="Не нашли то что искали?"
                        width="743"
                        height="464"
                    />
                </picture>
            </div>
            <PhoneFormModal
                isOpen={modalIsOpen}
                title="Оформление заявки"
                buttonInner="Отправить заявку"
                closeHandler={closeModal}
                submitHandler={(data: string) => { console.log(data); }}
            />
        </section>
    );
};

export default OrderSection;
