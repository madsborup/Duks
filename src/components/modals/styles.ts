import styled from "styled-components/macro";
import theme from "../designSystem/theme";
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
    background: `${theme.colors.white}`,
    top: "auto",
    bottom: "auto",
    left: "auto",
    right: "auto",
    padding: `${theme.spacing.medium}`,
    borderRadius: `${theme.BORDER_RADIUS}`,
    boxShadow: `${theme.colors.boxShadow}`,
    border: `1px solid ${theme.colors.border}`
  }
};

export const CloseButton = styled(CloseIcon)`
  position: absolute;
  top: ${theme.spacing.small};
  right: ${theme.spacing.small};
  cursor: pointer;

  path {
    fill: ${theme.colors.iconDark};
  }

  &:hover {
      path {
          fill: ${theme.colors.text};
      }
  }
`;

export const ModalBody = styled.div<ModalBodyProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ big }) => big ? `${MODAL_BIG_WIDTH}px` : `${MODAL_SMALL_WIDTH}px`};
  height: 100%;
  padding: ${theme.spacing.xsmall};
`;

export const ModalTitle = styled.div`
  color: ${theme.colors.heading};
  font-size: ${theme.font.size.h2};
  font-weight: 600;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: ${theme.spacing.large};
`;