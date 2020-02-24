import React from "react";
import { Placement } from 'popper.js'
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/dist/tippy.css';
import { roundArrow } from 'tippy.js';
import { StyledTippy, StyledTooltip } from "./style";

interface Props {
  content: React.ReactChild | React.ReactChild[];
  children: React.ReactElement<any>;
  placement: Placement;
  dark?: boolean;
}

const Tooltip: React.FC<Props> = (props: Props) => {

  return (
    <StyledTippy
      content={<StyledTooltip>{props.content}</StyledTooltip>}
      placement={props.placement}
      animation="shift-away"
      interactive={false}
      delay={0}
      arrow={roundArrow}
      dark={props.dark}
    >
      {props.children}
    </StyledTippy>
  );
};

export default Tooltip;