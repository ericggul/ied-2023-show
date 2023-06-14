import { FlexCenterStyle, WholeContainer, Appear } from "styles/common";
import styled from "styled-components";

export const Container = styled.div`
  ${WholeContainer}
  ${FlexCenterStyle}
  flex-direction: column;
  z-index: 300;

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
  ${FlexCenterStyle}

  position: relative;

  width: ${({ theme }) => Math.min(theme.windowWidth, 500)}px;
  height: ${({ theme }) => Math.max(theme.windowHeight * 0.6, 480)}px;
  background: transparent;

  box-shadow: 0 0 1rem rgba(255, 255, 255, 0.2);
  background: rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  z-index: 500;

  ${({ showModal }) => (showModal ? `opacity: 1;` : `opacity: 0;`)}
  ${({ showModal }) => showModal && "backdrop-filter: blur(1.3vw) brightness(0.7);"}

  transition: all 0.2s ease-in-out;
`;

export const Image = styled.div`
  width: ${({ theme }) => Math.min(Math.min(theme.windowWidth, 500) * 0.9, Math.max(theme.windowHeight * 0.6, 480))}px;
  height: ${({ theme }) => (Math.min(Math.min(theme.windowWidth, 500) * 0.9, Math.max(theme.windowHeight * 0.6, 480)) * 2) / 3}px;
  overflow: hidden;
  margin-bottom: 1.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Lower = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  ${FlexCenterStyle}
`;

export const Text = styled.div`
  width: 90%;

  h1 {
    font-size: 1.3rem;
    font-weight: normal;
  }

  h2 {
    font-size: 1.1rem;
    font-family: Times New Roman;
    font-style: italic;
    font-weight: normal;
  }
`;

export const Bottom = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Description = styled.div`
  font-size: 0.9rem;
  margin-top: 1rem;
`;

export const Tag = styled.div`
  margin-right: 0.5rem;
`;

export const Link = styled.div`
  text-align: right;
  margin-top: 1rem;
  cursor: pointer;
  font-family: Times New Roman;
  font-style: italic;
  border-bottom: 1px solid white;

  img {
    width: 1rem;
    margin-left: 0.5rem;
  }
`;
