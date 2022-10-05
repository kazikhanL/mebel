import type { NextPage } from "next";

import Layout from "@components/Layout";
import ContactsSection from "@components/sections/ContactsSection";
import OrderSection from "@components/sections/OrderSection";

import promoCatalog from "@data/promoCatalog.json";


const Contacts: NextPage = () => {

    return (
        <Layout categories={promoCatalog}>
            <ContactsSection />
            <OrderSection />
        </Layout>
    );
};

export default Contacts;
