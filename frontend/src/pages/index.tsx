import type { NextPage } from "next";

import HomePage from "@components/pages/HomePage";

import promoData from "@data/promo.json";
import descriptionItems from "@data/descriptionCards.json";
import promoCatalog from "@data/promoCatalog.json";
import selectionData from "@data/selections.json";
import newsData from "@data/news.json";
import faqData from "@data/faq.json";
import seoData from "@data/seo.json";

const Home: NextPage = () => {
    return (
        <HomePage
            promo={promoData}
            descriptionItems={descriptionItems}
            categories={promoCatalog}
            allSelections={selectionData}
            news={newsData}
            findSelections={selectionData}
            faq={faqData}
            seo={seoData}
        />
    );
};

export default Home;
