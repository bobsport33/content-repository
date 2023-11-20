import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

import { Project } from "@/types";
import Carousel from "./Carousel";

interface ProjectProps extends Project {
    category: string;
}

const ProjectTemplateCont = styled.section``;

const ProjectTemplate = ({
    id,
    image,
    title,
    description,
    projectOverview,
    apps,
    videos,
    publications,
    category,
}: ProjectProps) => {
    const router = useRouter();
    const [filterCategory, setFilterCategory] = useState(category);

    const [carouselContent, setCarouselContent] = useState(() => {
        switch (filterCategory) {
            case "apps":
                return [...apps];
            case "videos":
                return [...videos];
            case "publications":
                return [...publications];
            default:
                return [...apps, ...videos, ...publications];
        }
    });

    const filterHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        const filterId = (e.target as HTMLButtonElement).id;

        setFilterCategory(filterId);

        // update url query params

        router.push({
            pathname: `/projects/${id}`,
            query: { category: filterId },
        });

        // Update carouselContent based on the selected filter category
        switch (filterId) {
            case "apps":
                setCarouselContent([...apps]);
                break;
            case "videos":
                setCarouselContent([...videos]);
                break;
            case "publications":
                setCarouselContent([...publications]);
                break;
            default:
                setCarouselContent([...apps, ...videos, ...publications]);
                break;
        }
    };

    return (
        <ProjectTemplateCont>
            <div className="project__content">
                <Image
                    className="project__image"
                    src={image.imageUrl}
                    alt={image.imageAlt}
                    height={600}
                    width={900}
                />
                <h4 className="project__heading">Project Overview</h4>
                <p className="project__overview">{projectOverview}</p>
                <div className="project__filter-container">
                    <button onClick={filterHandler} id="apps">
                        {apps.length} apps
                    </button>
                    <button onClick={filterHandler} id="videos">
                        {videos.length} videos
                    </button>
                    <button onClick={filterHandler} id="publications">
                        {publications.length} publications
                    </button>
                    {/* clear filter button??? */}
                </div>
            </div>
            <Carousel content={carouselContent} />
        </ProjectTemplateCont>
    );
};

export default ProjectTemplate;
