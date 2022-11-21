import { useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import Head from "next/head";

import "@styles/global.scss";
import apolloClient from "@graphql/index";
import store, { RootState } from "@store/index";
import { addCartCardsFromLocalStore } from "@store/cartSlice";
import { addFavoriteCardsFromLocalStore } from "@store/favoriteSlice";

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        const STORAGE_KEY = "store";
        const storeRawData = localStorage.getItem(STORAGE_KEY);
        const hasStorage = storeRawData !== null;

        if (hasStorage) {
            const storeData: RootState = JSON.parse(storeRawData);

            store.dispatch(addCartCardsFromLocalStore(storeData.cart.cards));
            store.dispatch(addFavoriteCardsFromLocalStore(storeData.favorites.cards));
        }
    }, []);

    return (
        <ApolloProvider client={apolloClient}>
            <Provider store={store}>
                <Component {...pageProps}>
                    <Head>
                        <meta charSet="utf-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                        <meta httpEquiv="X-UA-Compatible" content="IE-edge" />
                        <meta property="og:type" content="website" />
                        <meta property="og:locale" content="ru_RU" />
                    </Head>
                </Component>
            </Provider>
        </ApolloProvider>
    );
}

export default MyApp;
