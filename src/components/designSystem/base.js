import '../../assets/font/inter.css'

const BASELINE = 1.5
const BORDER_RADIUS = 4;

const scales = {
    xxsmall: 0.25,
    xsmall: 0.5,
    small: 0.75,
    medium: 1,
    large: 1.5,
    xlarge: 2,
    xxlarge: 3,
  }

export default {
    colors: {
        white: "#FFFFFF",
        bg: "#F5F5FA",
        text: "#1B172D",
        textFaded: "rgba(27, 23, 45, 0.25)",
        meta: "rgba(27,23,45,.8)",
        border: "#d2d5d9",
        highlight: "#2442F0",
        highlightFaded: "rgba(36, 66, 240, 0.25)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.30)",
        task: {
            green: "#00CC51",
            orange: "#FFA621",
            red: "#FF222F"
        }
    },
    font: {
        family: {
            display: `'Inter', sans-serif`
        },
        size: {
            small: `${scales.small}rem`,
            regular: `${scales.medium}rem`,
            h1: `${scales.xlarge}rem`,
            h2: `${scales.large}rem`,
            h3: `${scales.medium + 0.25}rem`,
            h4: `${scales.medium + 0.125}rem`,
        },
        letterSpacing: {
            heading: `-0.2px`
        }
    },
    spacing: {
        xxsmall: `${scales.xxsmall * BASELINE}rem`,
        xsmall: `${scales.xsmall * BASELINE}rem`,
        small: `${scales.small * BASELINE}rem`,
        medium: `${scales.medium * BASELINE}rem`,
        large: `${scales.large * BASELINE}rem`,
        xlarge: `${scales.xlarge * BASELINE}rem`,
    },
    BORDER_RADIUS
}