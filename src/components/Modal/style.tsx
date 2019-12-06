import styled, { createGlobalStyle} from 'styled-components'

export const ModalPortal = createGlobalStyle`
    z-index: 9999;
    position: fixed;
`;

export const ModalOverlay = styled.div`
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: initial;
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
`;

export const ModalContainer = styled.div`
    position: absolute;
    background: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    right: auto;
    bottom: auto;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 32px;
    width: 400px;
    border-radius: 4px;
`;

export const ModalActions = styled.div`
    display: flex;
    justify-content: flex-end;
`;