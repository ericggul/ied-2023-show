import { FlexCenterStyle, WholeContainer, Appear } from "styles/common";
import styled from "styled-components";

export const Background = styled.div`
  ${WholeContainer}
  ${FlexCenterStyle}


  @keyframes background-move {
    0% {
      transform: translateX(-3%) translateY(-3%);
    }
    25% {
      transform: translateX(3%) translateY(-3%);
    }
    50% {
      transform: translateX(3%) translateY(3%);
    }
    75% {
      transform: translateX(-3%) translateY(3%);
    }
    100% {
      transform: translateX(-3%) translateY(-3%);
    }
  }

  animation: background-move 20s infinite linear;
`;

export const Container = styled.div`
  ${WholeContainer}
  ${FlexCenterStyle}

  pointer-events: none;
  backdrop-filter: blur(1vw);
  background: linear-gradient(black 0%, rgba(0, 0, 0, 0.1) 42%, rgba(0, 0, 0, 0.1) 52%, black 100%);
`;

export const Left = styled.div`
  margin-left: 2vw;
  width: 16vw;
`;
export const Center = styled.div`
  width: 60vw;
  height: 33.75vw;
  margin: 0 2vw;

  img {
    width: 100%;
    object-fit: cover;
  }
`;
export const Right = styled.div`
  margin-right: 2vw;
  width: 16vw;
`;
export const Bottom = styled.div`
  position: absolute;
  bottom: 2vw;
  font-size: 4vw;
  font-weight: 500;
  font-style: italic;
  opacity: 0.75;
`;
