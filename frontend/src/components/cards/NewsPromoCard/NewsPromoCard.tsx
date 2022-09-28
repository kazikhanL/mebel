import Link from "next/link";

import styles from "./NewsPromoCard.module.scss";
import INews from "@interfaces/INews";

const NewsPromoCard = ({ title, date, image }: INews): JSX.Element => {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={image} alt={title} width="367" height="211" />
            </div>
            <div className={styles.inner}>
                <h3>{title}</h3>
                <p>{date}</p>
            </div>
            <Link href="/" prefetch={false}>
                <a className={styles.link}>{title}</a>
            </Link>
        </div>
    );
};

export default NewsPromoCard;
