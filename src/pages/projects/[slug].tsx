import Head from "next/head";
import data from "@/pages/api/data.json";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";

import ProjectTemplate from "@/components/projectTemplate/Index";
import { Project } from "@/types";

interface ProjectProps {
    data: Project;
    category: string;
}

interface Paths {
    params: {
        slug: string;
    };
}

export default function Projects(props: ProjectProps) {
    const project = props.data;
    return (
        <>
            {" "}
            <Head>
                <title>{project.title}</title>
                <meta name="description" content={project.description} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ProjectTemplate {...project} category={props.category} />
        </>
    );
}

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    // use context to get poject id in slug, use to filter project data
    const projectId = context?.params?.slug;

    const projectData = data.projects.projects.map((project) => {
        const filteredProject = project.projects.filter((p) => {
            return p.id === projectId;
        });

        if (filteredProject.length > 0) {
            return filteredProject;
        }
    });

    const finalProjectData = projectData.filter(
        (data) => data !== undefined
    )[0]![0]!;

    // check if query params for filters
    const category = context.query.category || "";

    return {
        props: {
            data: finalProjectData,
            category: category,
        },
    };
};
