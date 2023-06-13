import { FlexCenterStyle, WholeContainer } from "styles/common";
import styled, { css } from "styled-components";

export const Container = styled.div`
  ${WholeContainer}
  display: flex;
  flex-direction: column;
  height: ${({ theme }) => theme.windowHeight * 2.5}px;

  display: flex;
  flex-direction: column;
  background: black;
  color: white;
  font-family: Helvetica !important;
  overflow-y: scroll;

  z-index: 5 !important;

  h1 {
    z-index: 100;
    font-size: 5rem;
  }
`;

export const InitialText = styled.div`
  ${FlexCenterStyle}
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;

  width: ${({ theme }) => Math.min(theme.windowWidth * 0.8, 800)}px;
  height: ${({ theme }) => theme.windowHeight}px;

  opacity: 1;
  z-index: 5;
`;

export const Loading = styled.div`
  ${FlexCenterStyle}
  ${WholeContainer}
  pointer-events: none;
  z-index: 100;
  background: black;
  ${({ show }) => (show ? "opacity: 1" : "opacity: 0")};
  transition: all 0.3s;
`;
