import { FlexCenterStyle, WholeContainer } from "styles/common";
import styled, { css } from "styled-components";

export const MainVisual = styled.div`
  ${FlexCenterStyle}
  ${WholeContainer}
  height: 100vh;
  position: fixed !important;
  flex-direction: column;
  justify-content: space-between;
  bottom: 0;
  margin: auto;
  background-size: cover;
  background-position: center;
  z-index: 3;
  font-family: Helvetica !important;
  color: #cbc6e5;

  h1,
  h2,
  h3 {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-size: 1.2rem;
  }
`;

export const Upper = styled.div`
  ${FlexCenterStyle}
  margin-top: 8vh;
  h2 {
    font-size: 1rem;
    width: ${({ theme }) => Math.min(theme.windowWidth * 0.8, 800)}px;
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  ${FlexCenterStyle}
  flex-direction: column;
  font-family: Times New Roman;
`;

export const Button = styled.div`
  position: relative;
  font-size: 3.2rem;
  height: 3.2rem;
  width: 13rem;
  margin: 3.2vh 0;
  text-align: center;
  ${FlexCenterStyle}
  cursor: pointer;
`;

export const ArrowRight = styled.img`
  position: absolute;
  left: 13.5rem;
  top: 0;
  bottom: 0;
  margin: auto;
`;

export const ArrowLeft = styled.img`
  position: absolute;
  right: 14rem;
  top: 0;
  bottom: 0;
  margin: auto;
`;

export const Lower = styled.div`
  ${FlexCenterStyle}
  flex-direction: column;
  margin-bottom: 5vh;
  opacity: 0.8;

  h1 {
    margin-bottom: 0.8rem;
    text-align: center;
    font-family: Times New Roman;
    font-style: italic;
  }

  h3 {
    font-size: 0.8rem;
    width: ${({ theme }) => Math.min(theme.windowWidth * 0.9, 900)}px;
    text-align: center;

    a {
      color: #cbc6e5;
      text-decoration: none;
      cursor: pointer;
      //no-styling
    }
  }
`;
