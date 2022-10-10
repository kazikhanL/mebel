import type { GetStaticPaths, GetStaticProps } from "next";

import Layout from "@components/Layout";
import NewsItemSection from "@components/sections/NewsItemSection";
import promoCatalog from "@data/promoCatalog.json";
import newsData from "@data/news.json";

import INews from "@interfaces/INews";
import translateTitle from "@utilities/translateTitle";

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = newsData.map((item) => item.url ? item.url : translateTitle(item.title));
    const paramsArray = paths.map((url) => ({ params: { slug: url } }));

    return {
        paths: paramsArray,
        fallback: true,
    };
};

type ContextType = { item: INews | undefined };

export const getStaticProps: GetStaticProps<ContextType> = async (context) => {
    const currentNewsItem = newsData.find((item) => {
        const url = item.url ? item.url : translateTitle(item.title);
        return url === context.params?.slug;
    });

    return {
        props: { item: currentNewsItem },
    };
};

const NewsPage = (context: ContextType): JSX.Element | null => {
    const newsItem = context.item;

    if (newsItem === undefined) return null;

    return (
        <Layout categories={promoCatalog}>
            <NewsItemSection info={newsItem} nextLink={newsItem} prevLink={newsItem} />
        </Layout>
    );
};

export default NewsPage;
