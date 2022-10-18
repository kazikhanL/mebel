import { ClientMeta } from "./meta";

export interface NewsItem {
    id: number;
    title: string;
    content: string | null;
    image: string | null;
    date: string | null;
    meta_id: number;
    goods: number;
}

export interface ClientNewsItem {
    title: string;
    content: string | null;
    image: string | null;
    date: string | null;
    meta: ClientMeta;
    goods: number; // todo -> obj
}