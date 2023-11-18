import React from "react";
import styled from "styled-components";

import { HeroProps } from "@/types";

const PrimaryHeroContainer = styled.section``;

const PrimaryHero = (props: HeroProps) => {
    const { eyebrow, heading, button } = props;
    return (
        <PrimaryHeroContainer>
            <p>{eyebrow}</p>
            <h1>{heading}</h1>

            <button></button>
        </PrimaryHeroContainer>
    );
};

export default PrimaryHero;
