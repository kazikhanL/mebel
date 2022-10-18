import type { NextPage } from "next";

import CategoryPage from "@components/pages/CategoryPage";

import promoData from "@data/promo.json";
import promoCatalog from "@data/promoCatalog.json";
import selectionData from "@data/selections.json";
import newsData from "@data/news.json";
import faqData from "@data/faq.json";
import seoData from "@data/seo.json";

const CatalogPage: NextPage = () => {
    return (
        <CategoryPage
            promo={promoData}
            categories={promoCatalog}
            allSelections={selectionData}
            news={newsData}
            findSelections={selectionData}
            faq={faqData}
            seo={seoData}
        />
    );
};

export default CatalogPage;
