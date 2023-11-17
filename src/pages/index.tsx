import Head from "next/head";

import PrimaryHero from "@/components/primaryHero/Index";

export default function Home() {
    return (
        <>
            <Head>
                <title>Content Repository App</title>
                <meta
                    name="description"
                    content="Web App to display different client projects"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <PrimaryHero />
            </main>
        </>
    );
}
