export interface IGoodsItem {
    id: number;
    name: string;
    url: string;
}

interface INews {
    id: number;
    title: string;
    content: string;
    image: string;
    url: null | string;
    date: string;
    goods: IGoodsItem[];
}

export default INews;