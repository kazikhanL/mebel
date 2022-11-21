import styles from "./MainInfo.module.scss";
import MainInfoProps from "./MainInfo.props";
import RubIcon from "@components/icons/Rub";

const MainInfo = ({ className = "", info }: MainInfoProps): JSX.Element => {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            <p>Артикул: {info.code}</p>
            <h1>{info.name}</h1>
            <p className={styles.characteristics}>
                {info.color ? info.color : null}
                {info.material ? `, ${info.material}` : null}
            </p>
            <div className={styles.prices}>
                <p className={styles.mainPrice}>
                    {info.price.pricePrefix ? <span className={styles.prefix}>{info.price.pricePrefix}</span> : null}
                    {info.price.price} <RubIcon />
                    {info.disposable ? null : <span> 1-ый день</span>}
                </p>
                {info.disposable ? null : (
                    <p className={styles.secondPrice}>
                        {info.price.secondPrice} <RubIcon /> <span>со 2-го дня</span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default MainInfo;
