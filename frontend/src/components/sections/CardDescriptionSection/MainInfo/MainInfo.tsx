import styles from "./MainInfo.module.scss";
import MainInfoProps from "./MainInfo.props";
import RubIcon from "@components/icons/Rub";

const MainInfo = ({ className = "", info }: MainInfoProps): JSX.Element => {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            <p>Артикул: {info.code}</p>
            <h1>{info.name}</h1>
            <p className={styles.characteristics}>
                {info.characteristics.color ? info.characteristics.color : null}
                {info.characteristics.material ? `, ${info.characteristics.material}` : null}
            </p>
            <div className={styles.prices}>
                <p className={styles.mainPrice}>
                    {info.pricePrefix ? <span className={styles.prefix}>{info.pricePrefix}</span> : null}
                    {info.price} <RubIcon />
                    {info.disposable ? null : <span> 1-ый день</span>}
                </p>
                {info.disposable ? null : (
                    <p className={styles.secondPrice}>
                        {info.secondDayPrice} <RubIcon /> <span>со 2-го дня</span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default MainInfo;
