import type { GetStaticProps, InferGetStaticPropsType } from "next";

import apolloClient from "@graphql/index";
import categoriesSchema from "@graphql/categoriesSchema";
import parseCategories from "@utilities/parse/parseCategories";
import translateTitle from "@utilities/translateTitle";
import PromoCardProps from "@components/cards/PromoCard/PromoCard.props";
import FavoritePage from "@components/pages/FavoritePage";

type PropsType = {
    categories: PromoCardProps[],
};

export const getStaticProps: GetStaticProps<PropsType> = async () => {
    let categories: PromoCardProps[] = [];

    try {
        const responseCategories = await apolloClient.query({ query: categoriesSchema() });
        const rawData = parseCategories(responseCategories.data.categories.data);

        categories = rawData.map((rawCategory) => ({
            id: Number(rawCategory.id),
            image: rawCategory.shortInfo.image,
            title: rawCategory.shortInfo.name,
            link: rawCategory.meta.url ? rawCategory.meta.url : translateTitle(rawCategory.promo.H1),
        }));
    } catch {
        categories = [];
    }

    return {
        props: {
            categories,
        },
    };
};


const Home = ({ categories }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
    return <FavoritePage categories={categories} />;
};

export default Home;
