export interface ISelection {
    id: number;
    image: string;
    title: string;
    subTitle: string;
    link: string;
}

interface SelectionPromoCardProps {
    className?: string;
    info: ISelection;
}

export default SelectionPromoCardProps;
