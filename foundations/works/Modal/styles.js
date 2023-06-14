import { FlexCenterStyle, WholeContainer, Appear } from "styles/common";
import styled from "styled-components";

export const Container = styled.div`
  ${WholeContainer}
  ${FlexCenterStyle}
  flex-direction: column;
  z-index: 300;

  font-family: Raleway, sans-serif;

  ${({ showModal }) =>
    showModal
      ? `
      pointer-events: auto;
    opacity: 1;
  `
      : `
      pointer-events: none;
    opacity: 0;
  `}
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  width: 100%;
  height: ${({ theme }) => Math.max(theme.windowHeight * 0.7, 500)}px;
  background: transparent;

  box-shadow: 0 0 1rem rgba(255, 255, 255, 0.2);
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  z-index: 500;

  ${({ showModal }) => (showModal ? `opacity: 1;` : `opacity: 0;`)}
  ${({ showModal }) => showModal && "backdrop-filter: blur(0.8vw) brightness(0.8);"}
`;
