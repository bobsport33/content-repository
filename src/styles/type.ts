import { css } from "styled-components";

import { fonts, media, colors } from "./variables";

export const H1_styles = css`
    font-family: ${fonts.montserrat};
    font-weight: 400;
    font-size: 4.25rem;
    line-height: 4.8281rem;

    @media ${media.tablet} {
        font-size: 3.625rem;
        line-height: 4.1181rem;
    }
    @media ${media.mobile} {
        font-size: 2.75rem;
        line-height: 3.1237rem;
    }
`;

export const H2_styles = css`
    font-family: ${fonts.montserrat};
    font-weight: 700;
    font-style: italic;
    font-size: 2.75rem;
    line-height: 2.9425rem;

    @media ${media.tablet} {
        font-size: 2.75rem;
        line-height: 2.9425rem;
    }
    @media ${media.mobile} {
        font-size: 2.5rem;
        line-height: 2.675rem;
    }
`;

export const H3_styles = css`
    font-family: ${fonts.montserrat};
    font-weight: 400;
    font-size: 3.5rem;
    line-height: 3.9762rem;

    @media ${media.tablet} {
        font-size: 3.375rem;
        line-height: 3.8338rem;
    }

    @media ${media.mobile} {
        font-size: 2rem;
        line-height: 2.2719rem;
    }
`;

export const H4_styles = css`
    font-family: ${fonts.montserrat};
    font-weight: 400;
    font-size: 3rem;
    line-height: 3.5156rem;

    @media ${media.tablet} {
        font-size: 3rem;
        line-height: 3.4081rem;
    }

    @media ${media.mobile} {
        font-size: 2.5rem;
        line-height: 2.84rem;
    }
`;

export const H5_styles = css`
    font-family: ${fonts.montserrat};
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 2.84rem;

    @media ${media.tablet} {
        font-size: 1.25rem;
        line-height: 1.7rem;
    }
`;

export const H6_styles = css`
    font-family: ${fonts.montserrat};
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.1362rem;

    @media ${media.tablet} {
        // Styles don't change on tablet
    }

    @media ${media.mobile} {
        font-size: 1.75rem;
        line-height: 1.8687rem;
    }
`;

export const P_LargeStyles = css`
    font-family: ${fonts.hind};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2rem;
`;

export const P_MediumStyles = css`
    font-family: ${fonts.hind};
    font-size: 1.2rem;
    font-weight: 400;
    line-height: normal;
`;

export const P_SmallStyles = css`
    font-family: ${fonts.hind};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.125rem;
`;

export const LinkStyles = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    color: ${colors.neutral1000};
    position: relative;

    &::after {
        content: "";
        height: 2px;
        width: 0%;
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: ${colors.neutral1000};
        transition: width 0.3s;
    }

    &:hover {
        &::after {
            width: 100%;
        }
    }
`;
