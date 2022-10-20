import { ICharacteristics } from "@interfaces/ICard";

interface DescriptionFooterProps {
    className?: string;
    description: string | null;
    characteristics: ICharacteristics | null;
}

export default DescriptionFooterProps;
