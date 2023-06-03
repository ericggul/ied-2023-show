import { FlexCenterStyle, WholeContainer } from "styles/common";
import styled from "styled-components";
const BUTTON_COLOR = `hsl(180, 100%, 70%)`;

export const Container = styled.div`
  ${WholeContainer}
  ${FlexCenterStyle}
  flex-direction: column;
  background: black;
  color: white;
  overflow-y: scroll;

  ${({ show }) => (show ? `opacity: 1; pointer-events: all;` : `opacity: 0; pointer-events: none;`)}
`;

export const ListContainer = styled.div`
  display: flex;

  flex-direction: column;
  width: 100%;
  min-height: 100%;
  z-index: 100;
  overflow-y: scroll;
  font-size: 1rem;

  ${({ opacity }) => `opacity: ${opacity}`};
`;

export const SingleProject = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;

  padding: 1rem 0;

  font-size: 1.5rem;
  text-align: center;
  border-bottom: 1px solid white;
`;
