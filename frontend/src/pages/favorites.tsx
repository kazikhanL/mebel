import type { NextPage } from "next";

import FavoritePage from "@components/pages/FavoritePage";
import promoCatalog from "@data/promoCatalog.json";

const Home: NextPage = () => {
    return <FavoritePage categories={promoCatalog} />;
};

export default Home;
