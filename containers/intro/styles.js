import { FlexCenterStyle, WholeContainer } from "styles/common";
import styled from "styled-components";
const BUTTON_COLOR = `hsl(180, 100%, 70%)`;

export const Container = styled.div`
  ${WholeContainer}
  ${FlexCenterStyle}


height: ${({ theme }) => theme.windowHeight * 3}px;

  flex-direction: column;
  background: white;
  color: black;
  overflow-x: hidden;
  overflow-y: scroll;
  font-family: Raleway;
`;

export const TopSection = styled.div`
  font-family: Times New Roman;
  position: absolute;
  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
  top: 0;
  left: 0;
`;

export const CanvasContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
