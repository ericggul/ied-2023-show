import { FlexCenterStyle } from "styles/common";
import styled from "styled-components";

export const Container = styled.div`
  z-index: 100;
  width: 100%;
  position: fixed;
  height: 7rem;
  padding-top: 0.5rem;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.5s;
  pointer-events: all;

  ${FlexCenterStyle}
  flex-direction: column;
  backdrop-filter: blur(1rem) brightness(2);
`;

export const Upper = styled.div`
  font-size: 0.7rem;
  font-weight: bold;
  margin-top: 0.8rem;
  ${FlexCenterStyle}
  transform: scaleY(4);
  width: 100%;
`;

export const List = styled.div`
  margin-top: 1.5rem;
  ${FlexCenterStyle}
  width: 100%;
`;

export const Item = styled.div`
  width: 8rem;
  ${FlexCenterStyle}
  text-align: center;
  font-size: 1.7rem;
  transition: all 0.3s;
  cursor: pointer;
  font-style: italic;
  font-family: Times New Roman;
`;

export const Center = styled.div`
  font-weight: bold;
  font-size: 3rem;
  ${FlexCenterStyle}
  text-align: center;
  transform: scaleX(0.7);
`;
