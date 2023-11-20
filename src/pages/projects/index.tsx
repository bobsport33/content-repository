import FeaturedProject from "@/components/featuredProject/Index";
import ProjectCarousel from "@/components/projectCarousel/Index";
import data from "@/pages/api/data.json";
import Head from "next/head";

import { Project, ProjectCollection } from "@/types";
interface Props {
    data: ProjectCollection[];
    featuredProject: Project;
}

export default function Projects(props: Props) {
    const projects = props.data;
    const { featuredProject } = props;

    return (
        <>
            <Head>
                <title>Projects</title>
                <meta
                    name="description"
                    content="A collection of all the Content Repository Projects"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <FeaturedProject {...featuredProject} />
            {projects &&
                projects.map((project, i) => {
                    return (
                        <ProjectCarousel
                            key={i}
                            projectCategory={project.projectCategory}
                            projects={project.projects}
                        />
                    );
                })}
        </>
    );
}

export const getStaticProps = async () => {
    const projectData = data.projects.projects;
    const featuredProject = data.projects.featuredProject;

    return {
        props: {
            data: projectData,
            featuredProject: featuredProject,
        },
    };
};
