import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

import { CardProps } from "@/types";
import { colors, gradients, media } from "@/styles/variables";
import { P_MediumStyles } from "@/styles/type";

const CardCont = styled(motion.div)`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    background: ${gradients.blueGradient};
    padding: 15px;

    @media ${media.tablet} {
        max-width: 700px;
    }

    .card {
        &__image {
            width: 100%;
            object-fit: cover;

            @media ${media.tablet} {
                height: 350px;
            }
        }

        &__heading {
            text-align: center;
            color: ${colors.neutral400};
        }

        &__description {
            ${P_MediumStyles};
            color: ${colors.neutral400};
        }
    }
`;

const Card = ({ image, title, description, motionProps }: CardProps) => {
    return (
        <CardCont {...motionProps}>
            <Image
                src={image.imageUrl}
                alt={image.imageAlt}
                className="card__image"
                width={370}
                height={245}
            />
            <h5 className="card__heading">{title}</h5>
            <p className="card__description">{description}</p>
        </CardCont>
    );
};

export default Card;
