import type { AppProps } from "next/app";

import Layout from "@/components/layout/Index";
import GlobalStyles from "@/styles/GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Hind:wght@400;600;700&family=Montserrat:wght@300;400;700&display=swap"
                rel="stylesheet"
            />
            <GlobalStyles />
            <Component {...pageProps} />
        </Layout>
    );
}
