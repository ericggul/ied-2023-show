import { FlexCenterStyle, WholeContainer } from "styles/common";
import styled, { css } from "styled-components";

export const MainVisual = styled.div`
  ${FlexCenterStyle}
  ${WholeContainer}
  height: 82vh;
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

  transition: all 0.1s;
`;

export const Upper = styled.div`
  ${FlexCenterStyle}
  flex-direction: column;
  margin-top: 0vh;
  letter-spacing: 0.05rem;

  h2 {
    color: #cbc6e5;
    font-size: 1rem;
    line-height: 1.37;
    letter-spacing: 0.2rem;
    font-weight: normal;
    margin-top: 0vh;
    text-align: center;
    ${FlexCenterStyle}

    &:first-child {
      width: ${({ theme }) => Math.min(theme.windowWidth * 0.7, 700)}px;

      font-weight: bold;
      margin-left: 0.8rem;
      letter-spacing: 0.85rem;

      //last letter no spacing

      font-size: ${({ theme }) => theme.windowWidth > 768 && "2rem"};
      text-align: center;
    }

    width: ${({ theme }) => Math.min(theme.windowWidth * 0.7, 700)}px;
    text-align: center;
    // letter-spacing: 0.5rem;
  }
`;

export const ButtonContainer = styled.div`
  ${FlexCenterStyle}
  flex-direction: column;
  font-family: Times New Roman;
  margin-top: 0vh;
  margin-bottom: 5vh;
`;

export const Button = styled.div`
  position: relative;
  font-size: 3rem;
  height: 3.2rem;
  width: 13rem;
  margin: 2vh 0;
  text-align: center;
  ${FlexCenterStyle}
  cursor: pointer;

  transition: all 0.1s;
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
  margin-bottom: 3vh;
  opacity: 0.7;

  transition: all 0.1s;

  h1 {
    margin-bottom: 0.8rem;
    text-align: center;
    font-size: 1.2rem;
    font-family: Times New Roman;
    font-style: italic;
  }

  h3 {
    font-size: 0.77rem;
    line-height: 1.3;
    letter-spacing: 0.05rem;
    font-weight: normal;
    width: ${({ theme }) => Math.min(theme.windowWidth * 0.9, 900)}px;
    text-align: center;

    a {
      color: #cbc6e5;
      text-decoration: none;
      cursor: pointer;
    }
  }
`;
