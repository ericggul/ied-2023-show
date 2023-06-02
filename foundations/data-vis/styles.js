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

  overflow-x: scroll;

  svg {
    z-index: 0;
    cursor: pointer;
    min-width: 100%;
    height: 100%;
  }

  transition: all 0.5s;
`;

export const ListContainer = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  ${WholeContainer};
  font-size: 1rem;

  ${({ opacity }) => `opacity: ${opacity}`};
  pointer-events: none;
`;
