import type { GetStaticProps, InferGetServerSidePropsType, GetServerSideProps } from "next";

import CategoryPage from "@components/pages/CategoryPage";
import CardPage from "@components/pages/CardPage";
import CardPageProps from "@components/pages/CardPage/CardPage.props";
import parseFullCards, { FullCardType, parseFullCard } from "@utilities/parse/cards/parseFullCards";

import apolloClient from "@graphql/index";
import { catalogSlugPaths, getAllCatalogPages } from "@graphql/CatalogSlugSchema";
import { parseCatalogPaths, parseCatalogPage, CatalogPageType, CategoryPageType } from "@utilities/parse/parseCatalogSlug";
import getCardIDSchema from "@graphql/cards/getCardID";
import translateTitle from "@utilities/translateTitle";
import PromoSectionProps from "@components/sections/PromoSection/PromoSection.props";
import PromoCardProps from "@components/cards/PromoCard/PromoCard.props";
import INews from "@interfaces/INews";
import { ISelection } from "@components/cards/SelectionPromoCard/SelectionPromoCard.props";

type CatalogSlugType = {
    isError: boolean;
    isSubcatalog: boolean;
    current: CategoryPageType | FullCardType | null;
    allInfo: CatalogPageType | null;
};

export const getServerSideProps: GetServerSideProps<CatalogSlugType> = async (context) => {
    let page: CatalogPageType | null = null;

    const ERROR_RESPONSE = {
        isError: true,
        isSubcatalog: false,
        current: null,
        allInfo: null,
    };

    try {
        const response = await apolloClient.query({ query: getAllCatalogPages() });
        page = parseCatalogPage(response);
    } catch {
        page = null;
    }

    if (page === null) {
        return { props: ERROR_RESPONSE };
    }

    const currentCategory: CategoryPageType | undefined = page.categories.find((category) => {
        const metaURL = category.meta.url;
        const mainTitlle = category.promo.H1;
        const url = metaURL ? metaURL : translateTitle(mainTitlle);

        return context.query.catalog === url;
    });

    if (currentCategory === undefined) {
        return { props: ERROR_RESPONSE };
    }

    const currentSubCategory = currentCategory.subCategories.find((subCategory) => {
        const metaURL = subCategory.meta.url;
        const mainTitlle = subCategory.promo.H1;
        const url = metaURL ? metaURL : translateTitle(mainTitlle);

        return context.query.slug === url;
    });

    if (currentSubCategory) {
        currentCategory.meta = currentSubCategory.meta;
        currentCategory.promo = currentSubCategory.promo;
        currentCategory.seo = currentSubCategory.seo ? currentSubCategory.seo : currentCategory.seo;
        currentCategory.cardInfo = currentSubCategory.cardInfo;
        currentCategory.shortInfo = currentSubCategory.shortInfo;

        return {
            props: {
                isError: false,
                isSubcatalog: true,
                current: currentCategory,
                allInfo: page,
            },
        };
    }

    let card: FullCardType | null = null;

    try {
        const cardID = Number(context.query.slug);
        const response = await apolloClient.query({ query: getCardIDSchema(cardID) });

        card = parseFullCard(response.data.card.data);
    } catch {
        card = null;
    }

    if (card === null) {
        return { props: ERROR_RESPONSE };
    }

    return {
        props: {
            isError: false,
            isSubcatalog: false,
            allInfo: page,
            current: card,
        },
    };
};


const SlugPage = ({ isError, isSubcatalog, current, allInfo }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element | null => {
    if (isError || current === null || allInfo === null) return null;

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

    if (isSubcatalog) {
        const currentInfo = current as CategoryPageType;
        const promo: PromoSectionProps = {
            ...currentInfo.promo,
            title: currentInfo.promo.H1,
        };

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
                seo={currentInfo.seo}
                currentCategory={currentInfo}
            />
        );
    } else {
        const currentInfo = current as FullCardType;

        return (
            <CardPage
                cardInfo={currentInfo}
                categories={categories}
                allSelections={selections}
                findSelections={thematicSelections}
                faq={allInfo.faq}
                seo={currentInfo.seo}
            />
        );
    }
};

export default SlugPage;
