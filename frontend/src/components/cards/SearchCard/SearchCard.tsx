import Link from "next/link";

import styles from "./SearchCard.module.scss";
import PromoCardProps from "../PromoCard/PromoCard.props";

const SearchCard = ({ image, link, title, className = "" }: PromoCardProps): JSX.Element => {
    return (
        <div className={`${styles.card} ${className}`}>
            <Link href={link} prefetch={false}>
                <a>{title}</a>
            </Link>
            <img
                width="48px"
                height="48px"
                src={image}
                alt={title}
            />
            <p>{title}</p>
        </div>
    );
};

export default SearchCard;
