import CardPageProps from "./CardPage.props";
import Layout from "@components/Layout";

const CardPage = ({
    categories,
    allSelections,
    findSelections,
    faq,
    seo
}: CardPageProps): JSX.Element => {
    return (
        <Layout categories={categories}>

        </Layout>
    );
};

export default CardPage;
