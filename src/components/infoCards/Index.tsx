import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Card from "./Card";
import { P_MediumStyles } from "@/styles/type";
import { InfoCardProps } from "@/types";
import { media, colors } from "@/styles/variables";
import { Container } from "@/styles/mixins";

const InfoCardsCont = styled.section`
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    ${Container};

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
            color: ${colors.neutral1000};
        }

        &__description {
            text-align: center;
            ${P_MediumStyles};
            color: ${colors.neutral900};
        }

        &__card-container {
            display: flex;
            justify-content: center;
            gap: 30px;

            @media ${media.tablet} {
                flex-direction: column;
                gap: 45px;
            }
        }
    }
`;

const InfoCards = ({ heading, description, cardInfo }: InfoCardProps) => {
    const [delayTimer, setDelayTimer] = useState(0);
    const [cardsPerRow, setCardsPerRow] = useState(3);

    useEffect(() => {
        // check window size and adjust timers for animation
        const updateLayout = () => {
            if (window.innerWidth >= 1100) {
                setDelayTimer(0.2);
                setCardsPerRow(3);
            } else if (window.innerWidth >= 500) {
                setDelayTimer(0.2);
                setCardsPerRow(2);
            } else {
                setDelayTimer(0);
                setCardsPerRow(1);
            }
        };
        updateLayout();

        // Update layout state on window resize
        window.addEventListener("resize", updateLayout);
        return () => {
            window.removeEventListener("resize", updateLayout);
        };
    }, []);

    return (
        <InfoCardsCont>
            <div className="info__text-container">
                <h2 className="info__heading">{heading}</h2>
                <p className="info__description">{description}</p>
            </div>
            <div className="info__card-container">
                {cardInfo.map((info, i) => {
                    const delay = (i % cardsPerRow) * delayTimer;

                    const FadeUpMotionProps = {
                        initial: { y: 100, opacity: 0 },
                        whileInView: { y: 0, opacity: 1 },
                        viewport: { once: true, amount: 0.6 },
                        transition: { delay: delay, duration: 1 },
                    };

                    return (
                        <Card
                            key={i}
                            image={info.image}
                            title={info.title}
                            description={info.description}
                            motionProps={FadeUpMotionProps}
                        />
                    );
                })}
            </div>
        </InfoCardsCont>
    );
};

export default InfoCards;
