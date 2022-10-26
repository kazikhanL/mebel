import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import Head from "next/head";

import "@styles/global.scss";
import store from "@store/index";

function MyApp({ Component, pageProps }: AppProps) {
    return (
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
    );
}

export default MyApp;
