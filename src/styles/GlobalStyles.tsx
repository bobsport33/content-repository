import { createGlobalStyle } from "styled-components";

import {
    H1_styles,
    H2_styles,
    H3_styles,
    H4_styles,
    H5_styles,
    H6_styles,
} from "./type";
import { colors } from "./variables";

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
      background-color: ${colors.neutral100};
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
       ${H1_styles}
    };

    h2,
    .h2 {
      ${H2_styles}
    };

    h3,
    .h3 {
      ${H3_styles}
    };

    h4,
    .h4 {
      ${H4_styles}
    };

    h5,
    .h5 {
      ${H5_styles}
       
    };

    h6,
    .h6 {
       ${H6_styles}
    };

    
`;

export default GlobalStyles;
