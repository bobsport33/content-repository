import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { Project } from "@/types";
import { colors, media } from "@/styles/variables";
import { ButtonStyles } from "@/styles/mixins";
import { P_MediumStyles } from "@/styles/type";

const FeaturedProjectCont = styled.div`
    position: relative;
    height: 600px;

    @media ${media.tablet} {
        display: flex;
        flex-direction: column-reverse;
        height: fit-content;
    }

    .featured {
        &__background-image {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            object-fit: cover;

            @media ${media.tablet} {
                position: static;
                max-height: 500px;
            }
        }

        &__text-wrap {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            @media ${media.tablet} {
                align-items: flex-start;
                justify-content: center;
                width: 100%;
            }
        }
        &__text-container {
            margin-right: 100px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            position: relative;
            z-index: 10;
            height: fit-content;
            width: fit-content;
            max-width: 40%;
            position: relative;
            z-index: 10;

            @media ${media.tablet} {
                width: 100%;
                max-width: unset;
                margin-right: 0;
                padding-top: 40px;
            }

            &::before {
                content: "";
                background-color: ${colors.primary300};
                height: 100%;
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
                z-index: -1;

                @media ${media.tablet} {
                    left: 0;
                    top: 20px;
                }
            }

            &::after {
                content: "";
                background-color: ${colors.primary500};
                height: 100%;
                width: 100%;
                position: absolute;
                top: -20px;
                left: -20px;
                z-index: -2;

                @media ${media.tablet} {
                    left: 0;
                    top: 0;
                }
            }
        }

        &__title,
        &__description {
            color: ${colors.neutral200};
        }

        &__description {
            ${P_MediumStyles}
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
            <div className="featured__text-wrap">
                <div className="featured__text-container">
                    <h1 className="featured__title">{title}</h1>
                    <p className="featured__description">{description}</p>
                    <Link href={`/projects/${id}`} className="featured__btn">
                        Read More
                    </Link>
                </div>
            </div>
        </FeaturedProjectCont>
    );
};

export default FeaturedProject;
