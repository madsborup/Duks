import "../../assets/font/inter.css";
import { rgba, tint } from 'polished'

const BASELINE = 20;
const BORDER_RADIUS = 4;

const SCALES = {
  XXSMALL: 0.25,
  XSMALL: 0.5,
  SMALL: 0.75,
  MEDIUM: 1,
  LARGE: 1.5,
  XLARGE: 2,
  XXLARGE: 2.5
};

export default {
  colors: {
    //Backgrounds and interactions
    white: "#FFFFFF",
    background: "#FFF",
    viewBackground: "#F3F3F5",
    navbar: "#201C3A",
    sidebar: "#FFF",
    heading: "#F3F3F5",
    subHeading: "#FAFAFB",
    border: "#E1E1E5",
    hover: "#FAFAFB",
    selected: `${tint(0.85, "#5FAAFC")}`,
    //Typography and icons
    text: "#4C4760",
    textMuted: "#A9A6B6",
    iconDark: "#7B7788",
    iconLight: "#FAFAFB",
    //Palette
    primary: "#5A51FB",
    primaryMuted: `${tint(0.1, "#5A51FB")};`,
    secondary: "#5FAAFC",
    disabled: "#E1E1E5",
    danger: "#5FAAFC",
    //Misc.
    boxShadow: "0 4px 14px rgba(27, 23, 45, 0.20)",
  },
  font: {
    family: {
      display: `'Inter', sans-serif`
    },
    size: {
      small: `${SCALES.SMALL}rem`,
      regular: `${SCALES.MEDIUM}rem`,
      h1: `${SCALES.XLARGE}rem`,
      h2: `${SCALES.LARGE}rem`,
      h3: `${SCALES.MEDIUM + 0.25}rem`,
      h4: `${SCALES.MEDIUM + 0.05}rem`,
      h5: `${SCALES.SMALL + 0.2}rem`,
      h6: `${SCALES.SMALL + 0.125}rem`
    },
    letterSpacing: {
      heading: `-0.2px`
    }
  },
  spacing: {
    xxsmall: `${SCALES.XXSMALL * BASELINE}`,
    xsmall: `${SCALES.XSMALL * BASELINE}`,
    small: `${SCALES.SMALL * BASELINE}`,
    medium: `${SCALES.MEDIUM * BASELINE}`,
    large: `${SCALES.LARGE * BASELINE}`,
    xlarge: `${SCALES.XLARGE * BASELINE}`
  },
  BORDER_RADIUS
};
