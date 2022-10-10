import INews from "@interfaces/INews";

interface NewsPaginationLinkProps {
    className?: string;
    info: INews;
    direction: "left" | "right";
}

export default NewsPaginationLinkProps;
