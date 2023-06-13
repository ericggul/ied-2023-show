import { FlexCenterStyle, WholeUIContainer } from "styles/common";
import styled from "styled-components";
const BUTTON_COLOR = `hsl(180, 100%, 70%)`;

export const Container = styled.div`
  ${WholeUIContainer}
  ${FlexCenterStyle}

  flex-direction: column;
  background: black;
  color: white;
  overflow-y: scroll;
`;
