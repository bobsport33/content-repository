import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

import { SideBySideProps } from "@/types";
import Image from "next/image";
import { Container } from "@/styles/mixins";
import { P_MediumStyles } from "@/styles/type";
import { colors } from "@/styles/variables";

interface SideBySideContainerProps {
    $imageOnRight?: boolean;
}

const SideBySideContainer = styled.section<SideBySideContainerProps>`
    ${Container};
    display: flex;
    gap: 50px;
    justify-content: space-around;
    align-items: center;

    ${({ $imageOnRight }) => {
        if (!$imageOnRight) {
            return css`
                flex-direction: row-reverse;
            `;
        }
    }}

    .content {
        &__text-container {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        &__heading {
        }
        &__description {
            ${P_MediumStyles};
        }

        &__image-container {
            position: relative;
        }

        &__image-background {
            position: absolute;
            height: 100%;
            width: 100%;
            top: -20px;
            left: -20px;
            z-index: -1;
            background-color: ${colors.accent300};
        }
    }
`;

const SideBySideContent = ({
    image,
    title,
    description,
    imageOnRight,
}: SideBySideProps) => {
    const slideIn = {
        initial: { x: `${imageOnRight ? "-100%" : "100%"}`, opacity: 0 },
        whileInView: { x: "0", opacity: 1 },
        transition: { duration: 0.8 },
        viewport: { once: true },
    };

    const slideInOpposite = {
        initial: { x: `${imageOnRight ? "100%" : "-100%"}`, opacity: 0 },
        whileInView: { x: "0", opacity: 1 },
        transition: { duration: 0.8 },
        viewport: { once: true },
    };

    return (
        <SideBySideContainer $imageOnRight={imageOnRight}>
            <motion.div className="content__text-container" {...slideIn}>
                <h1 className="content__heading">{title}</h1>
                <p className="content__description">{description}</p>
            </motion.div>
            <motion.div
                className="content__image-container"
                {...slideInOpposite}
            >
                <motion.div
                    {...slideIn}
                    className="content__image-background"
                ></motion.div>
                <Image
                    className="content__image"
                    src={image.imageUrl}
                    alt={image.imageAlt}
                    height={600}
                    width={800}
                />
            </motion.div>
        </SideBySideContainer>
    );
};

export default SideBySideContent;
