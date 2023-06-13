import { FlexCenterStyle, WholeContainer } from "styles/common";
import styled from "styled-components";

import { Appear } from "styles/common";

export const Container = styled.div`
  ${WholeContainer}
  ${FlexCenterStyle}
  top: 0;
  flex-direction: column;

  background: black;
  color: white;
  font-size: 48px;
  transition: all 1s;
  z-index: 20;

  svg {
    cursor: pointer;
    ${WholeContainer}
  }

  transition: all 0.5s;
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
