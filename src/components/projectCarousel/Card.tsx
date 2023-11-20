import React, { useState, forwardRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { Project } from "@/types";

const CardCont = styled(Link)`
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 33vw;
    max-width: 500px;
    max-height: 340px;

    &:hover {
        .card__dropdown {
            height: fit-content;
        }
    }

    .card {
        &__image {
            width: 100%;
        }

        &__dropdown {
            height: 0;
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
        const [showDropdown, setShowDropdown] = useState(false);
        return (
            <CardCont
                ref={ref}
                href={`/projects/${id}`}
                onMouseOver={() => setShowDropdown(true)}
                onMouseOut={() => setShowDropdown(false)}
            >
                <Image
                    className="card__image"
                    src={previewImage.imageUrl}
                    alt={previewImage.imageAlt}
                    height={300}
                    width={500}
                />
                <h6 className="card__heading">{title}</h6>
                <AnimatePresence>
                    {showDropdown && (
                        <motion.div
                            initial={false}
                            animate={{
                                opacity: 1,
                                transition: { duration: 0.3 },
                            }}
                            exit={{
                                opacity: 0,
                                transition: { duration: 0.5 },
                            }}
                            className="card__dropdown"
                        >
                            <p className="card__description">{description}</p>
                            <div className="card__content-container">
                                {/* NEED TO MAKE LINKS AND ADD PATHS WITH FILTERING */}
                                <p className="card__apps">{apps.length} apps</p>
                                <p className="card__apps">
                                    {videos.length} videos
                                </p>
                                <p className="card__apps">
                                    {publications.length} publications
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </CardCont>
        );
    }
);

export default Card;
