import Contact from "@/components/contact/Index";
import SecondaryHero from "@/components/secondaryHero/Index";
import SideBySideContent from "@/components/sideBySideContent/Index";
import data from "@/pages/api/data.json";
import { ContactProps, SecondaryHeroProps, SideBySideProps } from "@/types";

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
