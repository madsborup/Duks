import styled from "styled-components/macro";
import theme from "../designSystem/theme";
import { DropdownArrow } from '../../components/designSystem/icons/DropdownArrow'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 ${theme.spacing.xsmall};
    margin: 0 ${theme.spacing.xsmall};
    border-radius: ${theme.BORDER_RADIUS};
    cursor: pointer;

    &:hover {
      ${DropdownArrow} path {
        stroke: ${theme.colors.text};
      }
    }
`;

export const ProfileImage = styled.img`
  height: 38px;
  width: 38px;
  border-radius: 50%;
`;

export const ProfileDetails = styled.div`
  padding: ${theme.spacing.xsmall};
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1;
`;

export const ProfileName = styled.span`
  font-weight: 600;
  font-size: ${theme.font.size.h6};
  margin-bottom: 2px;
`;

export const ProfileEmail = styled.span`
  color: ${theme.colors.textMuted};
  font-weight: 500;
  font-size: ${theme.font.size.small};
`;