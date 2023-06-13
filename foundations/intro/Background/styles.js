import { FlexCenterStyle, WholeContainer } from "styles/common";
import styled, { css } from "styled-components";

export const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  z-index; 0;
  height: 100vh;
  width: 100%;
  background: black;
`;

export const Image = styled.img`
  object-fit: cover;
  position: absolute;
  top: 0;

  width: 1345.95px;
  height: 1481.64px;
  transform: scale(${({ theme, scrollPos }) => Math.max(theme.windowWidth / 1200, 1) * (1 + scrollPos * 0.1)}) rotate(${({ scrollPos }) => scrollPos * 10}deg);
  left: ${({ theme }) => theme.windowWidth / 2 - 207 - 450}px;
`;
