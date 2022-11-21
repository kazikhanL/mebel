import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

import Layout from "@components/Layout";
import NewsItemSection from "@components/sections/NewsItemSection";
import apolloClient from "@graphql/index";
import categoriesSchema from "@graphql/categoriesSchema";
import { getNewsSchema, newsPathsSchema } from "@graphql/newsSchemes";
import parseNews, { getNewsPaths } from "@utilities/parse/parseNews";
import parseCategories from "@utilities/parse/parseCategories";
import translateTitle from "@utilities/translateTitle";
import PromoCardProps from "@components/cards/PromoCard/PromoCard.props";
import { InewsPage } from "@interfaces/INews";

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = [];

    try {
        const response = await apolloClient.query({ query: newsPathsSchema() });
        paths = getNewsPaths(response.data.articles.data);
    } catch {
        paths = [];
    }

    const paramsArray = paths.map((url) => ({ params: { slug: url } }));

    return {
        paths: paramsArray,
        fallback: true,
    };
};

type PropsType = {
    categories: PromoCardProps[],
    item: InewsPage | undefined,
    nextLink: InewsPage | undefined,
    prevLink: InewsPage | undefined,
};

export const getStaticProps: GetStaticProps<PropsType> = async (context) => {
    let news: InewsPage[] = [];
    let categories: PromoCardProps[] = [];

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
        const response = await apolloClient.query({ query: getNewsSchema() });
        news = parseNews(response.data.articles.data);
    } catch {
        news = [];
    }

    const currentNewsIndex = news.findIndex((item) => {
        const url = item.url ? item.url : translateTitle(item.title);
        return url === context.params?.slug;
    });

    let nextLink: undefined | InewsPage = undefined;
    let prevLink: undefined | InewsPage = undefined;
    let currentNewsItem: undefined | InewsPage = undefined;

    if (currentNewsIndex !== -1) {
        currentNewsItem = news[currentNewsIndex];
        prevLink = news.at(currentNewsIndex - 1);
        nextLink = currentNewsIndex === news.length - 1 ? news[0] : news.at(currentNewsIndex + 1);
    }

    return {
        props: {
            categories,
            item: currentNewsItem,
            nextLink,
            prevLink,
        },
    };
};

const NewsPage = (props: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element | null => {
    const { categories, item, nextLink, prevLink } = props;

    if (item === undefined) return null;

    return (
        <Layout categories={categories}>
            <NewsItemSection info={item} nextLink={nextLink} prevLink={prevLink} />
        </Layout>
    );
};

export default NewsPage;
