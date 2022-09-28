export interface ISeo {
    id?: number;
    mainTitle: string;
    content: string;
    image: string;
}

interface SeoSectionProps extends ISeo {
    className?: string;
}

export default SeoSectionProps;
