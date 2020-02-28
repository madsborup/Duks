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

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content 100px 130px;
  align-items: center;
  width: 100%;
  font-size: ${base.font.size.h6};
  color: ${base.colors.textMuted};
  font-weight: 600;
`;

export const TableColumnHeader = styled.div`
  display: flex;
  justify-content: center;
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