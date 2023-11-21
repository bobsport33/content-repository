import { css } from "styled-components";
import { media, colors } from "./variables";
import { P_MediumStyles } from "./type";

export const Container = css`
    max-width: 1700px;
    margin: 0 auto;
    padding: 80px 32px;

    @media ${media.tablet} {
        padding: 36px 24px;
    }

    @media ${media.mobile} {
        padding: 28px 16px;
    }
`;

export const ButtonStyles = css`
    width: fit-content;
    padding: 10px;
    ${P_MediumStyles};
    border: none;
    color: ${colors.neutral1000};
    background-color: ${colors.accent400};

    &:hover {
        background-color: ${colors.accent300};
    }
`;
