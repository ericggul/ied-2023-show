import { FlexCenterStyle, WholeContainer, Appear } from "styles/common";
import styled from "styled-components";

export const Container = styled.div`
  ${WholeContainer}
  ${FlexCenterStyle}
  flex-direction: column;
  z-index: 300;
  pointer-events: none;
`;

export const TopLeft = styled.div`
  position: absolute;
  top: 17px;
  left: 10px;
  width: 51px;

  img {
    width: 100%;
  }
`;
export const TopRight = styled.div`
  position: absolute;
  top: 17px;
  right: 10px;
  font-size: 10px;
  font-family: Barlow;
  text-align: right;
  font-weight: bold;
  color: white;
`;
export const BottomLeft = styled.div`
  position: absolute;
  bottom: 17px;
  left: 10px;

  img {
    width: 96px;
  }
`;
export const BottomRight = styled.div`
  position: absolute;
  bottom: 17px;
  right: 10px;
  font-size: 10px;
  font-family: Barlow;
  text-align: right;
  font-weight: semi-bold;
  color: white;
  opacity: 0.75;
`;
