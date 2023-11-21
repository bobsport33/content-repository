import React, { useState, forwardRef } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import { Project } from "@/types";
import { colors, media } from "@/styles/variables";
import { P_MediumStyles, P_SmallStyles } from "@/styles/type";

const CardCont = styled.div`
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 30vw;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    position: relative;

    @media ${media.tablet} {
        width: 40vw;
        height: fit-content;
    }

    @media ${media.mobile} {
        width: 48vw;
    }

    &:hover {
        cursor: pointer;
        .card__dropdown {
            transform: translateY(0);
        }
    }

    .card {
        &__inner-container {
            position: relative;
            overflow: hidden;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;

            /* height: 300px;

            @media ${media.tablet} {
                height: fit-content;
            } */
        }

        &__image {
            height: 100%;
            width: 100%;
            max-width: 500px;
            object-fit: cover;
        }

        &__dropdown {
            z-index: 5;
            background-color: ${colors.primary500}77;
            position: absolute;
            height: fit-content;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 15px;
            width: 100%;
            height: 100%;
            bottom: 0;
            left: 0;
            transform: translateY(100%);
            transition: transform 0.5s ease-out;

            @media ${media.tablet} {
                position: static;
                transform: translateY(0);
                background-color: ${colors.accent100};
                align-items: flex-start;
                gap: 10px;
            }
        }

        &__heading {
            padding: 15px 0;
            color: ${colors.neutral900};

            @media ${media.tablet} {
                display: none;
            }
        }

        &__mobile-heading {
            display: none;

            @media ${media.tablet} {
                display: block;
                color: ${colors.neutral100};
            }
        }

        &__description {
            color: ${colors.neutral100};
            ${P_MediumStyles};
            padding: 0 25px;

            @media ${media.tablet} {
                color: ${colors.neutral100};
                padding: 0;
            }
        }

        &__content-container {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            gap: 20px;
            ${P_SmallStyles};

            @media ${media.tablet} {
                flex-direction: column;
                gap: 15px;
                align-items: flex-start;
            }
        }

        &__spacer {
            color: ${colors.neutral100};

            @media ${media.tablet} {
                color: ${colors.neutral100};
                display: none;
            }
        }

        &__content {
            width: fit-content;
            text-decoration: underline;
            color: ${colors.neutral100};
            transition: transform 0.3s;

            @media ${media.tablet} {
                color: ${colors.neutral100};
            }

            &:hover {
                transform: scale(1.05);
            }

            &::after {
                background-color: ${colors.neutral100} !important;
            }
        }
    }
`;

const Card = forwardRef<HTMLDivElement, Project>(
    (
        {
            id,
            previewImage,
            title,
            description,
            apps,
            videos,
            publications,
        }: Project,
        ref
    ) => {
        const router = useRouter();

        const cardClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
            // Check if the click originated from a Link element
            if (e.target instanceof HTMLAnchorElement) {
                return;
            }

            // Perform router push only if the click did not originate from a Link
            router.push({
                pathname: `/projects/${id}`,
            });
        };
        return (
            <CardCont ref={ref} onClick={cardClickHandler}>
                <div className="card__inner-container">
                    <img
                        className="card__image"
                        src={previewImage.imageUrl}
                        alt={previewImage.imageAlt}
                        height={500}
                        width={500}
                    />

                    <div className="card__dropdown">
                        <h6 className="card__mobile-heading">{title}</h6>
                        <p className="card__description">{description}</p>
                        <div className="card__content-container">
                            <Link
                                href={{
                                    pathname: `/projects/${id}`,
                                    query: { category: "apps" },
                                }}
                                className="card__content"
                            >
                                {apps.length} apps
                            </Link>
                            <p className="card__spacer">|</p>
                            <Link
                                href={{
                                    pathname: `/projects/${id}`,
                                    query: { category: "videos" },
                                }}
                                className="card__content"
                            >
                                {videos.length} videos
                            </Link>
                            <p className="card__spacer">|</p>
                            <Link
                                href={{
                                    pathname: `/projects/${id}`,
                                    query: { category: "publications" },
                                }}
                                className="card__content"
                            >
                                {publications.length} publications
                            </Link>
                        </div>
                    </div>
                </div>
                <h6 className="card__heading">{title}</h6>
            </CardCont>
        );
    }
);

export default Card;
