import { FlexCenterStyle, WholeContainer } from "styles/common";
import styled from "styled-components";

export const Container = styled.div`
  ${WholeContainer}
  ${FlexCenterStyle}
  flex-direction: column;

  color: white;
  font-size: 3rem;

  font-family: Courier New;
  transition: all 0.5s;
  z-index: 0 !important;

  svg {
    cursor: pointer;
    ${WholeContainer}
    z-index: 0 !important;
    pointer-events: none;
  }

  transition: all 0.5s;
`;
