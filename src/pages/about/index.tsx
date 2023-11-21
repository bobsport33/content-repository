import Head from "next/head";
import Contact from "@/components/contact/Index";
import CTA from "@/components/cta/Index";
import SecondaryHero from "@/components/secondaryHero/Index";
import SideBySideContent from "@/components/sideBySideContent/Index";

import data from "@/pages/api/data.json";
import {
    CTAProps,
    ContactProps,
    SecondaryHeroProps,
    SideBySideProps,
} from "@/types";

interface AboutProps {
    data: {
        secondaryHero: SecondaryHeroProps;
        sideBySideContent: SideBySideProps;
        sideBySideContent2: SideBySideProps;
        contactInfo: ContactProps;
        cta: CTAProps;
    };
}

export default function About(props: AboutProps) {
    const {
        secondaryHero,
        sideBySideContent,
        sideBySideContent2,
        contactInfo,
        cta,
    } = props.data;

    return (
        <>
            <Head>
                <title>About Us</title>
                <meta
                    name="description"
                    content="About the Content Repository Team"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SecondaryHero {...secondaryHero} />
            <SideBySideContent {...sideBySideContent} />
            <SideBySideContent {...sideBySideContent2} />
            <Contact {...contactInfo} />
            <CTA {...cta} />
        </>
    );
}

export const getStaticProps = async () => {
    const aboutData = data.about;

    return {
        props: {
            data: aboutData,
        },
    };
};
