import react, { useState } from "react";
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
    const [category, setCategory] = useState(props.category);
    const project = props.data;

    console.log(project);

    return (
        <>
            <ProjectTemplate />
        </>
    );
}

// export async function getStaticPaths() {
//     const paths: Paths[] = [];
//     const dataFilter = data.projects.map((project) => {
//         const projectIds = project.projects.map((p) => {
//             paths.push({ params: { slug: p.id } });
//         });
//     });

//     return {
//         paths,
//         fallback: "blocking",
//     };
// }

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
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
