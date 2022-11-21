import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Card.module.scss";
import CardProps from "./Card.props";
import RubIcon from "@components/icons/Rub";
import DoneIcon from "@components/icons/Done";
import HeartIcon from "@components/icons/Heart";
import AddCartIcon from "@components/icons/AddCard";
import Button from "@components/ui/Button";
import Counter from "@components/ui/Counter";
import ToolTip from "@components/modals/ToolTip";
import useControllers from "@hooks/useControllers";

import { useAppDispatch, useAppSelector } from "@hooks/store";
import { addToCart, deleteFromCart, updateCartCard } from "@store/cartSlice";
import { addFavorite, deleteFavorite } from "@store/favoriteSlice";

const Card = ({ className = "", info }: CardProps): JSX.Element => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const [cartToolTipIsOpen, showCartToolTip, closeCartToolTip] = useControllers();
    const [favoriteToolTipIsOpen, showFavoriteToolTip, closeFavoriteToolTip] = useControllers();

    const { id, code, name, image, disposable, pricePrefix, price, secondPrice } = info;

    const storeCartCards = useAppSelector((state) => state.cart.cards);
    const storeFavoriteCards = useAppSelector((state) => state.favorites.cards);

    const cartCard = storeCartCards.find((storeCard) => storeCard.id === id);
    const hasInCart = cartCard !== undefined;
    const hasInFavorite = storeFavoriteCards.find((storeCard) => storeCard.id === id) !== undefined;


    const favoriteClickHandler = (): void => {
        if (hasInFavorite) {
            dispatch(deleteFavorite(id));
        } else {
            dispatch(addFavorite(info));
            showFavoriteToolTip();
        }
    };

    const addCartHandler = (): void => {
        dispatch(addToCart(info));
        showCartToolTip();
    };

    const cartCouterHandler = (amout: number): void => {
        if (amout === 0) {
            dispatch(deleteFromCart(id));
        } else {
            dispatch(updateCartCard({ ...info, count: amout }));
        }
    };

    const styleClasses = `
        ${className} 
        ${styles.card} 
        ${hasInCart ? styles.active : ""}
        ${hasInFavorite ? styles.activeFavorite : ""}
    `;
    const cartButtonStyleClasses = `${styles.button} ${styles.buttonCart}`;
    const favoriteButtonStyleClasses = `${styles.button} ${styles.buttonFavorite}`;

    const cardUrl = `/${router.query.catalog}/${id}`;

    return (
        <div className={styleClasses}>
            {hasInCart ? (
                <div className={styles.done}>
                    <DoneIcon />
                </div>
            ) : null}
            <div className={styles.wrapper}>
                <img src={image} alt={name} width="270" height="188" />
                <div className={styles.inner}>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.code}>Артикул: {code}</p>
                    <p className={styles.mainPrice}>
                        {pricePrefix ? <span className={styles.prefix}>{pricePrefix}</span> : null}
                        {price} <RubIcon />
                        {disposable ? null : <span> 1-ый день</span>}
                    </p>
                    {disposable || !secondPrice ? null : (
                        <p className={styles.secondPrice}>
                            {secondPrice} <RubIcon /> <span>со 2-го дня</span>
                        </p>
                    )}
                </div>
                <Link href={cardUrl} prefetch={false}>
                    <a className={styles.link}>{name}</a>
                </Link>
            </div>
            <div className={styles.footer}>
                <Button
                    borderType="none"
                    color="transparent"
                    onClick={favoriteClickHandler}
                    className={favoriteButtonStyleClasses}
                >
                    <HeartIcon />
                </Button>
                {hasInCart ? (
                    <Counter current={cartCard.count} changeHandler={cartCouterHandler} />
                ) : (
                    <Button
                        borderType="none"
                        color="transparent"
                        onClick={addCartHandler}
                        className={cartButtonStyleClasses}
                    >
                        <AddCartIcon />
                        <span>В корзину</span>
                    </Button>
                )}
            </div>
            <ToolTip isOpen={cartToolTipIsOpen} closeHandler={closeCartToolTip} className={styles.toolTip}>
                <AddCartIcon className={styles.cartIcon} />
                <p>Товар добавлен в корзину</p>
            </ToolTip>
            <ToolTip isOpen={favoriteToolTipIsOpen} closeHandler={closeFavoriteToolTip} className={styles.toolTip}>
                <HeartIcon className={styles.favoriteIcon} />
                <p>Товар добавлен в избранные</p>
            </ToolTip>
        </div >
    );
};

export default Card;
