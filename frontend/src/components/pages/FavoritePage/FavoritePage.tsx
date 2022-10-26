import Layout from "@components/Layout";
import FavoritePageProps from "./FavoritePage.props";
import FavoriteSection from "@components/sections/FavoriteSection";

const FavoritePage = ({ categories }: FavoritePageProps): JSX.Element => {
    return (
        <Layout categories={categories}>
            <FavoriteSection />
        </Layout>
    );
};

export default FavoritePage;
