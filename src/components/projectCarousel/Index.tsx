import React, { useState, useRef } from "react";
import styled from "styled-components";

import { ProjectCollection } from "@/types";
import Card from "./Card";
import { Container } from "@/styles/mixins";

const Carousel = styled.section`
    ${Container};

    .carousel {
        &__title {
            margin-bottom: 15px;
        }

        &__container {
            display: flex;
            gap: 30px;
            overflow-x: scroll;
            scroll-behavior: smooth;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;

            &::-webkit-scrollbar {
                display: none;
            }
        }
    }
`;

const ProjectCarousel = ({ projectCategory, projects }: ProjectCollection) => {
    const [cardIndex, setCardIndex] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);
    const cardElement = useRef<HTMLAnchorElement>(null);

    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const targetId = (e.target as HTMLDivElement)?.id;

        if (!cardElement.current) {
            return;
        }
        if (!carousel.current) {
            return;
        }
        const cardOffset = cardElement.current.offsetWidth;

        if (targetId === "prev") {
            carousel.current.scroll(
                carousel.current.scrollLeft - cardOffset,
                0
            );
            setCardIndex((curr) => curr - 1);
        }
        if (targetId === "next") {
            if (cardIndex !== projects.length - 1) {
                carousel.current.scroll(
                    carousel.current.scrollLeft + cardOffset,
                    0
                );
                setCardIndex((curr) => curr + 1);
            }
        }
    };
    return (
        <Carousel>
            <h4 className="carousel__title">{projectCategory}</h4>
            <div className="carousel__container" ref={carousel}>
                {projects &&
                    projects.map((project) => {
                        return (
                            <Card
                                key={project.id}
                                ref={cardElement}
                                {...project}
                            />
                        );
                    })}
            </div>
            <div className="carousel__btn-container">
                {cardIndex != 0 && (
                    <div
                        className="carousel__btn carousel__btn--prev"
                        id="prev"
                        onClick={clickHandler}
                    >
                        previous
                    </div>
                )}
                {projects.length > 1 && cardIndex !== projects.length - 1 && (
                    <div
                        className="carousel__btn"
                        id="next"
                        onClick={clickHandler}
                    >
                        next
                    </div>
                )}
            </div>
        </Carousel>
    );
};

export default ProjectCarousel;
