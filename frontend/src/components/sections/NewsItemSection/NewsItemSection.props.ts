import INews from "@interfaces/INews";

interface NewsItemSectionProps {
    className?: string;
    info: INews;
    nextLink: INews;
    prevLink: INews;
}

export default NewsItemSectionProps;
