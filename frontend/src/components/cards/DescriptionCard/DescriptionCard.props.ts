export interface IDescriptionCard {
    id: number;
    title: string;
    text: string;
}

interface DescriptionCardProps {
    className?: string;
    icon: JSX.Element;
    color: "main" | "purple" | "ligth-green";
    info: IDescriptionCard;
}

export default DescriptionCardProps;
