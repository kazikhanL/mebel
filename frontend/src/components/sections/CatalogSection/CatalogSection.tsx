import { useRouter } from "next/router";
import { useState } from "react";

import styles from "./CatalogSection.module.scss";
import CatalogSectionProps from "./CatalogSection.props";
import { SelectOption } from "@components/ui/Select/Select.props";
import CatalogFilterPanel from "./CatalogFilterPanel";
import { IPromoCard } from "@interfaces/ICard";
import CatalogList from "./CatalogList";

// for testing : tmp
import testData from "@data/category.json";
import testCards from "@data/cards.json";

// tmp function : TODO:REMOVE
const prepearCards = (): IPromoCard[] => {
    return testCards.map((card) => ({
        id: card.id,
        code: card.code,
        image: card.images[0],
        name: card.name,
        disposable: card.disposable,
        pricePrefix: card.pricePrefix,
        price: card.price,
        secondPrice: card.secondDayPrice,
    }));
};

const filterSelectOptions: SelectOption[] = [
    { label: "По популярности", value: "default" },
    { label: "По позрастанию цены", value: "desk" },
    { label: "По убыванию цены", value: "asc" },
];

const CatalogSection = (props: CatalogSectionProps): JSX.Element => {
    const router = useRouter();
    const PAGE_SIZE = 16;
    const testCards = prepearCards();

    const [totalCards, setTotalCards] = useState<number>(testCards.length); // temp value
    const [currentPage, setCurrentPage] = useState<number>(1); // temp value
    const [currentFilter, setCurrentFilter] = useState<null | string>(null);
    const [currentSelect, setCurrentSelect] = useState<SelectOption>(filterSelectOptions[0]);

    const onChangeFilter = (filter: string): void => setCurrentFilter(filter);
    const onChangeSelect = (option: SelectOption): void => setCurrentSelect(option);


    return (
        <section className={`container ${styles.section}`}>
            <h2>Каталог стульев</h2>
            <CatalogFilterPanel
                className={styles.filterPanel}
                filters={testData.filters}
                onChangeFilter={onChangeFilter}
                subCategories={testData.subCategories}
                selectOptons={filterSelectOptions}
                currentSelectOption={currentSelect}
                onChangeSelect={onChangeSelect}
            />
            <CatalogList className={styles.list} cards={testCards.slice(0, PAGE_SIZE)} />
        </section>
    );
};

export default CatalogSection;
