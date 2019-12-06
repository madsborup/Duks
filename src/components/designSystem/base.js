import '../../assets/font/inter.css'

const BASELINE = 1.5
const BORDER_RADIUS = 4;

const scales = {
    xxsmall: 0.25,
    xsmall: 0.5,
    small: 0.75,
    medium: 1,
    large: 1.5,
    xlarge: 3,
  }

export default {
    colors: {
        blackAlpha: "rgba(0, 0, 0, 0.1)",
        whiteAlpha: "rgba(255, 255, 255, 0.2)",
        white: "#FFFFFF",
        wash: "#F5F5FA",
        text: "#1B172D",
        meta: "#A4A2AB",
        highlight: "#4A8EFF",
        task: {
            focus1: "#FF5267",
            focus2: "#FFB951",
            focus3: "#00C39C"
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
            h2: `${scales.large}rem`
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