import { MouseEvent, useState, useRef, CSSProperties } from "react";

import styles from "./Button.module.scss";
import ButtonProps from "./Button.props";

const Button = ({
    className = "",
    color = "main",
    borderType = "default",
    disabled,
    children,
    onClick,
    ...attributes
}: ButtonProps): JSX.Element => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [wave, setWave] = useState<JSX.Element | null>(null);

    const onClickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
        if (buttonRef.current) {
            const buttonPosition = buttonRef.current.getBoundingClientRect();

            const waveStyleProperties: CSSProperties = {
                top: `${event.pageY - (buttonPosition.top + scrollY)}px`,
                left: `${event.pageX - (buttonPosition.left + scrollX)}px`,
            };

            const key = new Date().getTime();
            const newWave = <span key={key} className={styles.wave} style={waveStyleProperties} />;

            setWave(newWave);
        }

        if (onClick !== undefined) {
            onClick(event);
        }
    };

    const styleClasses = `
        ${styles.button} 
        ${styles[color]} 
        ${styles[borderType]} 
        ${className}
        ${disabled ? styles.disabled : ""}
    `;

    return (
        <button className={styleClasses} ref={buttonRef} onClick={onClickHandler} {...attributes}>
            {wave ? wave : null}
            {children}
        </button>
    );
};

export default Button;
