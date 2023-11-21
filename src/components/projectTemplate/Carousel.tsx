import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { colors } from "@/styles/variables";

interface CarouselProps {
    content: CarouselItem[];
}

interface CarouselItem {
    id: string;
    title: string;
    image?: {
        imageUrl: string;
        imageAlt: string;
    };
    video?: {
        videoUrl: string;
    };
}

const CarouselCont = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    .carousel {
        &__title {
        }

        &__image-wrap {
            position: relative;
            height: 500px;
        }

        &__image-container {
            width: 100%;
            position: relative;
            height: 500px;
            position: absolute;
            top: 0;
            left: 0;
        }

        &__image {
            width: 100%;
            height: 500px;
            object-fit: cover;
            aspect-ratio: 7 / 5;
        }

        &__video {
            width: 100%;
            height: 500px;
            aspect-ratio: 7 / 5;
        }

        &__btn-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 10px;
        }

        &__btn {
            height: 8px;
            width: 8px;
            border: none;
            border-radius: 8px;
            background-color: ${colors.primary400};

            &--active {
                background-color: ${colors.accent400};
            }
        }
    }
`;

const Carousel = ({ content }: CarouselProps) => {
    const [featuredContent, setFeaturedContent] = useState(content[0]);

    const updateCarouselHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        const id = (e.target as HTMLButtonElement).id;

        setFeaturedContent(content[+id]);
    };
    return (
        <CarouselCont>
            <h6 className="carousel__title">{featuredContent.title}</h6>
            <a className="carousel__image-wrap" href={"/"} target="_blank">
                <AnimatePresence>
                    <motion.div
                        className="carousel__image-container"
                        key={featuredContent.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {featuredContent.hasOwnProperty("image") && (
                            <Image
                                className="carousel__image"
                                src={featuredContent.image?.imageUrl}
                                alt={featuredContent.image?.imageAlt}
                                height={500}
                                width={700}
                            />
                        )}
                        {!featuredContent.hasOwnProperty("image") && (
                            <iframe
                                className="carousel__video"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/2U-UJl2h9eY?si=2ocoNDKa6vJOzi4Y"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        )}
                    </motion.div>
                </AnimatePresence>
            </a>
            <div className="carousel__btn-container">
                {content &&
                    content.map((c, i) => {
                        return (
                            <button
                                key={i}
                                onClick={updateCarouselHandler}
                                className={
                                    featuredContent.id === c.id
                                        ? "carousel__btn carousel__btn--active"
                                        : "carousel__btn"
                                }
                                id={String(i)}
                            ></button>
                        );
                    })}
            </div>
        </CarouselCont>
    );
};

export default Carousel;
