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
    const dataFilter = data.projects.map((project) => {
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
    // use context to get poject id in slug, use to filter project data
    const projectId = context?.params?.slug;

    const projectData = data.projects.map((project) => {
        const filteredProject = project.projects.filter((p) => {
            return p.id === projectId;
        });

        if (filteredProject.length > 0) {
            return filteredProject;
        }
    });

    const finalProjectData = projectData.filter((data) => data !== undefined);
    // filters to see if vdieo, app or publications are selected and filter down the carousel items

    return {
        props: {
            data: finalProjectData,
        },
    };
};
