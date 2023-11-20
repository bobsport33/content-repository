import FeaturedProject from "@/components/featuredProject/Index";
import ProjectCarousel from "@/components/projectCarousel/Index";
import data from "@/pages/api/data.json";

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
    const feautredProject = data.projects.featuredProject;

    return {
        props: {
            data: projectData,
            feautredProject: feautredProject,
        },
    };
};
