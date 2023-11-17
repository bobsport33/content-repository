import { createGlobalStyle } from "styled-components";

import { fonts, media } from "./variables";

const GlobalStyles = createGlobalStyle`
     * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    }

    html,
    body {
    max-width: 100vw;
    overflow-x: hidden;
    }

    body {

    }

    a {
    color: inherit;
    text-decoration: none;
    }

    li {
        list-style: none;
    }

    h1,
    .h1 {
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
    };

    h2,
    .h2 {
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
    };

    h3,
    .h3 {
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
    };

    h4,
    .h4 {
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
    };

    h5,
    .h5 {
        font-family: ${fonts.montserrat};
        font-weight: 400;
        font-size: 2.5rem;
        line-height: 2.84rem;

        @media ${media.tablet} {
            font-size: 1.25rem;
            line-height: 1.7rem;
        }
       
    };

    h6,
    .h6 {
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
    };

    
`;

export default GlobalStyles;
