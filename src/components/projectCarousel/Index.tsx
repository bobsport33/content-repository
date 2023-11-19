import React from "react";
import styled from "styled-components";

import { ProjectCollection } from "@/types";
import Card from "./Card";

const Carousel = styled.section``;

const ProjectCarousel = ({ projectCategory, projects }: ProjectCollection) => {
    console.log("projects", projects);
    return (
        <Carousel>
            <h4 className="carousel__title">{projectCategory}</h4>
            {projects &&
                projects.map((project) => {
                    return <Card {...project} />;
                })}
        </Carousel>
    );
};

export default ProjectCarousel;
