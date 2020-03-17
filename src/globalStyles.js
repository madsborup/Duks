import { createGlobalStyle } from "styled-components";
import theme from "./components/designSystem/theme";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        -webkit-appearance: none;
        font-family: ${theme.font.family.display};
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizelegibility;
    }

    html {
        background-color: ${theme.colors.bg};
    }

    body {
        color: ${theme.colors.text};
        font-size: ${theme.font.size.regular};
        line-height: 1.5;
        overscroll-behavior-y: none;
    }
`;
