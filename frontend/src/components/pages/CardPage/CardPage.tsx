import CardPageProps from "./CardPage.props";
import Layout from "@components/Layout";
import SliderSection from "@components/sections/SliderSection";
import CardDescriptionSection from "@components/sections/CardDescriptionSection";
import FaqSection from "@components/sections/FaqSection";
import SeoSection from "@components/sections/SeoSection";

import SelectionPromoCard from "@components/cards/SelectionPromoCard";
import Card from "@components/cards/Card";
import { ISelection } from "@components/cards/SelectionPromoCard/SelectionPromoCard.props";

const CardPage = ({
    categories,
    allSelections,
    findSelections,
    faq,
    seo,
    cardInfo,
}: CardPageProps): JSX.Element => {
    const allSelectionsSlides = allSelections.map((item: ISelection) => <SelectionPromoCard key={item.id} info={item} />);
    const findSelectionsSlides = findSelections.map((item: ISelection) => <SelectionPromoCard key={item.id} info={item} />);

    const cardSimilarSlides = cardInfo.similars.map((item) => <Card key={item.id} info={item} />);
    const cardRecommendedSlides = cardInfo.recommended.map((item) => <Card key={item.id} info={item} />);

    return (
        <Layout categories={categories}>
            <CardDescriptionSection cardInfo={cardInfo} />
            {cardRecommendedSlides.length > 0 ? <SliderSection title="Рекомендуемые товары" slides={cardRecommendedSlides} /> : null}
            {cardSimilarSlides.length > 0 ? <SliderSection title="Похожие товары" slides={cardSimilarSlides} /> : null}
            {findSelectionsSlides.length > 0 ? <SliderSection title="Возможно вы ищите" slides={findSelectionsSlides} /> : null}
            {allSelectionsSlides.length > 0 ? <SliderSection title="Подборки с мебелью" slides={allSelectionsSlides} /> : null}
            <FaqSection items={faq} />
            {seo ? <SeoSection {...seo} /> : null}
        </Layout>
    );
};

export default CardPage;
