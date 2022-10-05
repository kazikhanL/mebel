import Link from "next/link";

import styles from "./SelectionPromoCard.module.scss";
import SelectionPromoCardProps from "./SelectionPromoCard.props";

import Button from "@components/ui/Button";

const SelectionPromoCard = ({ info, className = "" }: SelectionPromoCardProps): JSX.Element => {
    const { image, title, subTitle, link } = info;

    const styleClasses = `${styles.card} ${className}`;

    return (
        <div className={styleClasses}>
            <div className={styles.imageWrapper}>
                <img src={image} alt={title} width="270" height="251" />
            </div>
            <div className={styles.inner}>
                <h3>{title}</h3>
                <p>{subTitle}</p>
                <Button color="black">Выбрать</Button>
            </div>
            <Link href={link} prefetch={false}>
                <a>{title}</a>
            </Link>
        </div>
    );
};

export default SelectionPromoCard;
