import { useRouter } from "next/router";

import styles from "./ControllerPanel.module.scss";
import ControllerPanelProps from "./ControllerPanel.props";
import Button from "@components/ui/Button";
import AddCartIcon from "@components/icons/AddCard";
import HeartIcon from "@components/icons/Heart";
import ShareIcon from "@components/icons/Share";
import Counter from "@components/ui/Counter";
import { FullCardType } from "@utilities/parse/cards/parseFullCards";
import { IPromoCard } from "@interfaces/ICard";
import ToolTip from "@components/modals/ToolTip";
import useControllers from "@hooks/useControllers";
import { useAppDispatch, useAppSelector } from "@hooks/store";
import { addToCart, deleteFromCart, updateCartCard } from "@store/cartSlice";
import { addFavorite, deleteFavorite } from "@store/favoriteSlice";
import { DOMAIN } from "@constants";

const fullToPromo = (allInfo: FullCardType): IPromoCard => {
    return {
        id: Number(allInfo.id),
        code: allInfo.code,
        image: allInfo.gallery[0],
        name: allInfo.name,
        disposable: allInfo.disposable,
        pricePrefix: allInfo.price.pricePrefix,
        price: allInfo.price.price,
        secondPrice: allInfo.price.secondPrice,
    };
};

const ControllerPanel = ({ className = "", info }: ControllerPanelProps): JSX.Element => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const [cartToolTipIsOpen, showCartToolTip, closeCartToolTip] = useControllers();
    const [favoriteToolTipIsOpen, showFavoriteToolTip, closeFavoriteToolTip] = useControllers();
    const [shareToolTipIsOpen, showShareToolTip, closeShareToolTip] = useControllers();
    
    const mainInfo = fullToPromo(info);
    const { id } = mainInfo;

    const storeCartCards = useAppSelector((state) => state.cart.cards);
    const storeFavoriteCards = useAppSelector((state) => state.favorites.cards);

    const cartCard = storeCartCards.find((storeCard) => storeCard.id === Number(id));
    const hasInCart = cartCard !== undefined;
    const hasInFavorite = storeFavoriteCards.find((storeCard) => storeCard.id === Number(id)) !== undefined;

    const favoriteClickHandler = (): void => {
        if (hasInFavorite) {
            dispatch(deleteFavorite(id));
        } else {
            dispatch(addFavorite(mainInfo));
            showFavoriteToolTip();
        }
    };

    const addCartHandler = (): void => {
        dispatch(addToCart(mainInfo));
        showCartToolTip();
    };

    const cartCouterHandler = (amout: number): void => {
        if (amout === 0) {
            dispatch(deleteFromCart(id));
        } else {
            dispatch(updateCartCard({ ...mainInfo, count: amout }));
        }
    };

    const shareHandler = (): void => {
        const path = `${DOMAIN}${router.asPath}`;
        navigator.clipboard.writeText(path);

        showShareToolTip();
    };

    const styleClasses = `
        ${className} 
        ${styles.wrapper} 
        ${hasInFavorite ? styles.activeFavorite : ""}
    `;

    return (
        <div className={styleClasses}>
            {hasInCart ? (
                <Counter
                    current={cartCard.count}
                    changeHandler={cartCouterHandler}
                    className={styles.bigCounter}
                />
            ) : (
                <Button
                    color="green-transparent"
                    className={`${styles.button} ${styles.add}`}
                    onClick={addCartHandler}
                >
                    <AddCartIcon />
                    В корзину
                </Button>
            )}
            <Button
                color="transparent"
                borderType="round"
                className={`${styles.button} ${styles.transparent} ${styles.favorite}`}
                onClick={favoriteClickHandler}
            >
                <HeartIcon />
            </Button>
            <Button
                color="transparent"
                borderType="none"
                className={`${styles.button} ${styles.transparent} ${styles.share}`}
                onClick={shareHandler}
            >
                <span className={styles.buttonInner}>
                    <ShareIcon />
                </span>
                Поделиться
            </Button>
            <ToolTip isOpen={cartToolTipIsOpen} closeHandler={closeCartToolTip} className={styles.toolTip}>
                <AddCartIcon className={styles.cartIcon} />
                <p>Товар добавлен в корзину</p>
            </ToolTip>
            <ToolTip isOpen={favoriteToolTipIsOpen} closeHandler={closeFavoriteToolTip} className={styles.toolTip}>
                <HeartIcon className={styles.favoriteIcon} />
                <p>Товар добавлен в избранные</p>
            </ToolTip>
            <ToolTip isOpen={shareToolTipIsOpen} closeHandler={closeShareToolTip} className={styles.toolTip}>
                <p>ссылка скопированна</p>
            </ToolTip>
        </div>
    );
};

export default ControllerPanel;
