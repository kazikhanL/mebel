import type { NextPage } from "next";

import Layout from "@components/Layout";
import NewsCatalog from "@components/sections/NewsCatalog";
import OrderSection from "@components/sections/OrderSection";

import promoCatalog from "@data/promoCatalog.json";
import newsData from "@data/news.json";

const NewsPage: NextPage = () => {

    return (
        <Layout categories={promoCatalog}>
            <NewsCatalog news={newsData} />
            <OrderSection />
        </Layout>
    );
};

export default NewsPage;
