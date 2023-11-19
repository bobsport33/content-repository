import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { Project } from "@/types";

const CardCont = styled.div``;

const Card = ({
    previewImage,
    description,
    apps,
    videos,
    publications,
}: Project) => {
    return (
        <CardCont>
            <Image
                src={previewImage.imageUrl}
                alt={previewImage.imageAlt}
                height={300}
                width={500}
            />
            {/* Decide if title will appear with image */}
            <div className="card__dropdown">
                <h6 className="card__heading">{description}</h6>
                <div className="card__content-container">
                    <p className="card__apps">{apps.length} apps</p>
                    <p className="card__apps">{videos.length} videos</p>
                    <p className="card__apps">
                        {publications.length} publications
                    </p>
                </div>
            </div>
        </CardCont>
    );
};

export default Card;
