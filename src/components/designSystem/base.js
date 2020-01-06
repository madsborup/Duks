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
    bg: "#FFF",
    viewBg: "#F1F4F5",
    navbar: "#FFFFFF",
    text: "#1B172D",
    textFaded: `${rgba("#1B172D", 0.6)}`,
    meta: "rgba(27,23,45,.8)",
    border: "#E6EAEC",
    borderFocus: "#d9d9d9",
    highlight: "#2442F0",
    highlightFaded: `${tint(0.1, "#2442F0")};`,
    selected: "#ebeff0",
    boxShadow: "0 4px 20px rgba(0,0,0,0.30)",
    task: {
      unassigned: "#666373",
      unassignedFaded: `${rgba("#666373", 0.25)}`,
      notStarted: "#666373",
      notStartedFaded: `${rgba("#666373", 0.25)}`,
      started: "#FFA621",
      startedFaded: `${rgba("#FFA621", 0.25)}`,
      stuck: "#FF222F",
      stuckFaded: `${rgba("#FF222F", 0.25)}`,
      review: "#2442F0",
      reviewFaded: `${rgba("#2442F0", 0.25)}`,
      completed: "#00CC51",
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
