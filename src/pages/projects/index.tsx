import data from "@/pages/api/data.json";

import SecondaryHero from "@/components/secondaryHero/Index";

export default function Projects() {
    return (
        <>
            <SecondaryHero />
        </>
    );
}

export const getStaticProps = async () => {
    const projectData = data.projects;

    return {
        props: {
            data: projectData,
        },
    };
};
