import type { GetStaticProps, InferGetStaticPropsType } from "next";

import CategoryPage from "@components/pages/CategoryPage";
import apolloClient from "@graphql/index";
import { catalogSlugPaths, getAllCatalogPages } from "@graphql/CatalogSlugSchema";
import { parseCatalogPaths, parseCatalogPage, CatalogPageType, CategoryPageType } from "@utilities/parse/parseCatalogSlug";
import translateTitle from "@utilities/translateTitle";
import PromoSectionProps from "@components/sections/PromoSection/PromoSection.props";
import PromoCardProps from "@components/cards/PromoCard/PromoCard.props";
import INews from "@interfaces/INews";
import { ISelection } from "@components/cards/SelectionPromoCard/SelectionPromoCard.props";

export const getStaticPaths = async () => {
    let paths: string[] = [];

    try {
        const response = await apolloClient.query({ query: catalogSlugPaths });
        const categoriesPaths = parseCatalogPaths(response.data.categories.data);
        const thematicCategoriesPaths = parseCatalogPaths(response.data.thematicCategories.data);

        paths = [...categoriesPaths, ...thematicCategoriesPaths];

    } catch {
        paths = [];
    }

    const paramsArray = paths.map((path) => ({ params: { catalog: path } }));

    return {
        paths: paramsArray,
        fallback: true,
    };
};

type CatalogSlugType = {
    current: CategoryPageType | undefined;
    allInfo: CatalogPageType | null;
};

export const getStaticProps: GetStaticProps<CatalogSlugType> = async (context) => {
    let page: CatalogPageType | null = null;
    let current: CategoryPageType | undefined = undefined;

    try {
        const response = await apolloClient.query({ query: getAllCatalogPages() });
        page = parseCatalogPage(response);
    } catch {
        page = null;
    }

    if (page === null || context.params?.catalog === undefined) {
        return {
            props: {
                current: undefined,
                allInfo: page,
            },
        };
    }

    const currentSlug = context.params.catalog;

    current = page.thematicCategories.find((category) => {
        const metaURL = category.meta.url;
        const mainTitlle = category.promo.H1;
        const url = metaURL ? metaURL : translateTitle(mainTitlle);

        return currentSlug === url;
    });


    if (current) {
        return {
            props: {
                current,
                allInfo: page,
            },
        };
    }

    current = page.categories.find((category) => {
        const metaURL = category.meta.url;
        const mainTitlle = category.promo.H1;
        const url = metaURL ? metaURL : translateTitle(mainTitlle);

        return currentSlug === url;
    });

    return {
        props: {
            current,
            allInfo: page,
        },
    };
};

const CatalogPage = (props: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element | null => {
    const { current, allInfo } = props;

    if (current === undefined || allInfo === null) return null;

    const promo: PromoSectionProps = {
        ...current.promo,
        title: current.promo.H1,
    };

    const categories: PromoCardProps[] = allInfo.categories.map((category) => ({
        id: Number(category.id),
        title: category.shortInfo.name,
        image: category.shortInfo.image,
        link: category.meta.url ? category.meta.url : translateTitle(category.promo.H1),
    }));

    const selections: ISelection[] = allInfo.categories.map((category) => ({
        ...category.cardInfo,
        id: Number(category.id),
        link: category.meta.url ? category.meta.url : translateTitle(category.promo.H1),
    }));

    const thematicSelections: ISelection[] = allInfo.thematicCategories.map((category) => ({
        ...category.cardInfo,
        id: Number(category.id),
        link: category.meta.url ? category.meta.url : translateTitle(category.promo.H1),
    }));

    const news: INews[] = allInfo.news.map((newsItem) => ({
        id: Number(newsItem.id),
        title: newsItem.H1,
        date: newsItem.date,
        image: newsItem.image,
        content: "",
        goods: [],
        url: null,
    }));

    return (
        <CategoryPage
            promo={promo}
            categories={categories}
            allSelections={selections}
            news={news}
            findSelections={thematicSelections}
            faq={allInfo.faq}
            seo={current.seo}
            currentCategory={current}
        />
    );
};

export default CatalogPage;
