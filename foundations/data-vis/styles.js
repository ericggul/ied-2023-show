import { FlexCenterStyle, WholeContainer } from "styles/common";
import styled from "styled-components";

export const Container = styled.div`
  ${WholeContainer}
  ${FlexCenterStyle}
  flex-direction: column;

  font-family: Courier New;
  transition: all 0.5s;

  svg {
    z-index: 0;
    cursor: pointer;
  }

  transition: all 0.5s;
`;
