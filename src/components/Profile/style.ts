import styled from "styled-components/macro";
import base from "../designSystem/base";
import { DropdownArrow } from '../../components/designSystem/icons/DropdownArrow'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 ${base.spacing.xsmall}px;
    margin: 0 ${base.spacing.xsmall}px;
    border-radius: ${base.BORDER_RADIUS}px;
    cursor: pointer;

    &:hover {
      ${DropdownArrow} path {
        stroke: ${base.colors.text};
      }
    }
`;

export const ProfileImage = styled.img`
  height: 38px;
  width: 38px;
  border-radius: 50%;
`;

export const ProfileDetails = styled.div`
  padding: ${base.spacing.xsmall}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1;
`;

export const ProfileName = styled.span`
  font-weight: 600;
  font-size: ${base.font.size.h6};
  margin-bottom: 2px;
`;

export const ProfileEmail = styled.span`
  color: ${base.colors.textMuted};
  font-weight: 500;
  font-size: ${base.font.size.small};
`;