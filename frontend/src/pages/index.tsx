import type { GetStaticProps, InferGetStaticPropsType } from "next";

import apolloClient from "@graphql/index";
import homePageSchema from "@graphql/homePageSchema";
import translateTitle from "@utilities/translateTitle";
import HomePage from "@components/pages/HomePage";
import parseHomePage, { HomePageDataType } from "@utilities/parse/parseHomePage";
import INews from "@interfaces/INews";
import PromoCardProps from "@components/cards/PromoCard/PromoCard.props";
import { ISelection } from "@components/cards/SelectionPromoCard/SelectionPromoCard.props";

export const getStaticProps: GetStaticProps<HomePageDataType> = async () => {
    let allData = null;

    try {
        const rawData = await apolloClient.query({ query: homePageSchema() });
        allData = parseHomePage(rawData);
    } catch (error) {
        allData = null;
    }

    return {
        props: allData as HomePageDataType,
    };
};

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
    const { home, faq } = props;

    const news: INews[] = props.news.map((newsItem) => ({
        id: Number(newsItem.id),
        title: newsItem.H1,
        date: newsItem.date,
        image: newsItem.image,
        content: "",
        goods: [],
        url: null,
    }));

    const categories: PromoCardProps[] = props.categories.map((category) => ({
        id: Number(category.id),
        title: category.shortInfo.name,
        image: category.shortInfo.image,
        link: category.meta.url ? category.meta.url : translateTitle(category.promo.H1),
    }));

    const selections: ISelection[] = props.categories.map((category) => ({
        ...category.cardInfo,
        id: Number(category.id),
        link: category.meta.url ? category.meta.url : translateTitle(category.promo.H1),
    }));

    const thematicSelections: ISelection[] = props.thematicCategories.map((category) => ({
        ...category.cardInfo,
        id: Number(category.id),
        link: category.meta.url ? category.meta.url : translateTitle(category.promo.H1),
    }));

    return (
        <HomePage
            promo={home.promo}
            descriptionItems={home.description}
            categories={categories}
            allSelections={selections}
            news={news}
            findSelections={thematicSelections}
            faq={faq}
            seo={home.seo}
        />
    );
};

export default Home;
