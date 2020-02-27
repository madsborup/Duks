import styled from "styled-components";
import base from "../../components/designSystem/base";
import { ReactComponent as Options } from "../../assets/svg/OptionDots.svg";

export const View = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${base.colors.viewBackground};
  padding: ${base.spacing.small}px;
`;

export const Message = styled.h1`
  font-size: ${base.font.size.h1};
  color: ${base.colors.border};
`;

export const OptionsIcon = styled(Options)`
  height: 14px;
  padding: ${base.spacing.xxsmall}px;
  margin-left: ${base.spacing.xxsmall}px;
  cursor: pointer;
  circle {
    fill: ${base.colors.iconDark};
  }

  &:hover {
    circle {
      fill: ${base.colors.textMuted};
    }
  }
`;
