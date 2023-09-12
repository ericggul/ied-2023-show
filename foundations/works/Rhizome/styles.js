import { FlexCenterStyle, WholeContainer } from "styles/common";
import styled from "styled-components";

import { Appear } from "styles/common";

export const Container = styled.div`
  ${WholeContainer}
  ${FlexCenterStyle}
  top: 0;
  flex-direction: column;

  color: white;
  font-size: 48px;
  z-index: 20;

  svg {
    cursor: pointer;
    ${WholeContainer}
    background: white;
  }

  ${({ isVisible }) =>
    isVisible
      ? `
    opacity: 1;
    pointer-events: all;
    transform: translateX(0);
    transform-origin: left;
  `
      : `
    opacity: 0;
    pointer-events: none;
    transform: translateX(-10%);
    transform-origin: left;
  `}
  transition: all 1s ease-in-out;
`;
export const ColorPickers = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 2rem;
  color: white;
  ${FlexCenterStyle}
  flex-direction: column;
  align-items: flex-end;
`;

export const SVG = styled.svg`
  transition: all 0.6s ease-in-out;
`;
