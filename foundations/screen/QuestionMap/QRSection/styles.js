import { FlexCenterStyle, WholeContainer } from "styles/common";
import styled from "styled-components";

export const RightWrapper = styled.div`
  background: rgba(200, 200, 200, 0.1);
  box-shadow: 0 0 0.5vw 0.5vw rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(1vw) brightness(1);
  position: absolute;
  right: 0;
  height: 100%;
  color: white;
  width: 20vw;

  display: flex;
  flex-direction: column;

  ${({ animate }) =>
    animate
      ? "animation: right-wrapper-animation 30s linear infinite;"
      : `
  transform: translateX(0);
  opacity: 1;
`}

  @keyframes right-wrapper-animation {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    30% {
      transform: translateX(0);
      opacity: 1;
    }
    35% {
      transform: translateX(100%);
      opacity: 0;
    }
    95% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const RightInner = styled.div`
  padding-top: 3vw;
  padding-left: 1vw;

  h1 {
    font-size: 1.5vw;
  }
`;

export const Expl = styled.div`
  font-size: 1.5vw;
  margin-top: 0.2vw;
  margin-bottom: 3.6vw;
  font-style: italic;
`;

export const ImageWrapper = styled.div`
  max-width: 10vw;
  margin-top: 3.5vw;

  img {
    width: 100%;
  }
`;

export const Footer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  margin-bottom: 2vw;

  p {
    font-size: 1.5vw;
  }

  h2 {
    font-size: 1.5vw;
  }
`;

export const TextWrapper = styled.div`
  font-size: 1.5vw;
  width: 100%;
  line-height: 1.1;

  span {
    font-size: 1.5vw;
    font-weight: bold;
  }
`;
