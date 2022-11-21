import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styles from "./CatalogSection.module.scss";
import CatalogSectionProps from "./CatalogSection.props";
import { SelectOption } from "@components/ui/Select/Select.props";
import CatalogFilterPanel from "./CatalogFilterPanel";
import { IPromoCard } from "@interfaces/ICard";
import CatalogList from "./CatalogList";
import Pagination from "@components/ui/Pagination";
import translateTitle from "@utilities/translateTitle";

import apolloClient from "@graphql/index";
import getCatalogCardsSchema from "@graphql/cards/catalog";
import parseFullCards, { FullCardType } from "@utilities/parse/cards/parseFullCards";
import scrollToCatalog from "@utilities/scrollToCatalog";

const prepearCards = (cards: FullCardType[]): IPromoCard[] => {
    return cards.map((card) => ({
        id: Number(card.id),
        code: card.code,
        image: card.gallery[0],
        name: card.name,
        disposable: card.disposable,
        pricePrefix: card.price.pricePrefix,
        price: card.price.price,
        secondPrice: card.price.secondPrice,
    }));
};

const filterSelectOptions: SelectOption[] = [
    { label: "По популярности", value: "default" },
    { label: "По позрастанию цены", value: "asc" },
    { label: "По убыванию цены", value: "desc" },
];

const CatalogSection = ({ currentCategory }: CatalogSectionProps): JSX.Element => {
    const router = useRouter();

    // фильтры и под каталоги
    const filtersArray = currentCategory.filters.map((filter) => filter.name);
    const subCategoriesArray = currentCategory.subCategories.map((category) => {
        const metaURL = category.meta.url;
        const mainTitle = category.promo.H1;

        return {
            id: Number(category.id),
            name: category.shortInfo.name,
            url: metaURL ? metaURL : translateTitle(mainTitle),
        };
    });

    const PAGE_SIZE = 16;

    const [totalCards, setTotalCards] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [currentPageSize, setCurrentPageSize] = useState<number>(PAGE_SIZE);
    const [currentFilter, setCurrentFilter] = useState<null | string>(null);
    const [currentSelect, setCurrentSelect] = useState<SelectOption>(filterSelectOptions[0]);
    const [cards, setCards] = useState<IPromoCard[]>([]);
    const [hasError, setHasError] = useState<boolean>(false);

    const onChangeFilter = (filter: string | null): void => setCurrentFilter(filter);
    const onChangeSelect = (option: SelectOption): void => setCurrentSelect(option);

    useEffect(() => {
        const categoryID = Number(currentCategory.id);
        const sortType = currentSelect.value === "default" ? null : currentSelect.value as "asc" | "desc";

        const slug = router.query.slug ? router.query.slug as string : null;
        const subCategory = subCategoriesArray.find((category) => category.url === slug);
        const subCategoryName = subCategory ? subCategory.name : null;

        const graphqlSchema = getCatalogCardsSchema(
            currentPage,
            currentPageSize,
            categoryID,
            subCategoryName,
            currentFilter,
            sortType
        );

        apolloClient
            .query({ query: graphqlSchema })
            .then((response) => parseFullCards(response))
            .then((data) => {
                setTotalCards(data.total);
                setCards(prepearCards(data.cards));
            })
            .catch(() => setHasError(true));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, currentPageSize, currentFilter, currentSelect, currentCategory.id, router.query.slug]);

    const changePageHandler = (index: number): void => {
        setCurrentPage(index);
        setCurrentPageSize(PAGE_SIZE);
        scrollToCatalog();
    };

    const shawMoreHandler = (): void => {
        setCurrentPage((prevState) => prevState + 1);
        setCurrentPageSize((prevState) => prevState + PAGE_SIZE);
    };

    if (hasError) {
        return <p>Ошибка запроса</p>;
    }

    return (
        <section className={`container ${styles.section}`} id="catalog">
            <h2>Каталог стульев</h2>
            <CatalogFilterPanel
                className={styles.filterPanel}
                filters={filtersArray}
                onChangeFilter={onChangeFilter}
                subCategories={subCategoriesArray}
                selectOptons={filterSelectOptions}
                currentSelectOption={currentSelect}
                onChangeSelect={onChangeSelect}
            />
            <CatalogList className={styles.list} cards={cards} />
            <Pagination
                className={styles.pagination}
                current={currentPage}
                pageSize={PAGE_SIZE}
                total={totalCards}
                changeHandler={changePageHandler}
                showMoreHandler={shawMoreHandler}
            />
        </section>
    );
};

export default CatalogSection;
