import { FlexCenterStyle, WholeContainer } from "styles/common";
import styled from "styled-components";

const BUTTON_COLOR = `hsl(180, 100%, 70%)`;

export const Container = styled.div`
  ${WholeContainer}
  ${FlexCenterStyle}
  flex-direction: column;
  background: white;
  color: black;

  font-family: Times New Roman;
  transition: all 0.5s;

  input {
    font-family: Times New Roman;
  }
`;
