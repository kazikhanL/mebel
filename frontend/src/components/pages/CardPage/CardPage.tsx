import CardPageProps from "./CardPage.props";
import Layout from "@components/Layout";
import SliderSection from "@components/sections/SliderSection";
import CardDescriptionSection from "@components/sections/CardDescriptionSection";
import FaqSection from "@components/sections/FaqSection";
import SeoSection from "@components/sections/SeoSection";

import cardsData from "@data/cards.json";

import SelectionPromoCard from "@components/cards/SelectionPromoCard";
import Card from "@components/cards/Card";
import { IPromoCard } from "@interfaces/ICard";
import { ISelection } from "@components/cards/SelectionPromoCard/SelectionPromoCard.props";

// tmp function : TODO:REMOVE
const prepearCards = (): IPromoCard[] => {
    return cardsData.map((card) => ({
        id: card.id,
        code: card.code,
        image: card.images[0],
        name: card.name,
        disposable: card.disposable,
        pricePrefix: card.pricePrefix,
        price: card.price,
        secondPrice: card.secondDayPrice,
    }));
};

const CardPage = ({
    categories,
    allSelections,
    findSelections,
    faq,
    seo,
}: CardPageProps): JSX.Element => {
    const tmpCards = prepearCards();

    const cardSlides = tmpCards.map((item: IPromoCard) => <Card key={item.id} info={item} />);
    const findSelectionsSlides = findSelections.map((item: ISelection) => <SelectionPromoCard key={item.id} info={item} />);

    return (
        <Layout categories={categories}>
            <CardDescriptionSection />
            <SliderSection title="Рекомендуемые товары" slides={cardSlides} />
            <SliderSection title="Похожие товары" slides={cardSlides} />
            <SliderSection title="Возможно вы ищите" slides={findSelectionsSlides} />
            <FaqSection items={faq} />
            {seo ? <SeoSection {...seo} /> : null}
        </Layout>
    );
};

export default CardPage;
