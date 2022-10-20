import styles from "./ControllerPanel.module.scss";
import ControllerPanelProps from "./ControllerPanel.props";
import Button from "@components/ui/Button";
import AddCartIcon from "@components/icons/AddCard";
import HeartIcon from "@components/icons/Heart";
import ShareIcon from "@components/icons/Share";

const ControllerPanel = ({ className = "", info }: ControllerPanelProps): JSX.Element => {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            <Button
                color="green-transparent"
                className={`${styles.button} ${styles.add}`}
            >
                <AddCartIcon />
                В корзину
            </Button>
            <Button
                color="transparent"
                borderType="round"
                className={`${styles.button} ${styles.transparent} ${styles.favorite}`}
            >
                <HeartIcon />
            </Button>
            <Button
                color="transparent"
                borderType="none"
                className={`${styles.button} ${styles.transparent} ${styles.share}`}
            >
                <span className={styles.buttonInner}>
                    <ShareIcon />
                </span>
                Поделиться
            </Button>
        </div>
    );
};

export default ControllerPanel;
