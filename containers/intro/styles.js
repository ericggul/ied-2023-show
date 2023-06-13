import { FlexCenterStyle, WholeContainer } from "styles/common";
import styled, { css } from "styled-components";

export const Container = styled.div`
  ${WholeContainer}
  display: flex;
  flex-direction: column;
  height: 300vh;

  display: flex;
  flex-direction: column;
  color: white;
  font-family: Helvetica !important;

  z-index: 5 !important;

  h1 {
    z-index: 100;
    font-size: 5rem;
  }
`;

export const InitialText = styled.div`
  ${FlexCenterStyle}
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;

  width: ${({ theme }) => Math.min(theme.windowWidth * 0.8, 800)}px;
  height: ${({ theme }) => theme.windowHeight}px;

  opacity: 1;
  z-index: 5;
`;

export const UpperText = styled.div`
  ${FlexCenterStyle}
  justify-content: space-between;
  width: 100%;
  margin: auto;
  margin-top: 3rem;
`;

export const UpperLeft = styled.div`
  h1 {
    font-size: 3.7rem;
    line-height: 1;
  }
  h3 {
    font-size: 2.2rem;
    font-weight: lighter;
    margin-top: 1rem;
  }
`;

export const UpperRight = styled.div`
  font-size: calc(min(4vw, 1.5rem));
  font-weight: 100;
  margin-left: calc(min(0.5vw, 0.2rem));
`;

export const BottomText = styled.div`
  margin-bottom: 3rem;
`;

export const MainVisual = styled.div`
  ${FlexCenterStyle}
  ${WholeContainer}
  position: fixed !important;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  bottom: 0;
  margin: auto;
  background-size: cover;
  background-position: center;
  z-inde: 3;
`;

export const Image = styled.img`
  position: absolute;
  width: 90%;
  height: 90%;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  object-fit: contain;
`;

export const Info = styled.div`
  width: ${({ theme }) => Math.min(theme.windowWidth * 0.9, 1300)}px;
  display: flex;
  color: #fff;
  font-size: 1.1rem;

  div {
    margin: 4vh 2vw;
    width: 50%;
    display: flex;
    flex-direction: column;

    &:last-child {
      align-items: flex-end;

      p {
        text-align: right;
      }
    }
  }
`;
