import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { CenterContentProps } from "@/types";
import { Container } from "@/styles/mixins";
import { colors, media } from "@/styles/variables";
import { EyebrowStyles } from "@/styles/type";

const CenterContentContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    ${Container};
    background-color: ${colors.neutral300};

    .content {
        &__text-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            max-width: 800px;

            @media ${media.tablet} {
                max-width: 90%;
            }
        }

        &__eyebrow {
            ${EyebrowStyles};
            text-align: center;
        }

        &__heading {
            text-align: center;
        }

        &__description {
            text-align: center;
        }

        &__image {
            object-fit: cover;

            @media ${media.tablet} {
                max-width: 90%;
            }
        }
    }
`;

const CenterContent = ({
    eyebrow,
    heading,
    description,
    image,
}: CenterContentProps) => {
    return (
        <CenterContentContainer>
            <div className="content__text-container">
                <p className="content__eyebrow">{eyebrow}</p>
                <h3 className="content__heading">{heading}</h3>
                <p className="content__description">{description}</p>
            </div>
            <Image
                className="content__image"
                src={image.imageUrl}
                alt={image.imageAlt}
                height={500}
                width={900}
            />
        </CenterContentContainer>
    );
};

export default CenterContent;
