import INews from "@interfaces/INews";

interface NewsItemSectionProps {
    className?: string;
    info: INews;
    nextLink: INews | undefined;
    prevLink: INews | undefined;
}

export default NewsItemSectionProps;
