import { IPromoCard } from "@interfaces/ICard";

interface CardProps {
    className?: string;
    info: IPromoCard;
    hasInCart?: boolean;
    hasInFavorite?: boolean;
}

export default CardProps;
