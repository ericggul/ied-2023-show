import { FlexCenterStyle, WholeContainer } from "styles/common";
import styled from "styled-components";

const BUTTON_COLOR = `hsl(180, 100%, 70%)`;

export const Container = styled.div`
  ${WholeContainer}
  ${FlexCenterStyle}
  flex-direction: column;
  background: black;
  color: white;

  font-family: Courier New;
  transition: all 0.5s;
`;
