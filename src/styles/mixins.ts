import { css } from "styled-components";
import { media } from "./variables";

export const Container = css`
    max-width: 1700px;
    margin: 0 auto;
    padding: 80px 32px;

    @media ${media.tablet} {
        padding: 0 24px;
    }

    @media ${media.mobile} {
        padding: 0 16px;
    }
`;
