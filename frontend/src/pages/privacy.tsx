import type { NextPage } from "next";

import Layout from "@components/Layout";
import PrivacySection from "@components/sections/PrivacySection";
import OrderSection from "@components/sections/OrderSection";

import promoCatalog from "@data/promoCatalog.json";


const Conditions: NextPage = () => {

    return (
        <Layout categories={promoCatalog}>
            <PrivacySection />
            <OrderSection />
        </Layout>
    );
};

export default Conditions;
