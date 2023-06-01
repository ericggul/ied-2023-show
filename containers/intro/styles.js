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
  font-size: 1.2rem;

  input {
    font-size: 1.1rem;
    margin-top: 6rem;
    font-family: Times New Roman;
    width: 10rem;
  }
`;
