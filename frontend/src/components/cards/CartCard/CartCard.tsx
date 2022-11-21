import styles from "./CartCard.module.scss";
import CartCardProps from "./CartCard.props";
import RubIcon from "@components/icons/Rub";
import Counter from "@components/ui/Counter";
import CloseIcon from "@components/icons/Close";
import Button from "@components/ui/Button";
import { useAppDispatch } from "@hooks/store";
import { deleteFromCart, updateCartCard } from "@store/cartSlice";
import priceToPretty from "@utilities/priceToPretty";

const CartCard = ({ info, className }: CartCardProps): JSX.Element => {
    const dispatch = useAppDispatch();

    const changeCouterHandler = (amout: number): void => {
        if (amout === 0) {
            dispatch(updateCartCard({ ...info, count: 1 }));
        } else {
            dispatch(updateCartCard({ ...info, count: amout }));
        }
    };

    const deleteHandler = (): void => {
        dispatch(deleteFromCart(info.id));
    };

    return (
        <div className={`${styles.card} ${className}`}>
            <img
                src={info.image}
                alt={info.name}
                width="173"
                height="143"
            />
            <div className={styles.description}>
                <div className={styles.titleWrapper}>
                    <p>{info.name}</p>
                    <p>Артикул: {info.code}</p>
                </div>
                <div className={styles.mainIfno}>
                    <div className={styles.prices}>
                        <p className={styles.mainPrice}>
                            {info.pricePrefix ? <span className={styles.prefix}>{info.pricePrefix}</span> : null}
                            {priceToPretty(info.price)} <RubIcon />
                            {info.disposable ? null : <span> 1-ый день</span>}
                        </p>
                        {info.disposable || !info.secondPrice ? null : (
                            <p className={styles.secondPrice}>
                                {priceToPretty(info.secondPrice)} <RubIcon /> <span>со 2-го дня</span>
                            </p>
                        )}
                    </div>
                    <div className={styles.controllers}>
                        <div className={styles.cost}>
                            <p>Стоимость</p>
                            <p>{priceToPretty(info.price * info.count)} <RubIcon /></p>
                        </div>
                        <div>
                            <Counter changeHandler={changeCouterHandler} current={info.count} />
                        </div>
                    </div>
                </div>
            </div>
            <Button
                color="transparent"
                borderType="none"
                onClick={deleteHandler}
                className={styles.deleteBtn}
            >
                <CloseIcon />
            </Button>
        </div>
    );
};

export default CartCard;
