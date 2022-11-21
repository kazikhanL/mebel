import styles from "./ThanksBlock.module.scss";
import ThanksBlockProps from "./ThanksBlock.props";
import DoneIcon from "@components/icons/Done";
import Button from "@components/ui/Button";

const ThanksBlock = ({ title, closeHandler, className = "" }: ThanksBlockProps): JSX.Element => {
    setTimeout(() => {
        closeHandler();
    }, 3000);

    return (
        <div className={`${styles.block} ${className}`}>
            <div className={styles.titleWrapper}>
                <span className={styles.done}>
                    <DoneIcon />
                </span>
                <p className={styles.title}>{title}</p>
            </div>
            <p>В ближайшее время мы свяжемся с вами для уточнения всех деталей</p>
            <Button className={styles.btn} color="green" onClick={closeHandler}>Жду звонка!</Button>
        </div>
    );
};

export default ThanksBlock;
