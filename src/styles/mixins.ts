import { css } from "styled-components";
import { media } from "./variables";

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
