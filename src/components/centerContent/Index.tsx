import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { CenterContentProps } from "@/types";

const CenterContentContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

const CenterContent = ({ eyebrow, heading, image }: CenterContentProps) => {
    return (
        <CenterContentContainer>
            <p className="content__eyebrow">{eyebrow}</p>
            <h3 className="content__heading">{heading}</h3>
            <Image
                src={image.imageUrl}
                alt={image.imageAlt}
                height={400}
                width={900}
            />
        </CenterContentContainer>
    );
};

export default CenterContent;
