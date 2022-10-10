import { useState } from "react";

import styles from "./NewsCatalog.module.scss";
import NewsCatalogProps from "./NewsCatalog.props";
import INews from "@interfaces/INews";
import NewsPromoCard from "@components/cards/NewsPromoCard";
import Button from "@components/ui/Button";

// TODO: сделать пагинацию и т. д.
const NewsCatalog = ({ className = "", news }: NewsCatalogProps): JSX.Element => {
    const DEFAULT_VISIBLE_SIZE = 12;

    const [cards, setCards] = useState<INews[]>(news);
    const [visibleSize, setVisibleSize] = useState<number>(DEFAULT_VISIBLE_SIZE);

    
    const showMoreHandler = (): void => {
        setVisibleSize((prevState) => prevState + DEFAULT_VISIBLE_SIZE);
        // fetch new cards;
    };
    
    const visibleCards = cards.slice(0, visibleSize);
    const styleClasses = `container ${styles.section} ${className}`;

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
            <Button 
                color="transparent"
                className={styles.button}
                onClick={showMoreHandler}
            >
                Показать еще
            </Button>
        </section>
    );
};

export default NewsCatalog;
 