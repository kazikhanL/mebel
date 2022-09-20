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
            const waveStyleProperties: CSSProperties = {
                top: `${event.clientY - Number(buttonRef.current.offsetTop)}px`,
                left: `${event.clientX - Number(buttonRef.current.offsetLeft)}px`,
            };

            const key = `${waveStyleProperties.top}${waveStyleProperties.left}`;
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
