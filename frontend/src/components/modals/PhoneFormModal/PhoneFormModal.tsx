import { ChangeEvent, useState } from "react";
import { motion, Variants, Transition } from "framer-motion";
import { useForm, RegisterOptions } from "react-hook-form";

import styles from "./PhoneFormModal.module.scss";
import PhoneFormModalProps from "./PhoneFormModal.props";
import Overlay from "../Overlay";
import Button from "@components/ui/Button";
import getPhoneMask from "@utilities/getPhoneMask";
import ErrorBlock from "@components/elements/ErrorBlock";
import ThanksBlock from "@components/elements/ThanksBlock";

type FormType = { phone: string };

const PhoneFormModal = ({
    isOpen,
    title,
    buttonInner,
    closeHandler,
    submitHandler,
    className = "",
}: PhoneFormModalProps): JSX.Element => {
    const [isSend, setIsSend] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);

    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm<FormType>({ mode: "onBlur" });

    const phoneOptions: RegisterOptions = {
        required: { value: true, message: "Введите номер" },
        minLength: { value: 18, message: "Введите полный номер" },

        onChange: (event: ChangeEvent<HTMLInputElement>): void => {
            const str: string = event.target.value.replace("+7 ", "");
            const newValue: string = str.length === 0 ? "" : "+7 " + getPhoneMask(str);

            setValue("phone", newValue);
        },
    };

    const onSubmit = (data: FormType): void => {
        try {
            submitHandler(data.phone);
            setValue("phone", "");
        } catch {
            setHasError(true);
        }

        setIsSend(true);
    };

    const onClose = (): void => {
        closeHandler();
        setHasError(false);
        setIsSend(false);
    };

    const windowVariants: Variants = {
        initial: { opacity: 0, transform: "translate(-50%, -50%) scale(0)" },
        animate: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
        exit: { opacity: 0, transform: "translate(-50%, -50%) scale(0)" },
    };

    const transition: Transition = { duration: 0.5 };

    return (
        <Overlay isOpen={isOpen} closeHandler={onClose}>
            <div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={windowVariants}
                    transition={transition}
                    className={`${styles.window} ${className}`}
                >
                    {!isSend && (
                        <motion.div className={styles.inner}>
                            <p className={styles.title}>{title}</p>
                            <p className={styles.subTitle}>Оставьте ваш номер и наш менеджер свяжется с вами в ближайшее время</p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label>
                                    {errors.phone ? <p className={styles.error}>{errors.phone.message}</p> : null}
                                    <input
                                        type="text"
                                        placeholder="+7 (999) 999-99-99"
                                        {...register("phone", phoneOptions)}
                                    />
                                </label>
                                <Button color="main">{buttonInner}</Button>
                            </form>
                        </motion.div>
                    )}
                    {isSend && hasError ? <ErrorBlock closeHandler={onClose} /> : null}
                    {isSend && !hasError ? <ThanksBlock title="Спасибо за заявку!" closeHandler={onClose} /> : null}
                </motion.div>
            </div>
        </Overlay>
    );
};

export default PhoneFormModal;
