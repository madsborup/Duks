import styled from "styled-components";
import Tippy, { TippyProps } from "@tippy.js/react";
import base from "../designSystem/base";
import "tippy.js/dist/svg-arrow.css";

interface Props extends TippyProps {
  dark?: boolean;
}

export const StyledTippy = styled(Tippy)<Props>`

  &.tippy-tooltip {
  background-color: ${({ dark }) => dark ? base.colors.text : base.colors.white};
  color: ${({ dark }) => dark ? base.colors.white : base.colors.text};
  border: ${({ dark }) => dark ? 'none' : `1px solid ${base.colors.border}`};

    .tippy-svg-arrow {
      fill: ${({ dark }) => dark ? base.colors.text : base.colors.white};
    }

    .tippy-content {
      padding: 0;
    }
  }
`;

export const StyledTooltip = styled.div`
  padding: ${base.spacing.xxsmall}px ${base.spacing.xsmall}px;
  font-size: ${base.font.size.h6};
  font-weight: 400;
  border-radius: ${base.BORDER_RADIUS}px;
`;
