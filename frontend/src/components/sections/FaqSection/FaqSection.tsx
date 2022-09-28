import { useState } from "react";

import styles from "./FaqSection.module.scss";
import FaqSectionProps from "./FaqSection.props";

import FaqItem from "@components/elements/FaqItem";
import Button from "@components/ui/Button";

const FaqSection = ({ items, className = "" }: FaqSectionProps): JSX.Element => {
    const VISIBLE_LIMIT = 5;

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [allVisible, setAllVisible] = useState<boolean>(false);

    const showAll = () => setAllVisible(true);

    const isButtonVisible = items.length > VISIBLE_LIMIT && !allVisible;
    const visibleItems = allVisible ? items : items.slice(0, VISIBLE_LIMIT);

    return (
        <section className={className}>
            <div className="container">
                <h2>Вопросы и ответы</h2>
                <ul className={styles.list}>
                    {visibleItems.map((item, index) => (
                        <li key={item.id} onClick={setActiveIndex.bind(this, index)}>
                            <FaqItem active={index === activeIndex} info={item} />
                        </li>
                    ))}
                    {isButtonVisible ? (
                        <li>
                            <Button
                                className={styles.button}
                                color="transparent"
                                onClick={showAll}
                            >
                                Показать все
                            </Button>
                        </li>
                    ) : null}

                </ul>
            </div>
        </section>
    );
};

export default FaqSection;
