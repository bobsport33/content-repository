import React, { useState, forwardRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { Project } from "@/types";
import { colors } from "@/styles/variables";
import { LinkStyles, P_MediumStyles, P_SmallStyles } from "@/styles/type";

const CardCont = styled(Link)`
    scroll-snap-align: start;
    width: 30vw;
    max-width: 500px;

    &:hover {
        .card__dropdown {
            transform: translateY(0);
        }
    }

    .card {
        &__inner-container {
            background-color: ${colors.neutral1000};
            position: relative;
            overflow: hidden;
        }

        &__image {
            height: 100%;
            width: 30vw;
            max-width: 500px;
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
        }

        &__heading {
            padding: 15px 0;
            color: ${colors.neutral900};
        }

        &__description {
            color: ${colors.neutral100};
            ${P_MediumStyles};
            padding: 0 25px;
        }

        &__content-container {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            gap: 20px;
            ${P_SmallStyles};
        }

        &__content {
            width: fit-content;
            ${LinkStyles};
            color: ${colors.neutral100};

            &::after {
                background-color: ${colors.neutral100} !important;
            }
        }
    }
`;

const Card = forwardRef<HTMLAnchorElement, Project>(
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
        return (
            <CardCont ref={ref} href={`/projects/${id}`}>
                <div className="card__inner-container">
                    <Image
                        className="card__image"
                        src={previewImage.imageUrl}
                        alt={previewImage.imageAlt}
                        height={500}
                        width={500}
                    />

                    <div className="card__dropdown">
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

                            <Link
                                href={{
                                    pathname: `/projects/${id}`,
                                    query: { category: "videos" },
                                }}
                                className="card__content"
                            >
                                {videos.length} videos
                            </Link>
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
