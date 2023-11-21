import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

import { CenterContentProps } from "@/types";
import { colors, media } from "@/styles/variables";
import { EyebrowStyles, P_MediumStyles } from "@/styles/type";

const CenterContentContainer = styled(motion.section)`
    margin: 80px auto;
    padding: 40px;
    width: 70%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
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
            ${P_MediumStyles}
        }

        &__image {
            object-fit: cover;
            max-width: 800px;
            height: auto;
            aspect-ratio: 9 / 5;

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
    const FadeUpMotionProps = {
        initial: { y: 100, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true, amount: 0.6 },
        transition: { duration: 1 },
    };
    return (
        <CenterContentContainer {...FadeUpMotionProps}>
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
