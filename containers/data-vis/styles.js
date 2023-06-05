import { FlexCenterStyle, WholeContainer } from "styles/common";
import styled from "styled-components";
const BUTTON_COLOR = `hsl(180, 100%, 70%)`;

export const Container = styled.div`
  ${WholeContainer}
  ${FlexCenterStyle}

  flex-direction: column;
  background: white;
  color: black;
  overflow-y: scroll;
  font-family: Raleway;

  ${({ show }) => (show ? `opacity: 1; pointer-events: all;` : `opacity: 0; pointer-events: none;`)}
`;

export const ListContainer = styled.div`
  display: flex;

  flex-direction: column;
  width: 100%;
  min-height: 100%;
  z-index: 100;
  overflow-y: scroll;
  font-size: 16px;
`;

export const SingleProject = styled.div`
  display: flex;
  width: calc(100% -32px);

  h1 {
    text-align: left;
  }

  h3 {
    text-align: right;
    font-weight: 400;
  }

  ${({ isMobile }) =>
    isMobile
      ? `
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1{
    font-size: 32px;
  }
  
  `
      : `
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;`}

  padding: 8px 16px;

  font-size: 23px;

  ${({ opacity }) => `opacity: ${opacity}`};
`;
