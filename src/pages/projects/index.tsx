import ProjectCarousel from "@/components/projectCarousel/Index";
import data from "@/pages/api/data.json";

import { ProjectCollection } from "@/types";
interface Props {
    data: ProjectCollection[];
}

export default function Projects(props: Props) {
    const projects = props.data;
    return (
        <>
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
    const projectData = data.projects;

    return {
        props: {
            data: projectData,
        },
    };
};
