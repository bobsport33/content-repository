import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { SecondaryHeroProps } from "@/types";
import { colors } from "@/styles/variables";
import { EyebrowStyles, P_LargeStyles } from "@/styles/type";

const SecondaryHeroContainer = styled.section`
    .hero {
        &__text-container {
            display: flex;
            flex-direction: column;
            gap: 15px;
            padding: 20px;
        }

        &__eyebrow {
            ${EyebrowStyles};
            color: ${colors.neutral900};
        }

        &__heading {
            color: ${colors.neutral900};
        }

        &__description {
            ${P_LargeStyles};
            color: ${colors.neutral900};
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
            <Image
                className="hero__image"
                src={image.imageUrl}
                alt={image.imageAlt}
                height={800}
                width={1440}
            />
        </SecondaryHeroContainer>
    );
};

export default SecondaryHero;
