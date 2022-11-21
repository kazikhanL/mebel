/* eslint-disable @typescript-eslint/no-explicit-any */
import translateTitle from "@utilities/translateTitle";
import parseImage from "@utilities/parse/parseImage";

import { IPromoCard, ISimilarTag } from "@interfaces/ICard";

export type CardConfigurationType = {
    id: string;
    meta: {
        url: string | null;
    };
    name: string;
    code: string;
    image: string;
};

export type FullCardType = {
    id: string;
    code: string;
    meta: {
        title: string | null;
        description: string | null;
        url: string | null;
    };
    gallery: string[];
    name: string;
    subTitle: string;
    description: string | null;
    size: string | null;
    color: string | null;
    material: string | null;
    disposable: boolean;
    price: {
        pricePrefix: string | null;
        price: number;
        secondPrice: number | null;
    }
    configurations: CardConfigurationType[];
    recommended: IPromoCard[];
    similars: IPromoCard[];
    similarTags: ISimilarTag[];
    seo: {
        image: string;
        mainTitle: string;
        content: string;
    } | null
};

export type CatalogCardsType = {
    cards: FullCardType[];
    total: number;
}

export const parsePromo = (rawCard: any): IPromoCard => {
    return {
        id: rawCard.id,
        code: rawCard.attributes.code as string,
        disposable: rawCard.attributes.disposable as boolean,
        image: rawCard.attributes.gallery.data.map((dirtyImage: any) => parseImage({ data: dirtyImage }))[0],
        name: rawCard.attributes.name as string,
        pricePrefix: rawCard.attributes.price.priceDescription ? rawCard.attributes.price.priceDescription as string : null,
        price: rawCard.attributes.price.price as number,
        secondPrice: rawCard.attributes.price.secondDayPrice ? rawCard.attributes.price.secondDayPrice as number : null,
    };
};

export const parseFullCard = (rawCard: any): FullCardType => {
    return {
        id: rawCard.id as string,
        code: rawCard.attributes.code as string,
        meta: {
            title: rawCard.attributes.meta.title ? rawCard.attributes.meta.title as string : null,
            description: rawCard.attributes.meta.description ? rawCard.attributes.meta.description as string : null,
            url: rawCard.attributes.meta.url ? rawCard.attributes.meta.url as string : null,
        },
        gallery: rawCard.attributes.gallery.data.map((dirtyImage: any) => parseImage({ data: dirtyImage })),
        name: rawCard.attributes.name as string,
        subTitle: rawCard.attributes.subTitle as string,
        description: rawCard.attributes.description ? rawCard.attributes.description as string : null,
        size: rawCard.attributes.size ? rawCard.attributes.size as string : null,
        color: rawCard.attributes.color ? rawCard.attributes.color as string : null,
        material: rawCard.attributes.material ? rawCard.attributes.material as string : null,
        disposable: rawCard.attributes.disposable as boolean,
        price: {
            pricePrefix: rawCard.attributes.price.priceDescription ? rawCard.attributes.price.priceDescription as string : null,
            price: rawCard.attributes.price.price as number,
            secondPrice: rawCard.attributes.price.secondDayPrice ? rawCard.attributes.price.secondDayPrice as number : null,
        },
        seo: rawCard.attributes.seo ? {
            image: parseImage(rawCard.attributes.seo.image),
            mainTitle: rawCard.attributes.seo.title as string,
            content: rawCard.attributes.seo.content as string,
        } : null,
        similarTags: rawCard.attributes.similarTags.map((dirtyTag: any) => ({
            id: dirtyTag.id as string,
            name: dirtyTag.name as string,
            url: dirtyTag.url as string,
        })),
        configurations: rawCard.attributes.cards.data.map(((rawConfig: any) => ({
            id: rawConfig.id,
            meta: {
                url: rawConfig.attributes.meta.url ? rawConfig.attributes.meta.url as string : null,
            },
            name: rawConfig.attributes.name as string,
            code: rawConfig.attributes.code as string,
            image: rawConfig.attributes.gallery.data.map((dirtyImage: any) => parseImage({ data: dirtyImage }))[0],
        }))),
        recommended: rawCard.attributes.recommended.data.map((dirtyCard: any) => parsePromo(dirtyCard)),
        similars: rawCard.attributes.similars.data.map((dirtyCard: any) => parsePromo(dirtyCard)),
    };
};

const parseFullCards = (rawData: any): CatalogCardsType => {
    return {
        cards: rawData.data.cards.data.map((dirtyCard: any) => parseFullCard(dirtyCard)),
        total: rawData.data.cards.meta.pagination.total,
    };
};

export default parseFullCards;
