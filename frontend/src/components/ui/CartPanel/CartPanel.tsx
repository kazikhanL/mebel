import Link from "next/link";

import styles from "./CartPanel.module.scss";
import CartPanelProps from "./CartPanel.props";

import CartIcon from "@components/icons/Cart";
import HeartIcon from "@components/icons/Heart";
import useToggle from "@hooks/useToggle";

const CartPanel = ({ className = "" }: CartPanelProps): JSX.Element => {
    const [active, toggle] = useToggle();

    return (
        <div className={`${styles.wrapper} ${className}`} onClick={toggle}>
            <Link href="/">
                <a className={styles.favorites}>
                    <HeartIcon />
                </a>
            </Link>
            <Link href="/">
                <a className={`${styles.count} ${active ? styles.active : ""}`}>
                    <CartIcon />
                    <span>0</span>
                    <span className={styles.price}>1 131 280 ₽</span>
                </a>
            </Link>
        </div>
    );
};

export default CartPanel;
