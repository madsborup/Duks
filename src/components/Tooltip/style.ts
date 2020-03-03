import styled from "styled-components";
import Tippy, { TippyProps } from "@tippy.js/react";
import base from "../designSystem/base";
import "tippy.js/dist/svg-arrow.css";

export const StyledTippy = styled(Tippy)`

  &.tippy-tooltip {
  background-color: ${base.colors.text};
  color: ${base.colors.white};

    .tippy-svg-arrow {
      fill: ${base.colors.text};
    }

    .tippy-content {
      padding: 0;
    }
  }
`;

export const StyledTooltip = styled.div`
  padding: ${base.spacing.xxsmall}px ${base.spacing.xsmall}px;
  font-size: ${base.font.size.h6};
  font-weight: 500;
  border-radius: ${base.BORDER_RADIUS}px;
`;
