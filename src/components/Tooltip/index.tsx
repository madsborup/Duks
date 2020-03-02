import React from "react";
import { Placement } from 'popper.js'
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/dist/tippy.css';
import { roundArrow } from 'tippy.js';
import { StyledTippy, StyledTooltip } from "./style";
import { TippyProps } from '@tippy.js/react'

interface Props extends TippyProps {
  dark?: boolean;
}

const Tooltip: React.FC<Props> = ({content, children, placement, dark, ...props}: Props) => {
  return (
    <StyledTippy
      content={<StyledTooltip>{content}</StyledTooltip>}
      placement={placement}
      animation="shift-away"
      interactive={false}
      delay={0}
      arrow={roundArrow}
      dark={dark}
      {...props}
    >
      {children}
    </StyledTippy>
  );
};

export default Tooltip;