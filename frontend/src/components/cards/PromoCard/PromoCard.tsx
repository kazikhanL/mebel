import Link from "next/link";

import styles from "./PromoCard.module.scss";
import PromoCardProps from "./PromoCard.props";

const PromoCard = ({ image, title, link, className = "" }: PromoCardProps): JSX.Element => {
    const cardStyleClasses = `${styles.card} ${className}`;

    // TODO: REMOVE LITERAL LINK (divan)
    return (
        <div className={cardStyleClasses}>
            <img src={image} alt={title} width="173" height="133" />
            <h3>{title}</h3>
            <Link href={`/divan${link}`} prefetch={false}>
                <a className={styles.link}>{title}</a>
            </Link>
        </div>
    );
};

export default PromoCard;
