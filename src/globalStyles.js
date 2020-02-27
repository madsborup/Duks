import { createGlobalStyle } from "styled-components";
import base from "./components/designSystem/base";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        -webkit-appearance: none;
        font-family: ${base.font.family.display};
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizelegibility;
    }

    html {
        background-color: ${base.colors.bg};
    }

    body {
        color: ${base.colors.text};
        font-size: ${base.font.size.regular};
        line-height: 1.5;
        overscroll-behavior-y: none;
    }
`;
