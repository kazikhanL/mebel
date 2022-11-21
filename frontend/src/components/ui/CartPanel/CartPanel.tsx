import Link from "next/link";

import styles from "./CartPanel.module.scss";
import CartPanelProps from "./CartPanel.props";
import CartIcon from "@components/icons/Cart";
import HeartIcon from "@components/icons/Heart";
import { useAppSelector } from "@hooks/store";
import getTotalSum from "@utilities/getTotalSum";
import RubIcon from "@components/icons/Rub";

const CartPanel = ({ className = "" }: CartPanelProps): JSX.Element => {
    const cards = useAppSelector((state) => state.cart.cards);
    const active = cards.length > 0;

    return (
        <div className={`${styles.wrapper} ${className}`}>
            <Link href="/favorites" prefetch={false}>
                <a className={styles.favorites}>
                    <HeartIcon />
                </a>
            </Link>
            <Link href="/cart" prefetch={false}>
                <a className={`${styles.count} ${active ? styles.active : ""}`}>
                    <CartIcon />
                    <span>{cards.length}</span>
                    <span className={styles.price}>{getTotalSum(cards)} <RubIcon /></span>
                </a>
            </Link>
        </div>
    );
};

export default CartPanel;
