import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { CardProps } from "@/types";
import { colors } from "@/styles/variables";
import { P_MediumStyles } from "@/styles/type";

const CardCont = styled.div`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: ${colors.neutral200};
    padding: 15px;

    .card {
        &__image {
            width: 100%;
        }

        &__heading {
            text-align: center;
        }

        &__description {
            ${P_MediumStyles}
        }
    }
`;

const Card = ({ image, title, description }: CardProps) => {
    return (
        <CardCont>
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
