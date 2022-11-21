import PromoCardProps from "@components/cards/PromoCard/PromoCard.props";

interface MenuModalProps {
    className?: string;
    categories: PromoCardProps[];
    isOpen: boolean;
    closeHandler: () => void;
}

export default MenuModalProps;
