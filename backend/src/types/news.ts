import { ClientMeta } from "./meta";

export interface NewsItem {
    id: number;
    title: string;
    content: string | null;
    image: string | null;
    date: string | null;
    metaId: number;
    goods: number;
}

export interface ClientGoodsItem {
    name: string;
    url: string;
}

export interface IGoodsItem extends ClientGoodsItem {
    id: number;
    newsId: number;
}

export interface ClientNewsItem {
    title: string;
    content: string | null;
    image: string | null;
    date: string | null;
    meta: ClientMeta;
    goods: ClientGoodsItem[];
}
