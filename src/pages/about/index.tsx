import Contact from "@/components/contact/Index";
import SecondaryHero from "@/components/secondaryHero/Index";
import SideBySideContent from "@/components/sideBySideContent/Index";
import data from "@/pages/api/data.json";
import { ContactProps, SecondaryHeroProps, SideBySideProps } from "@/types";
import Head from "next/head";

interface AboutProps {
    data: {
        secondaryHero: SecondaryHeroProps;
        sideBySideContent: SideBySideProps;
        sideBySideContent2: SideBySideProps;
        contactInfo: ContactProps;
    };
}

export default function About(props: AboutProps) {
    const {
        secondaryHero,
        sideBySideContent,
        sideBySideContent2,
        contactInfo,
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
