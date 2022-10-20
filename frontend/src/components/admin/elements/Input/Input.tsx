import styles from "./Input.module.scss";
import InputProps from "./Input.props";

const Input = ({
    className = "",
    errorMessage,
    descriptionMessage,
    ...attributes
}: InputProps): JSX.Element => {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            {errorMessage ? <p className={styles.error}>{errorMessage}</p> : null}
            <input {...attributes} />
            {descriptionMessage ? <p className={styles.description}>{descriptionMessage}</p> : null}
        </div>
    );
};

export default Input;
