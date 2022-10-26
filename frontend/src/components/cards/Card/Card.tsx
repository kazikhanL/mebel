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
import useToggle from "@hooks/useToggle";
import { useAppDispatch, useAppSelector } from "@hooks/store";
import { addFavorite, deleteFavorite } from "@store/favoriteSlice";

const Card = ({ className = "", info, hasInCart, hasInFavorite }: CardProps): JSX.Element => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const { id, code, name, image, disposable, pricePrefix, price, secondPrice } = info;

    const favoriteClickHandler = (): void => {
        if (hasInFavorite) {
            dispatch(deleteFavorite(id));
        } else {
            dispatch(addFavorite(info));
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

    const cardUrl = `/${router.query.catalog}/${code}`;

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
                    {disposable ? null : (
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
                    <Counter current={1} changeHandler={(i) => { console.log(i); }} />
                ) : (
                    <Button
                        borderType="none"
                        color="transparent"
                        // onClick={() => {}}
                        className={cartButtonStyleClasses}
                    >
                        <AddCartIcon />
                        <span>В корзину</span>
                    </Button>
                )}
            </div>
        </div >
    );
};

export default Card;
