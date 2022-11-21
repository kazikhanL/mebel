import styles from "./ErrorBlock.module.scss";
import ErrorBlockProps from "./ErrorBlock.props";
import Button from "@components/ui/Button";

const ErrorBlock = ({ closeHandler, className = "" }: ErrorBlockProps): JSX.Element => {
    return (
        <div className={`${styles.block} ${className}`}>
            <p className={styles.title}>Произошла ошибка, повторите попытку</p>
            <Button className={styles.btn} color="main" onClick={closeHandler}>OK</Button>
        </div>
    );
};

export default ErrorBlock;
