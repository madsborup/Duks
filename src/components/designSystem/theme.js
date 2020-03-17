import "../../assets/fonts/Inter/inter.css";
import '../../assets/fonts/Roboto/roboto.css'
import { rgba, tint } from 'polished'

const BASELINE = 20;
const BORDER_RADIUS = "4px";

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
    sidebar: "#FAFAFB",
    header: "#FAFAFB",
    shadow: "#FAFAFB",
    subHeading: "#FAFAFB",
    border: "#e6e6eb",
    hover: "#F8F9F9",
    hoverDark: "#635E74",
    selected: `${tint(0.85, "#5FAAFC")}`,
    //Typography and icons
    heading: "#050037",
    text: "#4C4760",
    textMuted: "#888794",
    iconDark: "#7B7788",
    iconLight: "#FAFAFB",
    //Palette
    primary: "#5A51FB",
    primaryMuted: `${tint(0.1, "#5A51FB")};`,
    primarySelected: `${tint(0.85, "#5A51FB")};`,
    secondary: "#5FAAFC",
    disabled: "#E1E1E5",
    danger: "#EA3D4C",
    warning: "#F7D161",
    //Misc.
    boxShadow: "0 4px 14px rgba(27, 23, 45, 0.20)",
  },
  font: {
    family: {
      display: `'Inter', sans-serif`,
      google: `'Roboto', sans-serif`
    },
    size: {
      xsmall: `${SCALES.XSMALL + 0.2}rem`,
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
    xxsmall: `${SCALES.XXSMALL * BASELINE}px`,
    xsmall: `${SCALES.XSMALL * BASELINE}px`,
    small: `${SCALES.SMALL * BASELINE}px`,
    medium: `${SCALES.MEDIUM * BASELINE}px`,
    large: `${SCALES.LARGE * BASELINE}px`,
    xlarge: `${SCALES.XLARGE * BASELINE}px`
  },
  BORDER_RADIUS
};
