/* eslint-disable @typescript-eslint/no-explicit-any */
import parseImage from "./parseImage";
import { InewsPage } from "@interfaces/INews";
import translateTitle from "@utilities/translateTitle";

export const getNewsPaths = (rawData: any[]): string[] => {
    return rawData.map((rawItem: any) => {
        return rawItem.attributes.meta.url ? rawItem.attributes.meta.url as string : translateTitle(rawItem.attributes.H1 as string);
    });
};

const parseNews = (rawData: any[]): InewsPage[] => {
    return rawData.map((rawItem: any) => ({
        id: Number(rawItem.id),
        meta: {
            title: rawItem.attributes.meta.title ? rawItem.attributes.meta.title as string : null,
            description: rawItem.attributes.meta.description ? rawItem.attributes.meta.description as string : null,
            url: rawItem.attributes.meta.url ? rawItem.attributes.meta.url as string : null,
        },
        url: rawItem.attributes.meta.url ? rawItem.attributes.meta.url as string : translateTitle(rawItem.attributes.H1) as string,
        image: parseImage(rawItem.attributes.image),
        title: rawItem.attributes.H1 as string,
        content: rawItem.attributes.content as string,
        date: rawItem.attributes.date as string,
        goods: rawItem.attributes.goods.map((goodsItem: any) => ({
            id: Number(goodsItem.id),
            name: goodsItem.name,
            url: goodsItem.url,
        })),
    }));
};

export default parseNews;
