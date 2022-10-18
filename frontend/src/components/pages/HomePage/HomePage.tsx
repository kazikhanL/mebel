import Layout from "@components/Layout";
import PromoSection from "@components/sections/PromoSection";
import DescriptionSection from "@components/sections/DescriptionSection";
import PromoCatalogSection from "@components/sections/PromoCatalogSection";
import SliderSection from "@components/sections/SliderSection";
import NewsPromoSection from "@components/sections/NewsPromoSection";
import FaqSection from "@components/sections/FaqSection";
import SeoSection from "@components/sections/SeoSection";
import OrderSection from "@components/sections/OrderSection";

import SelectionPromoCard from "@components/cards/SelectionPromoCard";
import { ISelection } from "@components/cards/SelectionPromoCard/SelectionPromoCard.props";
import HomePageProps from "./HomePage.props";

const HomePage = ({
    promo,
    categories,
    descriptionItems,
    news,
    faq,
    seo,
    allSelections,
    findSelections,
}: HomePageProps): JSX.Element => {
    const allSelectionsSlides = allSelections.map((item: ISelection) => <SelectionPromoCard key={item.id} info={item} />);
    const findSelectionsSlides = findSelections.map((item: ISelection) => <SelectionPromoCard key={item.id} info={item} />);

    return (
        <Layout categories={categories}>
            <PromoSection isMainPage {...promo} />
            <DescriptionSection items={descriptionItems} />
            <PromoCatalogSection cards={categories} />
            <SliderSection title="Подборки с мебелью" slides={allSelectionsSlides} />
            <NewsPromoSection news={news} />
            <SliderSection title="Возможно вы ищите" slides={findSelectionsSlides} />
            <FaqSection items={faq} />
            <SeoSection {...seo} />
            <OrderSection />
        </Layout>
    );
};

export default HomePage;
