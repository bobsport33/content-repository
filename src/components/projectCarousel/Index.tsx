import React, { useState, useRef } from "react";
import styled from "styled-components";

import { ProjectCollection } from "@/types";
import Card from "./Card";
import { Container } from "@/styles/mixins";
import Arrow from "@/styles/svg/arrow.svg";
import { colors } from "@/styles/variables";

const Carousel = styled.section`
    ${Container};
    position: relative;

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

        &__btn {
            height: 70px;
            width: 50px;
            border-radius: 10px;
            background-color: ${colors.neutral300};
            display: flex;
            justify-content: center;
            align-items: center;

            &__inner {
                height: 35px;
                width: 35px;
                pointer-events: none;
            }

            &--prev {
                z-index: 25;
                justify-self: flex-start;
                position: absolute;
                top: calc(50% - 25px);
                left: 20px;
                transition: transform 0.3s;

                svg {
                    transform: rotate(180deg);
                }

                &:hover {
                    transform: scale(1.05);
                }
            }

            &--next {
                z-index: 25;
                justify-self: flex-end;
                position: absolute;
                top: calc(50% - 25px);
                right: 25px;
            }

            svg {
                pointer-events: none;

                path {
                    fill: ${colors.primary500} !important;
                }
            }

            &:hover {
                cursor: pointer;
            }
        }
    }
`;

const ProjectCarousel = ({ projectCategory, projects }: ProjectCollection) => {
    const [cardIndex, setCardIndex] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);
    const cardElement = useRef<HTMLDivElement>(null);

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
            <h3 className="carousel__title">{projectCategory}</h3>
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

            {cardIndex != 0 && (
                <div
                    className="carousel__btn carousel__btn--prev"
                    id="prev"
                    onClick={clickHandler}
                >
                    <div className="carousel__btn__inner">
                        <Arrow />
                    </div>
                </div>
            )}
            {projects.length > 1 && cardIndex !== projects.length - 1 && (
                <div
                    className="carousel__btn carousel__btn--next"
                    id="next"
                    onClick={clickHandler}
                >
                    <div className="carousel__btn__inner">
                        <Arrow />
                    </div>
                </div>
            )}
        </Carousel>
    );
};

export default ProjectCarousel;
