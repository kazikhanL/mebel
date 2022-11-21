import type { GetStaticProps, InferGetStaticPropsType } from "next";

import Layout from "@components/Layout";
import NewsCatalog from "@components/sections/NewsCatalog";
import OrderSection from "@components/sections/OrderSection";

import apolloClient from "@graphql/index";
import categoriesSchema from "@graphql/categoriesSchema";
import { getNewsSchema } from "@graphql/newsSchemes";
import parseNews from "@utilities/parse/parseNews";
import parseCategories from "@utilities/parse/parseCategories";
import translateTitle from "@utilities/translateTitle";
import PromoCardProps from "@components/cards/PromoCard/PromoCard.props";
import { InewsPage } from "@interfaces/INews";

type PropsType = {
    categories: PromoCardProps[],
    news: InewsPage[],
};

export const getStaticProps: GetStaticProps<PropsType> = async () => {
    let categories: PromoCardProps[] = [];
    let news: InewsPage[] = [];

    try {
        const responseCategories = await apolloClient.query({ query: categoriesSchema() });
        const rawData = parseCategories(responseCategories.data.categories.data);

        categories = rawData.map((rawCategory) => ({
            id: Number(rawCategory.id),
            image: rawCategory.shortInfo.image,
            title: rawCategory.shortInfo.name,
            link: rawCategory.meta.url ? rawCategory.meta.url : translateTitle(rawCategory.promo.H1),
        }));
    } catch {
        categories = [];
    }

    try {
        const responseNews = await apolloClient.query({ query: getNewsSchema() });
        
        news = parseNews(responseNews.data.articles.data);
    } catch {
        news = [];
    }

    return {
        props: {
            categories,
            news,
        },
    };
};

const NewsPage = ({ categories, news }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
    return (
        <Layout categories={categories}>
            <NewsCatalog news={news} />
            <OrderSection />
        </Layout>
    );
};

export default NewsPage;
