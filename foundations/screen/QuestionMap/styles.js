import { FlexCenterStyle, WholeContainer } from "styles/common";
import styled from "styled-components";

export const Container = styled.div`
  ${WholeContainer}
  ${FlexCenterStyle}
  flex-direction: column;
  background: black;
  color: white;

  transition: all 0.5s;

  svg {
    z-index: 0;
  }
`;

export const Question = styled.div`
  position: absolute;
  padding: 1vw 0;
  bottom: 0;
  height: 3vw;
  backdrop-filter: blur(1vw) brightness(1.4);
  width: 100%;
  text-align: center;
  ${FlexCenterStyle}
  font-size: 2.6vw;
  font-family: Bebas Neue;
  ${FlexCenterStyle}
`;
