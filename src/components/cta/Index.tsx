import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { CTAProps } from "@/types";
import { colors } from "@/styles/variables";
import { P_LargeStyles, P_MediumStyles } from "@/styles/type";
import { DarkButtonStyles } from "@/styles/mixins";

const CTACont = styled.section`
    background-color: ${colors.accent200};
    padding: 80px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    .cta {
        &__heading {
            color: ${colors.neutral200};
            max-width: 800px;
            text-align: center;
        }

        &__description {
            color: ${colors.neutral200};
            ${P_LargeStyles};
            max-width: 800px;
            text-align: center;
        }

        &__btn {
            ${DarkButtonStyles};
        }
    }
`;

const CTA = ({ heading, description, button }: CTAProps) => {
    return (
        <CTACont>
            <h3 className="cta__heading">{heading}</h3>
            <p className="cta__description">{description}</p>
            <Link href={button.href} className="cta__btn">
                {button.text}
            </Link>
        </CTACont>
    );
};

export default CTA;
