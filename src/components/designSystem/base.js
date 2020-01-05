import "../../assets/font/inter.css";

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
    bg: "#F6F7F9",
    text: "#1B172D",
    textFaded: "rgba(27, 23, 45, 0.60)",
    meta: "rgba(27,23,45,.8)",
    border: "#e8e8e8",
    highlight: "#2442F0",
    highlightFaded: "rgba(36, 66, 240, 0.25)",
    selected: "#f2f2f2",
    boxShadow: "0 4px 20px rgba(0,0,0,0.30)",
    task: {
      unassigned: "#666373",
      notStarted: "#666373",
      started: "#FFA621",
      stuck: "#FF222F",
      review: "#2442F0",
      completed: "#00CC51",
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
