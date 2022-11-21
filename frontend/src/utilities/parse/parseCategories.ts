/* eslint-disable @typescript-eslint/no-explicit-any */
import parseImage from "./parseImage";

export type CategoryDataType = {
    id: string,
    meta: {
        url: string | null,
    },
    promo: {
        H1: string,
    },
    shortInfo: {
        image: string,
        name: string,
    },
    cardInfo: {
        image: string,
        title: string,
        subTitle: string,
    },
};

const parseCategories = (rawData: any[]): CategoryDataType[] => {
    return rawData.map((rawCategory) => ({
        id: rawCategory.id as string,
        meta: {
            url: rawCategory.attributes.meta.url ? rawCategory.attributes.meta.url : null,
        },
        promo: {
            H1: rawCategory.attributes.promo.H1,
        },
        shortInfo: {
            image: parseImage(rawCategory.attributes.shortInfo.image),
            name: rawCategory.attributes.shortInfo.name as string,
        },
        cardInfo: {
            image: parseImage(rawCategory.attributes.cardInfo.image),
            title: rawCategory.attributes.cardInfo.title as string,
            subTitle: rawCategory.attributes.cardInfo.subTitle as string,
        },
    }));
};

export default parseCategories;

