import Layout from "@components/Layout";
import PromoSection from "@components/sections/PromoSection";
import CatalogSection from "@components/sections/CatalogSection";
import SliderSection from "@components/sections/SliderSection";
import NewsPromoSection from "@components/sections/NewsPromoSection";
import FaqSection from "@components/sections/FaqSection";
import SeoSection from "@components/sections/SeoSection";
import OrderSection from "@components/sections/OrderSection";

import SelectionPromoCard from "@components/cards/SelectionPromoCard";
import { ISelection } from "@components/cards/SelectionPromoCard/SelectionPromoCard.props";

import CategoryPageProps from "./CategoryPage.props";

const CategoryPage = ({
    promo,
    categories,
    news,
    faq,
    seo,
    allSelections,
    findSelections,
}: CategoryPageProps): JSX.Element => {
    const allSelectionsSlides = allSelections.map((item: ISelection) => <SelectionPromoCard key={item.id} info={item} />);
    const findSelectionsSlides = findSelections.map((item: ISelection) => <SelectionPromoCard key={item.id} info={item} />);

    return (
        <Layout categories={categories}>
            <PromoSection isMainPage {...promo} />
            <CatalogSection />
            <SliderSection title="Подборки с мебелью" slides={allSelectionsSlides} />
            <NewsPromoSection news={news} />
            <SliderSection title="Возможно вы ищите" slides={findSelectionsSlides} />
            <FaqSection items={faq} />
            <SeoSection {...seo} />
            <OrderSection />
        </Layout>
    );
};

export default CategoryPage;
