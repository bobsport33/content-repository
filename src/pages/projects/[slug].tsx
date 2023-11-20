import data from "@/pages/api/data.json";
import { GetStaticPropsContext } from "next";

interface ProjectProps {
    data: string;
}

export default function Projects(props: ProjectProps) {
    const projects = props.data;
    return (
        <>
            <p>stuff</p>
        </>
    );
}

export async function getStaticPaths() {
    // const res = await fetchAPI("photo-albums", {
    //     populate: "deep",
    // });

    // const paths = res.data.map((album) => ({
    //     params: { slug: album.attributes.seo.slug },
    // }));

    const paths = [];

    return {
        paths,
        fallback: "blocking",
    };
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
    console.log(context);

    const projectData = data.projects;

    return {
        props: {
            data: projectData,
        },
    };
};
