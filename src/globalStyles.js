import { createGlobalStyle } from "styled-components";
import base from './components/designSystem/base'

export const GlobalStyle = createGlobalStyle`
    html {
        font-family: ${base.font.family.display};
        background-color: ${base.colors.bg};
    }

    body {
        margin: 0;
        color: ${base.colors.text};
        overscroll-behavior-y: none;
    }
`;