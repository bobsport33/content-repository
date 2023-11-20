import data from "@/pages/api/data.json";
import { GetStaticPropsContext } from "next";

interface ProjectProps {
    data: string;
}

interface Paths {
    params: {
        slug: string;
    };
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
    const paths: Paths[] = [];
    const something = data.projects.map((project) => {
        const projectIds = project.projects.map((p) => {
            paths.push({ params: { slug: p.id } });
        });
    });

    return {
        paths,
        fallback: "blocking",
    };
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
    console.log(context);
    // use context to get poject id in slug, use to pull only that project data

    const projectData = data.projects;

    return {
        props: {
            data: projectData,
        },
    };
};
