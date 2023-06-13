import { FlexCenterStyle, WholeUIContainer } from "styles/common";
import styled from "styled-components";
const BUTTON_COLOR = `hsl(180, 100%, 70%)`;

export const Container = styled.div`
  ${WholeUIContainer}
  ${FlexCenterStyle}

  flex-direction: column;
  background: white;
  color: black;
  overflow-y: scroll;

  ${({ show }) => (show ? `opacity: 1; pointer-events: all;` : `opacity: 0; pointer-events: none;`)}
`;

export const ListContainer = styled.div`
  display: flex;

  flex-direction: column;
  width: 100%;
  min-height: 100%;
  z-index: 10;
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
    font-size: 24px;
  }
  h3{
    font-size: 16px;
  }
  
  `
      : `
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;`}

  padding: 6px 16px;

  font-size: 20px;

  ${({ opacity }) => `opacity: ${opacity}`};
`;

export const SingleCharacter = styled.span`
  ${({ changed }) =>
    changed
      ? `
    color: red;
  `
      : `
    color: black;
      `}
`;
