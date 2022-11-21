/* eslint-disable @typescript-eslint/no-explicit-any */
import parseImage from "./parseImage";
import parseCategories, { CategoryDataType } from "./parseCategories";

export type HomePageDataType = {
    home: {
        meta: {
            title: string | null,
            description: string | null,
            url: string | null,
        },
        promo: {
            image: string,
            mobilImage: string,
            title: string,
            subTitle: string | null,
        },
        description: {
            id: number,
            title: string,
            text: string,
        }[],
        seo: {
            image: string,
            mainTitle: string,
            content: string,
        },
    },
    news: {
        id: string,
        H1: string,
        date: string,
        image: string,
    }[],
    faq: {
        id: number,
        question: string,
        answer: string,
    }[],
    categories: CategoryDataType[],
    thematicCategories: CategoryDataType[],
}

const parseHomePage = (rawData: any): HomePageDataType => {
    return {
        home: {
            meta: {
                title: rawData.data.home.data.attributes.meta.title ? rawData.data.home.data.attributes.meta.title as string : null,
                description: rawData.data.home.data.attributes.meta.description ? rawData.data.home.data.attributes.meta.description as string : null,
                url: rawData.data.home.data.attributes.meta.url ? rawData.data.home.data.attributes.meta.url as string : null,
            },
            promo: {
                image: parseImage(rawData.data.home.data.attributes.promo.image),
                mobilImage: parseImage(rawData.data.home.data.attributes.promo.mobilImage),
                title: rawData.data.home.data.attributes.promo.H1 as string,
                subTitle: rawData.data.home.data.attributes.promo.subTitle ? rawData.data.home.data.attributes.promo.subTitle as string : null,
            },
            description: rawData.data.home.data.attributes.description.map((item: any) => ({
                id: Number(item.id),
                title: item.title,
                text: item.text,
            })),
            seo: {
                image: parseImage(rawData.data.home.data.attributes.seo.image),
                mainTitle: rawData.data.home.data.attributes.seo.title,
                content: rawData.data.home.data.attributes.seo.content,
            },
        },
        news: rawData.data.articles.data.map((rawArticle: any) => ({
            id: rawArticle.id as string,
            H1: rawArticle.attributes.H1 as string,
            date: rawArticle.attributes.date as string,
            image: parseImage(rawArticle.attributes.image),
        })),
        faq: rawData.data.faq.data.attributes.faqItems.map((rawFaqItem: any) => ({
            id: Number(rawFaqItem.id),
            question: rawFaqItem.question as string,
            answer: rawFaqItem.answer as string,
        })),
        categories: parseCategories(rawData.data.categories.data),
        thematicCategories: parseCategories(rawData.data.thematicCategories.data),
    };
};

export default parseHomePage;
