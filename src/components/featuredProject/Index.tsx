import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { Project } from "@/types";
import { colors } from "@/styles/variables";
import { ButtonStyles } from "@/styles/mixins";

const FeaturedProjectCont = styled.div`
    position: relative;
    height: 600px;

    .featured {
        &__background-image {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
        }

        &__text-container {
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            position: relative;
            z-index: 10;
            height: 100%;
        }

        &__btn {
            ${ButtonStyles};
        }
    }
`;

const FeaturedProject = ({ id, previewImage, title, description }: Project) => {
    return (
        <FeaturedProjectCont>
            <Image
                className="featured__background-image"
                src={previewImage.imageUrl}
                alt={previewImage.imageAlt}
                height={600}
                width={1500}
            />
            <div className="featured__text-container">
                <h1 className="featured__title">{title}</h1>
                <p className="featured__description">{description}</p>
                <Link href={`/projects/${id}`} className="featured__btn">
                    Read More
                </Link>
            </div>
        </FeaturedProjectCont>
    );
};

export default FeaturedProject;
