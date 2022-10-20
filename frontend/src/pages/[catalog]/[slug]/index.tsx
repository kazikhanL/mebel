import type { NextPage } from "next";

import CardPage from "@components/pages/CardPage";
import CategoryPage from "@components/pages/CategoryPage";

import promoCatalog from "@data/promoCatalog.json";
import selectionData from "@data/selections.json";
import faqData from "@data/faq.json";
import seoData from "@data/seo.json";

const SlugPage: NextPage = () => {
    return (
        <CardPage
            categories={promoCatalog}
            allSelections={selectionData}
            findSelections={selectionData}
            faq={faqData}
            seo={seoData}
        />
    );
};

export default SlugPage;
