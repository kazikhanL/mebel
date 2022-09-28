import styles from "./PromoCatalogSection.module.scss";
import PromoCatalogSectionProps from "./PromoCatalogSection.props";

import PromoCard from "@components/cards/PromoCard";

const PromoCatalogSection = ({ cards, className = "" }: PromoCatalogSectionProps): JSX.Element => {
    const sectionStyleClasses = `container ${styles.section} ${className}`;

    return (
        <section className={sectionStyleClasses}>
            <h2>Сдаём в аренду</h2>
            <ul className={styles.list}>
                {cards.map(((card) => (
                    <li key={card.id}>
                        <PromoCard {...card} />
                    </li>
                )))}
            </ul>
        </section>
    );
};

export default PromoCatalogSection;
