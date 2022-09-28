import type { NextPage } from "next";

import Layout from "@components/Layout";
import PromoSection from "@components/sections/PromoSection";
import DescriptionSection from "@components/sections/DescriptionSection";
import PromoCatalogSection from "@components/sections/PromoCatalogSection";
import SliderSection from "@components/sections/SliderSection";
import NewsPromoSection from "@components/sections/NewsPromoSection";
import FaqSection from "@components/sections/FaqSection";
import SeoSection from "@components/sections/SeoSection";
import OrderSection from "@components/sections/OrderSection";

import promoData from "@data/promo.json";
import descriptionItems from "@data/descriptionCards.json";
import promoCatalog from "@data/promoCatalog.json";
import selectionData from "@data/selections.json";
import newsData from "@data/news.json";
import faqData from "@data/faq.json";
import seoData from "@data/seo.json";

import SelectionPromoCard from "@components/cards/SelectionPromoCard";
import { ISelection } from "@components/cards/SelectionPromoCard/SelectionPromoCard.props";

const Home: NextPage = () => {
    const slides = selectionData.map((item: ISelection) => <SelectionPromoCard key={item.id} info={item} />);

    return (
        <Layout categories={promoCatalog}>
            <PromoSection isMainPage {...promoData} />
            <DescriptionSection items={descriptionItems} />
            <PromoCatalogSection cards={promoCatalog} />
            <SliderSection title="Подборки с мебелью" slides={slides} />
            <NewsPromoSection news={newsData} />
            <SliderSection title="Возможно вы ищите" slides={slides} />
            <FaqSection items={faqData} />
            <SeoSection {...seoData} />
            <OrderSection />
        </Layout>
    );
};

export default Home;
