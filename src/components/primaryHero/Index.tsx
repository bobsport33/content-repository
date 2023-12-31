import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { HeroProps } from "@/types";
import { colors, media } from "@/styles/variables";
import { EyebrowStyles, P_SmallStyles } from "@/styles/type";
import { DarkButtonStyles } from "@/styles/mixins";

const rotation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const PrimaryHeroContainer = styled.section`
    position: relative;
    height: 700px;
    overflow: hidden;
    display: flex;
    justify-content: center;

    @media ${media.tablet} {
        height: 500px;
    }

    .hero {
        &__background-image {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            object-fit: cover;
        }

        &__image {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }

        &__earth-image {
            position: absolute;
            top: 100px;
            left: -25%;
            width: 150%;
            height: auto;
            animation: ${rotation} linear infinite 60s;

            @media ${media.mobile} {
                top: 200px;
            }
        }

        &__earth {
            height: 100%;
            width: 100%;
        }

        &__text-container {
            background-color: ${colors.neutral300}88;
            max-width: 600px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            padding: 20px;
            z-index: 10;
            height: fit-content;
            margin-top: 75px;

            @media ${media.tablet} {
                max-width: 90%;
            }
        }

        &__eyebrow {
            ${EyebrowStyles}
            text-align: center;
        }

        &__heading {
            text-align: center;
        }

        &__btn {
            ${DarkButtonStyles};
        }
    }
`;

const PrimaryHero = ({ eyebrow, heading, button }: HeroProps) => {
    return (
        <PrimaryHeroContainer>
            <div className="hero__background-image">
                <Image
                    className="hero__image"
                    src="/images/space.jpg"
                    alt="space"
                    height={700}
                    width={1500}
                />
            </div>
            <div className="hero__earth-image">
                <img
                    className="hero__earth"
                    src="/images/earth.png"
                    alt="earth"
                    height={1500}
                    width={1500}
                />
            </div>
            <div className="hero__text-container">
                <p className="hero__eyebrow">{eyebrow}</p>
                <h1 className="hero__heading">{heading}</h1>
                <Link href={button.href} className="hero__btn">
                    {button.text}
                </Link>
            </div>
        </PrimaryHeroContainer>
    );
};

export default PrimaryHero;
