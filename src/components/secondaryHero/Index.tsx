import React from "react";
import styled from "styled-components";

import { SecondaryHeroProps } from "@/types";

const SecondaryHeroContainer = styled.section``;

const SecondaryHero = ({
    eyebrow,
    image,
    title,
    description,
}: SecondaryHeroProps) => {
    return (
        <SecondaryHeroContainer>
            <p className="hero__eyebrow">{eyebrow}</p>
            <h1 className="hero__heading">{title}</h1>
            <p className="hero__description">{description}</p>
        </SecondaryHeroContainer>
    );
};

export default SecondaryHero;
