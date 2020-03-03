import styled from "styled-components/macro";
import base from "../designSystem/base";
import { rgba } from "polished";
import { ReactComponent as CloseIcon } from "../../assets/svg/close.svg";

const MODAL_BIG_WIDTH = 680;
const MODAL_SMALL_WIDTH = 460;

interface ModalBodyProps {
  big?: boolean;
}

//inline-styling for react-modal style prop
export const modalStyles = {
  overlay: {
    top: "0px",
    left: "0px",
    right: "0px",
    bottom: "0px",
    zIndex: 9999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    background: "rgba(0, 0, 0, 0.5)",
    overflowX: "hidden",
    overflowY: "visible"
  },
  content: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: `${base.colors.white}`,
    top: "auto",
    bottom: "auto",
    left: "auto",
    right: "auto",
    padding: `${base.spacing.medium}px`,
    borderRadius: `${base.BORDER_RADIUS}px`,
    boxShadow: `${base.colors.boxShadow}`,
    border: `1px solid ${base.colors.border}`
  }
};

export const CloseButton = styled(CloseIcon)`
  position: absolute;
  top: ${base.spacing.small}px;
  right: ${base.spacing.small}px;
  cursor: pointer;

  path {
    fill: ${base.colors.iconDark};
  }

  &:hover {
      path {
          fill: ${base.colors.text};
      }
  }
`;

export const ModalBody = styled.div<ModalBodyProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ big }) => big ? `${MODAL_BIG_WIDTH}px` : `${MODAL_SMALL_WIDTH}px`};
  height: 100%;
  padding: ${base.spacing.xsmall}px;
`;

export const ModalTitle = styled.div`
  color: ${base.colors.heading};
  font-size: ${base.font.size.h2};
  font-weight: 600;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: ${base.spacing.large}px;
`;