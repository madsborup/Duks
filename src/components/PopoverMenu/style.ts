import styled from "styled-components/macro";
import theme from "../designSystem/theme";
import Tippy, { TippyProps } from "@tippy.js/react";
import "tippy.js/dist/svg-arrow.css";

interface Props extends TippyProps {
  dark?: boolean;
}

interface OptionProps {
  danger?: boolean;
  disabled?: boolean
}

export const StyledTippy = styled(Tippy)<Props>`
  box-shadow: 0 1px 6px RGBA(0, 0, 0, 0.1);

  &.tippy-tooltip {
    background: ${({ dark }) => (dark ? theme.colors.text : theme.colors.white)};

    .tippy-content {
      padding: 0;
    }
  }
`;

export const StyledPopoverMenu = styled.div<OptionProps>`
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.xxsmall} 0;
  border-radius: ${theme.BORDER_RADIUS};
  border: 1px solid ${theme.colors.border};
`;

export const Option = styled.div<OptionProps>`
  padding: ${theme.spacing.xxsmall} ${theme.spacing.small};
  color: ${({ danger, disabled }) => danger ? theme.colors.danger : disabled ? theme.colors.textMuted : theme.colors.text};
  font-size: ${theme.font.size.h6};
  font-weight: 500;
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};

  &:hover {
    background: ${({ disabled }) => disabled ? 'none' : theme.colors.hover};
  }
`;

export const Divider = styled.span`
  width: 100%;
  border-top: 1px solid ${theme.colors.border};
  margin-top: ${theme.spacing.xxsmall};
  padding-bottom: ${theme.spacing.xxsmall};
`;

export const LabelCounter = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  background: ${theme.colors.subHeading};
  color: ${theme.colors.text};
  border: 1px solid ${theme.colors.border};
  font-size: ${theme.font.size.xsmall};
  font-weight: 700;
  padding: ${theme.spacing.xxsmall};
  line-height: 0;
  margin-left: ${theme.spacing.xxsmall};
`;
