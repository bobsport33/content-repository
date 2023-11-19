import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { SecondaryHeroProps } from "@/types";
import { colors, gradients } from "@/styles/variables";
import { EyebrowStyles, P_LargeStyles } from "@/styles/type";

const SecondaryHeroContainer = styled.section`
    position: relative;
    min-height: 700px;
    /* background: ${gradients.grayGradient}; */
    padding: 150px 200px;

    .hero {
        &__text-container {
            max-width: 700px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            padding: 40px;
            background: ${colors.primary500};
            position: relative;
            z-index: 5;

            &::before {
                content: "";
                height: 100%;
                width: 100%;
                position: absolute;
                top: -20px;
                left: -20px;
                background-color: ${colors.primary300};
                z-index: -1;
            }
        }

        &__eyebrow {
            ${EyebrowStyles};
            color: ${colors.neutral300};
        }

        &__heading {
            color: ${colors.neutral300};
        }

        &__description {
            ${P_LargeStyles};
            color: ${colors.neutral300};
        }

        &__image-container {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: -10;
        }

        &__image {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }

        &__overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                96.42deg,
                rgba(232, 232, 232, 0) 0.48%,
                rgba(134, 134, 134, 1) 96.04%
            );
            z-index: 1;
        }
    }
`;

const SecondaryHero = ({
    eyebrow,
    image,
    title,
    description,
}: SecondaryHeroProps) => {
    return (
        <SecondaryHeroContainer>
            <div className="hero__text-container">
                <p className="hero__eyebrow">{eyebrow}</p>
                <h1 className="hero__heading">{title}</h1>
                <p className="hero__description">{description}</p>
            </div>
            <div className="hero__image-container">
                <Image
                    className="hero__image"
                    src={image.imageUrl}
                    alt={image.imageAlt}
                    height={800}
                    width={1440}
                />
                <div className="hero__overlay"></div>
            </div>
        </SecondaryHeroContainer>
    );
};

export default SecondaryHero;
