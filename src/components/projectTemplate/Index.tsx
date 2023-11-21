import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

import { Project } from "@/types";
import Carousel from "./Carousel";
import { Container } from "@/styles/mixins";
import { LinkStyles, P_MediumStyles } from "@/styles/type";

interface ProjectProps extends Project {
    category: string;
}

const ProjectTemplateCont = styled.section`
    display: flex;
    justify-content: center;
    gap: 80px;
    padding: 30px;

    .project {
        &__content {
            width: 40%;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        &__title {
        }

        &__image {
            max-width: 100%;
            height: auto;
            object-fit: cover;
        }

        &__heading {
        }

        &__overview {
            ${P_MediumStyles};
        }

        &__filter-container {
            display: flex;
            gap: 15px;
        }

        &__filter-btn {
            background-color: transparent;
            border: none;
            text-decoration: underline;
            transition: transform 0.3s;

            &:hover {
                cursor: pointer;
                transform: scale(1.05);
            }
        }

        &__carousel-container {
            width: 60%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }
`;

const ProjectTemplate = ({
    id,
    image,
    title,
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
                <h1 className="project__title">{title}</h1>
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
                    <button
                        className="project__filter-btn"
                        onClick={filterHandler}
                        id="apps"
                    >
                        {apps.length} apps
                    </button>
                    <p className="project__spacer">|</p>
                    <button
                        className="project__filter-btn"
                        onClick={filterHandler}
                        id="videos"
                    >
                        {videos.length} videos
                    </button>
                    <p className="project__spacer">|</p>
                    <button
                        className="project__filter-btn"
                        onClick={filterHandler}
                        id="publications"
                    >
                        {publications.length} publications
                    </button>
                    {filterCategory !== "" && (
                        <>
                            <p className="project__spacer">|</p>
                            <button
                                className="project__filter-btn"
                                onClick={filterHandler}
                                id=""
                            >
                                {publications.length} All
                            </button>
                        </>
                    )}
                </div>
            </div>
            <div className="project__carousel-container">
                <Carousel content={carouselContent} />
            </div>
        </ProjectTemplateCont>
    );
};

export default ProjectTemplate;
