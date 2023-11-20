import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { colors } from "@/styles/variables";
import { motion, AnimatePresence } from "framer-motion";

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
    .carousel {
        &__title {
        }

        &__image {
        }

        &__btn-container {
            display: flex;
            flex-direction: row;
            gap: 10px;
        }

        &__btn {
            height: 8px;
            width: 8px;
            border: none;
            border-radius: 8px;
            background-color: ${colors.primary400};
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
            <AnimatePresence>
                <motion.div
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
            <div className="carousel__btn-container">
                {content &&
                    content.map((c, i) => {
                        return (
                            <button
                                key={i}
                                onClick={updateCarouselHandler}
                                className="carousel__btn"
                                id={String(i)}
                            ></button>
                        );
                    })}
            </div>
        </CarouselCont>
    );
};

export default Carousel;
