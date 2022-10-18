import PromoSectionProps from "@components/sections/PromoSection/PromoSection.props";
import PromoCardProps from "@components/cards/PromoCard/PromoCard.props";
import INews from "@interfaces/INews";
import IFaq from "@interfaces/IFaq";
import { ISeo } from "@components/sections/SeoSection/SeoSection.props";
import { ISelection } from "@components/cards/SelectionPromoCard/SelectionPromoCard.props";

interface CategoryPageProps {
    promo: PromoSectionProps;
    categories: PromoCardProps[];
    news: INews[];
    faq: IFaq[];
    seo: ISeo;
    allSelections: ISelection[];
    findSelections: ISelection[];
}

export default CategoryPageProps;
