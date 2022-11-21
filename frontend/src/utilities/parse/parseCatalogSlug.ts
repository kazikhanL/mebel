/* eslint-disable @typescript-eslint/no-explicit-any */
import translateTitle from "@utilities/translateTitle";
import parseImage from "./parseImage";

export const parseCatalogPaths = (rawData: any[]): string[] => {
    return rawData.map((rawCategory) => {
        const metaURL = rawCategory.attributes.meta.url;
        const mainTitle = rawCategory.attributes.promo.H1;

        return metaURL ? metaURL : translateTitle(mainTitle);
    });
};

export type CategoryPageType = {
    id: string;
    meta: {
        title: string | null;
        description: string | null;
        url: string | null;
    };
    promo: {
        image: string;
        mobilImage: string;
        H1: string;
        subTitle: string | null;
    };
    seo: {
        image: string;
        mainTitle: string;
        content: string;
    };
    filters: {
        id: string;
        name: string;
    }[];
    shortInfo: {
        image: string;
        name: string;
    };
    cardInfo: {
        image: string;
        title: string;
        subTitle: string;
    };
    subCategories: {
        id: string;
        meta: {
            title: string | null;
            description: string | null;
            url: string | null;
        };
        promo: {
            image: string;
            mobilImage: string;
            H1: string;
            subTitle: string | null;
        };
        seo: {
            image: string;
            mainTitle: string;
            content: string;
        } | null;
        shortInfo: {
            image: string;
            name: string;
        };
        cardInfo: {
            image: string;
            title: string;
            subTitle: string;
        };
    }[];
};

export type CatalogPageType = {
    categories: CategoryPageType[];
    thematicCategories: CategoryPageType[];
    news: {
        id: string,
        meta: {
            url: string | null,
        },
        H1: string,
        date: string,
        image: string,
    }[];
    faq: {
        id: number,
        question: string,
        answer: string,
    }[];
};

const parseFullCategories = (rawData: any[]): CategoryPageType[] => {
    return rawData.map((rawCategory: any) => ({
        id: rawCategory.id as string,
        meta: {
            title: rawCategory.attributes.meta.title ? rawCategory.attributes.meta.title as string : null,
            description: rawCategory.attributes.meta.description ? rawCategory.attributes.meta.description as string : null,
            url: rawCategory.attributes.meta.url ? rawCategory.attributes.meta.url as string : null,
        },
        promo: {
            image: parseImage(rawCategory.attributes.promo.image),
            mobilImage: parseImage(rawCategory.attributes.promo.mobilImage),
            H1: rawCategory.attributes.promo.H1 as string,
            subTitle: rawCategory.attributes.promo.subTitle ? rawCategory.attributes.promo.subTitle as string : null,
        },
        seo: {
            image: parseImage(rawCategory.attributes.seo.image),
            mainTitle: rawCategory.attributes.seo.title as string,
            content: rawCategory.attributes.seo.content as string,
        },
        filters: rawCategory.attributes.filters.data.map((rawFilter: any) => ({
            id: rawFilter.id as string,
            name: rawFilter.attributes.name as string,
        })),
        subCategories: rawCategory.attributes.sub_categories.data.map((rawSubCategory: any) => ({
            id: rawSubCategory.id as string,
            meta: {
                url: rawSubCategory.attributes.meta.url ? rawSubCategory.attributes.meta.url as string : null,
                title: rawSubCategory.attributes.meta.title ? rawSubCategory.attributes.meta.title as string : null,
                description: rawSubCategory.attributes.meta.description ? rawSubCategory.attributes.meta.description as string : null,
            },
            promo: {
                image: parseImage(rawSubCategory.attributes.promo.image),
                mobilImage: parseImage(rawSubCategory.attributes.promo.mobilImage),
                H1: rawSubCategory.attributes.promo.H1 as string,
                subTitle: rawSubCategory.attributes.promo.subTitle ? rawSubCategory.attributes.promo.subTitle as string : null,
            },
            shortInfo: {
                image: parseImage(rawSubCategory.attributes.shortInfo.image),
                name: rawSubCategory.attributes.shortInfo.name as string,
            },
            cardInfo: {
                image: parseImage(rawSubCategory.attributes.cardInfo.image),
                title: rawSubCategory.attributes.cardInfo.title as string,
                subTitle: rawSubCategory.attributes.cardInfo.subTitle as string,
            },
            seo: rawSubCategory.attributes.seo ? {
                image: parseImage(rawSubCategory.attributes.seo.image),
                mainTitle: rawSubCategory.attributes.seo.title as string,
                content: rawSubCategory.attributes.seo.content as string,
            } : null,
        })),
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

export const parseCatalogPage = (rawData: any): CatalogPageType => {
    return {
        categories: parseFullCategories(rawData.data.categories.data),
        thematicCategories: parseFullCategories(rawData.data.thematicCategories.data),
        news: rawData.data.articles.data.map((rawNewsItem: any) => ({
            id: rawNewsItem.id,
            meta: {
                url: rawNewsItem.attributes.meta.url ? rawNewsItem.attributes.meta.url as string : null,
            },
            image: parseImage(rawNewsItem.attributes.image),
            H1: rawNewsItem.attributes.H1 as string,
            date: rawNewsItem.attributes.date as string,
        })),
        faq: rawData.data.faq.data.attributes.faqItems.map((rawFaqItem: any) => ({
            id: rawFaqItem.id,
            question: rawFaqItem.question,
            answer: rawFaqItem.answer,
        })),
    };
};
