import React from "react";
import styled from "styled-components";

import Card from "./Card";
import { P_MediumStyles } from "@/styles/type";
import { InfoCardProps } from "@/types";

const InfoCardsCont = styled.section`
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    .info {
        &__text-container {
            max-width: 900px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
        }
        &__heading {
            text-align: center;
        }

        &__description {
            text-align: center;
            ${P_MediumStyles};
        }

        &__card-container {
            padding: 0 20px;
            display: flex;
            justify-content: center;
            gap: 30px;
        }
    }
`;

const InfoCards = ({ heading, description, cardInfo }: InfoCardProps) => {
    return (
        <InfoCardsCont>
            <div className="info__text-container">
                <h2 className="info__heading">{heading}</h2>
                <p className="info__description">{description}</p>
            </div>
            <div className="info__card-container">
                {cardInfo.map((info, i) => {
                    return (
                        <Card
                            key={i}
                            image={info.image}
                            title={info.title}
                            description={info.description}
                        />
                    );
                })}
            </div>
        </InfoCardsCont>
    );
};

export default InfoCards;
