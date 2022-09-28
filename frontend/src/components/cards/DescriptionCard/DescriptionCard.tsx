import styles from "./DescriptionCard.module.scss";
import DescriptionCardProps from "./DescriptionCard.props";

import IconTag from "@components/elements/IconTag";

const DescriptionCard = ({
    color,
    icon,
    info,
    className = "",
}: DescriptionCardProps): JSX.Element => {
    const { title, text } = info;

    const cardStyleClasses = `${styles.card} ${styles[color]} ${className}`;

    return (
        <article className={cardStyleClasses}>
            <IconTag className={styles.tag} color={color}>{icon}</IconTag>
            <h2>{title}</h2>
            <p>{text}</p>
            <div className={styles.back} />
        </article>
    );
};

export default DescriptionCard;
