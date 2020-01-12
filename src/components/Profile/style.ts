import styled from "styled-components";
import base from "../designSystem/base";
import { ReactComponent as ArrowDown } from "../../assets/svg/ArrowDown.svg";

export const Container = styled.div`
    background: ${base.colors.white};
    padding: 0 ${base.spacing.xsmall}px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background: ${base.colors.hover};
    }
`;

export const ProfileImage = styled.img`
  border-radius: 20px;
  height: 40px;
  width: 40px;
`;

export const ProfileDetails = styled.div`
  padding: ${base.spacing.xsmall}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1;
  text-align: right;
`;

export const ProfileName = styled.span`
  font-weight: 600;
  font-size: ${base.font.size.h6};
  margin-bottom: ${base.spacing.xxsmall}px;
`;

export const ProfileEmail = styled.span`
  color: ${base.colors.meta};
  font-weight: 500;
  font-size: ${base.font.size.small};
`;

export const ArrowIcon = styled(ArrowDown)`
  margin-left: ${base.spacing.xxsmall}px;
`;