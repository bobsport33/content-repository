import React from "react";
import styled from "styled-components";

import { SideBySideProps } from "@/types";

const SideBySideContainer = styled.section``;

const SideBySideContent = ({
    image,
    title,
    description,
    imageOnRight,
}: SideBySideProps) => {
    console.log(title, description);
    return <SideBySideContainer></SideBySideContainer>;
};

export default SideBySideContent;
