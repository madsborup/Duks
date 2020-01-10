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
    white: "#FFFFFF",
    whiteFaded: "#8B8FA2",
    bg: "#FFF",
    viewBg: "#EBEEF5",
    navbar: "#262637",
    navbarFaded: "#172643",
    sidebar: "#19203d",
    text: "#19223A",
    textFaded: `${rgba("#19223A", 0.6)}`,
    meta: "#627384",
    border: "#EEEFF2",
    darkBorder: "#242C50",
    borderFocus: "#d9d9d9",
    highlight: "#3571FB",
    highlightFaded: `${tint(0.1, "#0D64FB")};`,
    hover: `${tint(0.94, "#4960F8")};`,
    selected: "#111633",
    boxShadow: "0 4px 14px rgba(27, 23, 45, 0.20)",
    task: {
      unassigned: "#5e6b7a",
      unassignedFaded: `${rgba("#666373", 0.25)}`,
      notStarted: "#5e6b7a",
      notStartedFaded: `${rgba("#666373", 0.25)}`,
      started: "#F8AB42",
      startedFaded: `${rgba("#FFA621", 0.25)}`,
      stuck: "#FF3423",
      stuckFaded: `${rgba("#FF222F", 0.25)}`,
      review: "#1A58E6",
      reviewFaded: `${rgba("#2442F0", 0.25)}`,
      completed: "#5AC040",
      completedFaded: `${rgba("#00CC51", 0.25)}`,
    }
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
