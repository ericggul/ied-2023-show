import { FlexCenterStyle, WholeContainer } from "styles/common";
import styled, { css } from "styled-components";

export const Container = styled.div`
  width: ${({ theme }) => theme.windowWidth}px;
  min-height: 300vh;

  display: flex;
  flex-direction: column;

  color: black;
  font-family: Helvetica Neue, sans-serif;

  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  -webkit-scroll-snap-type: y mandatory;
  scroll-snap-stop: always;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
`;

export const TopSection = styled.div`
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
`;

export const MidSection = styled.div`
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
`;

export const BottomSection = styled.div`
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
`;

export const CanvasContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 300vh;
  overflow: hidden;
  pointer-events: none;
`;
