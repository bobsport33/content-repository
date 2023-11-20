import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

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

const CarouselCont = styled.div``;

const Carousel = ({ content }: CarouselProps) => {
    const [featuredContent, setFeaturedContent] = useState(content[0]);

    const updateCarouselHandler = () => {};
    return (
        <CarouselCont>
            <h6 className="carousel__title">{featuredContent.title}</h6>
            <Image
                className="carousel__image"
                src={featuredContent.image.imageUrl}
                alt={featuredContent.image.imageAlt}
                height={500}
                width={700}
            />
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
