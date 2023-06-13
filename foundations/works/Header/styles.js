import { FlexCenterStyle } from "styles/common";
import styled from "styled-components";

export const Container = styled.div`
  z-index: 100;
  width: 100%;
  height: 75px;
  position: fixed;
  top: 0;
  left: 0;
  righg: 0;
  transition: all 0.5s;

  ${FlexCenterStyle}
  flex-direction: column;
`;

export const Upper = styled.div`
  height: 35px;
  margin-top: 10px;
  ${FlexCenterStyle}
  width: 100%;
  img {
    max-height: 100%;
  }
`;

export const List = styled.div`
  ${FlexCenterStyle}
  width: 100%;
`;

export const Item = styled.div``;

export const Center = styled.div``;
