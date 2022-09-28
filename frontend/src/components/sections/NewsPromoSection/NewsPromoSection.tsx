import styles from "./NewsPromoSection.module.scss";
import NewsPromoSectionProps from "./NewsPromoSection.props";

import NewsPromoCard from "@components/cards/NewsPromoCard";
import ButtonLink from "@components/ui/ButtonLink";

const NewsPromoSection = ({ news, className = "" }: NewsPromoSectionProps): JSX.Element => {
    const VISIBLE_SIZE = 6;
    const visibleNews = news.slice(0, VISIBLE_SIZE);

    const sectionStyleClasses = `container ${styles.section} ${className}`;

    return (
        <section className={sectionStyleClasses}>
            <h2>Проведенные мерпориятия</h2>
            <ul className={styles.list}>
                {visibleNews.map((item) => (
                    <li key={item.id}>
                        <NewsPromoCard {...item} />
                    </li>
                ))}
            </ul>
            <ButtonLink href="/news" color="transparent" className={styles.link}>Открыть все</ButtonLink>
        </section>
    );
};

export default NewsPromoSection;
