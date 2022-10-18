import PromoCardProps from "@components/cards/PromoCard/PromoCard.props";
import IFaq from "@interfaces/IFaq";
import { ISeo } from "@components/sections/SeoSection/SeoSection.props";
import { ISelection } from "@components/cards/SelectionPromoCard/SelectionPromoCard.props";

interface CardPageProps {
    categories: PromoCardProps[];
    allSelections: ISelection[];
    findSelections: ISelection[];
    faq: IFaq[];
    seo?: ISeo | null;
}

export default CardPageProps;
