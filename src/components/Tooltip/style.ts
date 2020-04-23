import styled from "styled-components";
import Tippy from "@tippy.js/react";
import theme from "../designSystem/theme";
import "tippy.js/dist/svg-arrow.css";

export const StyledTippy = styled(Tippy)`

  &.tippy-tooltip {
  background-color: ${theme.colors.text};
  color: ${theme.colors.white};

    .tippy-svg-arrow {
      fill: ${theme.colors.text};
    }

    .tippy-content {
      padding: 0;
    }
  }
`;

export const StyledTooltip = styled.div`
  padding: ${theme.spacing.xxsmall} ${theme.spacing.xsmall};
  font-size: ${theme.font.size.h6};
  font-weight: 500;
  border-radius: ${theme.BORDER_RADIUS};
`;
