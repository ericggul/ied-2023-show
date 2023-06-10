import { FlexCenterStyle, WholeContainer } from "styles/common";
import styled from "styled-components";

export const Container = styled.div`
  ${WholeContainer}
  ${FlexCenterStyle}

  flex-direction: column;
  background: black;
  color: white;
  overflow-y: scroll;
  font-family: Raleway;
`;
