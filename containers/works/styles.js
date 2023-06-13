import { FlexCenterStyle, WholeContianer } from "styles/common";
import styled from "styled-components";

export const Container = styled.div`
  ${WholeContianer}
  ${FlexCenterStyle}

  flex-direction: column;
  background: black;
  color: white;
  overflow-y: scroll;
`;
