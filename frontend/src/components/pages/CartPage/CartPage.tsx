import CartPageProps from "./CartPage.props";
import Layout from "@components/Layout";
import CartSection from "@components/sections/CartSection";

const CartPage = ({ categories }: CartPageProps): JSX.Element => {
    return (
        <Layout categories={categories}>
            <CartSection />
        </Layout>
    );
};

export default CartPage;
