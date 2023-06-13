import { FlexCenterStyle, WholeContainer } from "styles/common";
import styled, { css } from "styled-components";

export const Container = styled.div`
  font-family: Din;
  width: ${({ theme }) => theme.windowWidth}px;
  ${FlexCenterStyle}
  min-height: 300vh;

  display: flex;
  flex-direction: column;
  background: black;
  color: white;

  z-index: 1;
  h1 {
    font-size: 5rem;
  }
`;
