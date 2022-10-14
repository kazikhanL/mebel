import { ChangeEvent } from "react";

import styles from "./Counter.module.scss";
import CounterProps from "./Counter.props";

const Counter = ({ className = "", current, changeHandler }: CounterProps): JSX.Element => {
    const addHandler = () => changeHandler(current + 1);
    const removeHandler = () => changeHandler(current - 1);
    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => changeHandler(Number(event.target.value));

    return (
        <div className={`${styles.wrapper} ${className}`}>
            <button className={`${styles.button} ${styles.delete}`} onClick={removeHandler}>
                <span className={styles.minus} />
            </button>
            <input value={current} onInput={inputChangeHandler} type="number" />
            <button className={`${styles.button} ${styles.add}`} onClick={addHandler} >
                <span className={styles.plus} />
            </button>
        </div>
    );
};

export default Counter;
