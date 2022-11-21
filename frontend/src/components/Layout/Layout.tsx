import LayoutProps from "./Layout.props";

import HeaderSection from "@components/sections/HeaderSection";
import FooterSection from "@components/sections/FooterSection";

const Layout = ({ categories, children }: LayoutProps): JSX.Element => {
    return (
        <>
            <HeaderSection categories={categories} />
            <main>{children}</main>
            <FooterSection categories={categories} />
        </>
    );
};

export default Layout;
