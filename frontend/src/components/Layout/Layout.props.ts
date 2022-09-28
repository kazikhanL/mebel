import { ReactNode } from "react";
import PromoCardProps from "@components/cards/PromoCard/PromoCard.props";

interface LayoutProps {
    categories: PromoCardProps[];
    children: ReactNode;
}

export default LayoutProps;
