import { forwardRef, LegacyRef } from "react";

import styles from "./Input.module.scss";
import InputProps from "./Input.props";

type RefType = LegacyRef<HTMLInputElement> | undefined;

const Input = ({
    className = "",
    errorMessage,
    descriptionMessage,
    ...attributes
}: InputProps, ref: RefType): JSX.Element => {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            {errorMessage ? <p className={styles.error}>{errorMessage}</p> : null}
            <input ref={ref} {...attributes} />
            {descriptionMessage ? <p className={styles.description}>{descriptionMessage}</p> : null}
        </div>
    );
};

export default forwardRef(Input);
