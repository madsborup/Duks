import styled from "styled-components";
import base from "../designSystem/base";
import Tippy, { TippyProps } from "@tippy.js/react";
import "tippy.js/dist/svg-arrow.css";

interface Props extends TippyProps {
  dark?: boolean;
}

interface OptionProps {
  danger?: boolean;
}

export const StyledTippy = styled(Tippy)<Props>`
  box-shadow: 0 1px 6px RGBA(0, 0, 0, 0.1);

  &.tippy-tooltip {
    background: ${({ dark }) => (dark ? base.colors.text : base.colors.white)};

    .tippy-content {
      padding: 0;
    }
  }
`;

export const StyledPopoverMenu = styled.div<OptionProps>`
  display: flex;
  flex-direction: column;
  padding: ${base.spacing.xxsmall}px 0;
  border-radius: ${base.BORDER_RADIUS}px;
  border: 1px solid ${base.colors.border};
`;

export const Option = styled.div<OptionProps>`
  padding: ${base.spacing.xxsmall}px ${base.spacing.small}px;
  color: ${({ danger }) => (danger ? base.colors.danger : base.colors.text)};
  font-size: ${base.font.size.h6};
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: ${base.colors.hover};
  }
`;

export const Divider = styled.span`
  width: 100%;
  border-top: 1px solid ${base.colors.border};
  margin-top: ${base.spacing.xxsmall}px;
  padding-bottom: ${base.spacing.xxsmall}px;
`;
