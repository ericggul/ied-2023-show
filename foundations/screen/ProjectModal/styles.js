import { FlexCenterStyle, WholeContainer, Appear } from "styles/common";
import styled from "styled-components";

export const Container = styled.div`
  ${WholeContainer}
  ${FlexCenterStyle}
  flex-direction: column;
  z-index: 300;
  color: #fff;

  ${({ showModal }) =>
    showModal
      ? `
      pointer-events: auto;
    opacity: 1;
  `
      : `
      pointer-events: none;
    opacity: 0;
  `}
`;

export const ModalContainer = styled.div`
  display: flex;
  ${FlexCenterStyle}
  ${WholeContainer} 



  backdrop-filter: blur(0.6rem) brightness(1.5);
  // box-shadow: inset 0 0 1.4rem 0.1rem rgba(255, 255, 255, 0.2);
`;

export const Left = styled.div`
  height: 100%;
  padding-left: 3vw;
  width: ${({ theme }) => Math.min(theme.windowWidth * 0.69, theme.windowHeight * 1.05)}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  width: ${({ theme }) => Math.min(theme.windowWidth * 0.69, theme.windowHeight * 1.05)}px;
  height: ${({ theme }) => (Math.min(theme.windowWidth * 0.69, theme.windowHeight * 1.05) * 2) / 3}px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }
`;

export const InformationContainer = styled.div`
  margin-top: 2vw;
  display: flex;
`;
export const InfoLeft = styled.div`
  width: 40%;
  h1 {
    font-size: 1.8vw;
    margin-bottom: 0.5vw;
  }
  h2 {
    font-size: 1.8vw;
    font-weight: normal;
    font-style: italic;
    font-family: Times New Roman;
  }
`;
export const InfoRight = styled.div`
  margin-left: 2vw;
  width: 55%;
  font-size: 1.2vw;

  p {
    margin-bottom: 1.5vw;
  }
`;

export const SingleKeyword = styled.span`
  margin-right: 0.5vw;
`;

export const Right = styled.div`
  height: 100%;
  width: 18vw;
  padding-right: 3vw;
  padding-left: 8vw;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SingleRelatedProject = styled.div`
  width: 18vw;
  margin: 1vw 0;
  position: absolute;

  ${({ yIdx }) => `transform: translateY(${-yIdx * 18}vw);`}
  ${({ opacity }) => `opacity: ${opacity};`}
  transition: all 1s ease-in-out;
`;

export const RelatedImage = styled.div`
  width: 18vw;
  height: 12vw;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }
`;

export const RelatedExplanation = styled.div`
  h1 {
    font-weight: normal;
    font-size: 1.3vw;
    margin-top: 1vw;
  }
  h2 {
    font-weight: normal;
    font-size: 1.3vw;
    font-style: italic;
    font-family: Times New Roman;
  }
`;
