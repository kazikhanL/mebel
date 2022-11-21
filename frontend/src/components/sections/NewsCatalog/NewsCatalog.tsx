import { useState } from "react";

import styles from "./NewsCatalog.module.scss";
import NewsCatalogProps from "./NewsCatalog.props";
import NewsPromoCard from "@components/cards/NewsPromoCard";
import Button from "@components/ui/Button";

const NewsCatalog = ({ className = "", news }: NewsCatalogProps): JSX.Element => {
    const DEFAULT_VISIBLE_SIZE = 12;
    const cards = news;

    const [visibleSize, setVisibleSize] = useState<number>(DEFAULT_VISIBLE_SIZE);

    const showMoreHandler = (): void => {
        setVisibleSize((prevState) => prevState + DEFAULT_VISIBLE_SIZE);
    };

    const visibleCards = cards.slice(0, visibleSize);
    const styleClasses = `container ${styles.section} ${className}`;
    const isMultyPage = cards.length > visibleSize;

    return (
        <section className={styleClasses}>
            <h2>Мероприятия</h2>
            <ul className={styles.list}>
                {visibleCards.map((card) => (
                    <li key={card.id}>
                        <NewsPromoCard {...card} />
                    </li>
                ))}
            </ul>
            {isMultyPage ? (
                <Button
                    color="transparent"
                    className={styles.button}
                    onClick={showMoreHandler}
                >
                    Показать еще
                </Button>
            ) : null}
        </section>
    );
};

export default NewsCatalog;
