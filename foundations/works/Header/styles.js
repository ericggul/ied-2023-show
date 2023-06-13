import { FlexCenterStyle } from "styles/common";
import styled from "styled-components";

export const Container = styled.div`
  z-index: 100;
  width: 100%;
  position: fixed;
  height: 6rem;
  top: 0;
  left: 0;
  righg: 0;
  transition: all 0.5s;
  pointer-events: all;

  ${FlexCenterStyle}
  flex-direction: column;
`;

export const Upper = styled.div`
  font-size: 0.5rem;
  font-weight: bold;
  margin-top: 10px;
  ${FlexCenterStyle}
  transform: scaleY(5);
  width: 100%;
`;

export const List = styled.div`
  margin-top: 1.2rem;
  ${FlexCenterStyle}
  width: 100%;
`;

export const Item = styled.div`
  width: 8rem;
  ${FlexCenterStyle}
  text-align: center;
`;

export const Center = styled.div`
  font-weight: bold;
  font-size: 2rem;
  ${FlexCenterStyle}
  text-align: center;
`;
