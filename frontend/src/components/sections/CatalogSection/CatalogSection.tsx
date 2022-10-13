import { useRouter } from "next/router";
import { useState } from "react";

import styles from "./CatalogSection.module.scss";
import CatalogSectionProps from "./CatalogSection.props";
import { SelectOption } from "@components/ui/Select/Select.props";
import CatalogFilterPanel from "./CatalogFilterPanel";

// for testing : tmp
import testData from "@data/category.json";
import testCards from "@data/cards.json";

const filterSelectOptions: SelectOption[] = [
    { label: "По популярности", value: "default" },
    { label: "По позрастанию цены", value: "desk" },
    { label: "По убыванию цены", value: "asc" },
];

const CatalogSection = (props: CatalogSectionProps): JSX.Element => {
    const router = useRouter();

    const [totalCards, setTotalCards] = useState<number>(100); // temp value
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
        </section>
    );
};

export default CatalogSection;
