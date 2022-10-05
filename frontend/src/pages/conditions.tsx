import type { NextPage } from "next";

import Layout from "@components/Layout";
import ConditionSection from "@components/sections/ConditionSection";
import OrderSection from "@components/sections/OrderSection";

import promoCatalog from "@data/promoCatalog.json";


const Conditions: NextPage = () => {

    return (
        <Layout categories={promoCatalog}>
            <ConditionSection />
            <OrderSection />
        </Layout>
    );
};

export default Conditions;
