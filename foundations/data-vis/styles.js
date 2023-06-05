import { FlexCenterStyle, WholeContainer } from "styles/common";
import styled from "styled-components";

export const Container = styled.div`
  ${WholeContainer}
  ${FlexCenterStyle}
  top: 0;
  position: fixed;
  flex-direction: column;

  opacity: 0;

  color: white;
  font-size: 48px;

  font-family: Courier New;
  transition: all 1s;
  // z-index: 0 !important;
  z-index: 150;

  pointer-events: ${(props) => (props.intensity > 0.8 ? "auto" : "none")};

  background: ${(props) => (props.intensity > 0.8 ? "black" : "transparent")};

  opacity: ${(props) => props.intensity * 1.2};

  svg {
    cursor: pointer;
    ${WholeContainer}// z-index: 0 !important;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  }

  transition: all 0.5s;
`;

export const TopButton = styled.div`
  position: absolute;
  bottom: 1.6rem;
  right: 1rem;
  background: white;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  color: white;
  box-shadow: 0 0 2rem white;
  font-size: 1.4rem;
  font-weight: 700;
  ${FlexCenterStyle}
  cursor: pointer;
  transition: all 0.5s;

  img {
    width: 70%;
    height: 70%;
  }
`;
