import React from "react";
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/dist/tippy.css';
import { roundArrow } from 'tippy.js';
import { StyledTippy, StyledTooltip } from "./style";
import { TippyProps } from '@tippy.js/react'

const Tooltip: React.FC<TippyProps> = ({content, children, placement, ...props}) => {
  return (
    <StyledTippy
      content={<StyledTooltip>{content}</StyledTooltip>}
      placement={placement}
      animation="shift-away"
      interactive={false}
      delay={0}
      arrow={roundArrow}
      {...props}
    >
      {children}
    </StyledTippy>
  );
};

export default Tooltip;