import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import { HeroProps } from "@/types";
import { colors } from "@/styles/variables";
import { EyebrowStyles } from "@/styles/type";

const PrimaryHeroContainer = styled.section`
    position: relative;
    height: 700px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    /* align-items: center; */

    .hero {
        &__background-image {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
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
        }

        &__eyebrow {
            ${EyebrowStyles}
            text-align: center;
        }

        &__heading {
            text-align: center;
        }
    }
`;

const PrimaryHero = (props: HeroProps) => {
    const { eyebrow, heading, button } = props;
    const { scrollY } = useScroll();

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
            <motion.div
                className="hero__earth-image"
                style={{ rotate: useTransform(scrollY, [0, 5000], [0, 360]) }}
            >
                <Image
                    className="hero__earth"
                    src="/images/earth.png"
                    alt="earth"
                    height={1500}
                    width={1500}
                />
            </motion.div>
            <div className="hero__text-container">
                <p className="hero__eyebrow">{eyebrow}</p>
                <h1 className="hero__heading">{heading}</h1>
                <button className="hero__btn"></button>
            </div>
        </PrimaryHeroContainer>
    );
};

export default PrimaryHero;
