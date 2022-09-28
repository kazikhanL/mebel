import type { NextPage } from "next";

import Layout from "@components/Layout";
import ClientErrorSection from "@components/sections/ClientErrorSection";
import promoCatalog from "@data/promoCatalog.json";

const ErrorPage: NextPage = () => {
    return (
        <Layout categories={promoCatalog}>
            <ClientErrorSection />
        </Layout>
    );
};

export default ErrorPage;
