import styled from "styled-components";
import base from "../designSystem/base";
import { ReactComponent as ViewIcon } from "../../assets/svg/ColumnsIcon.svg";

export const SidebarSection = styled.div`
  border: 1px solid ${base.colors.border};
  margin-top: ${base.spacing.small}px;
  background: ${base.colors.white};
  border-radius: ${base.BORDER_RADIUS}px;
`;

export const SidebarSectionHeader = styled.span`
  font-size: ${base.font.size.regular};
  font-weight: 600;
  color: ${base.colors.meta};
  margin-bottom: ${base.spacing.small}px;
  border-bottom: 1px solid ${base.colors.textFaded};
  text-transform: uppercase;
  letter-spacing: ${base.font.letterSpacing.heading};
`;

export const ColumnsIcon = styled(ViewIcon)`
  margin-right: ${base.spacing.xsmall}px;
  height: 20px;
  width: 20px;
`;