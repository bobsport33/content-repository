import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { colors } from "@/styles/variables";

interface CarouselProps {
    content: CarouselItem[];
}

interface CarouselItem {
    title: string;
    image: {
        imageUrl: string;
        imageAlt: string;
    };
}

const CarouselCont = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    .carousel {
        &__title {
        }

        &__image-wrap {
            position: relative;
            height: 500px;
            max-width: 700px;
        }

        &__image-container {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
        }

        &__image {
            width: 100%;
            height: auto;
            object-fit: cover;
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
            <div className="carousel__image-wrap">
                <AnimatePresence>
                    <motion.div
                        className="carousel__image-container"
                        key={featuredContent.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Image
                            className="carousel__image"
                            src={featuredContent.image.imageUrl}
                            alt={featuredContent.image.imageAlt}
                            height={500}
                            width={700}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="carousel__btn-container">
                {content &&
                    content.map((c, i) => {
                        return (
                            <button
                                key={i}
                                onClick={updateCarouselHandler}
                                className={
                                    featuredContent.title === c.title
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
