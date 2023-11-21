import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { CTAProps } from "@/types";
import { colors } from "@/styles/variables";
import { P_LargeStyles, P_MediumStyles } from "@/styles/type";

const CTACont = styled.section`
    background-color: ${colors.accent300};
    padding: 80px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;

    .cta {
        &__heading {
            color: ${colors.neutral100};
            max-width: 800px;
            text-align: center;
        }

        &__description {
            color: ${colors.neutral100};
            ${P_LargeStyles};
            max-width: 800px;
            text-align: center;
        }

        &__btn {
            ${P_MediumStyles};
            background-color: ${colors.primary300};
            color: ${colors.neutral200};
            padding: 15px;
            transition: background-color 0.3s;

            &:hover {
                cursor: pointer;
                background-color: ${colors.primary400};
            }
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
