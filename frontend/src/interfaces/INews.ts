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

export interface InewsPage extends INews {
    meta: {
        title: string | null;
        description: string | null;
        url: string | null
    };
}

export default INews;