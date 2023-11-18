import Head from "next/head";
import data from "@/pages/api/data.json";

import { CenterContentProps, HeroProps, InfoCardProps } from "@/types";

interface Props {
    data: {
        primaryHero: HeroProps;
        infoCards: InfoCardProps;
        centerContent: CenterContentProps;
    };
}

import PrimaryHero from "@/components/primaryHero/Index";
import InfoCards from "@/components/infoCards/Index";
import CenterContent from "@/components/centerContent/Index";

export default function Home(props: Props) {
    const { primaryHero, infoCards, centerContent } = props.data;
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
                <PrimaryHero
                    eyebrow={primaryHero.eyebrow}
                    heading={primaryHero.heading}
                    button={primaryHero.button}
                />
                <InfoCards
                    heading={infoCards.heading}
                    description={infoCards.description}
                    cardInfo={infoCards.cardInfo}
                />
                <CenterContent
                    eyebrow={centerContent.eyebrow}
                    heading={centerContent.heading}
                    image={centerContent.image}
                />
            </main>
        </>
    );
}

export const getStaticProps = async () => {
    const homeData = data.home;

    return {
        props: {
            data: homeData,
        },
    };
};
