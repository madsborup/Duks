import { createGlobalStyle } from "styled-components";
import base from "./components/designSystem/base";

export const GlobalStyle = createGlobalStyle`

    * {
        text-rendering: optimizelegibility;
        margin: 0;
        padding: 0;
    }

    html {
        font-family: ${base.font.family.display};
        background-color: ${base.colors.bg};
    }

    body {
        color: ${base.colors.text};
        font-size: ${base.font.size.regular};
        line-height: 1.4;
        overscroll-behavior-y: none;
    }
`;
