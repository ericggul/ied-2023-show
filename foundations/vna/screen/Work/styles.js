import { FlexCenterStyle, WholeContainer, Appear } from "styles/common";
import styled from "styled-components";

export const Background = styled.div`
  ${WholeContainer}
  ${FlexCenterStyle}

  opacity: ${({ transitioning }) => (transitioning ? "0" : "1")};
  transition: all 0.2s ease-in-out;

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

  // animation: background-move 20s infinite linear;
`;

export const Container = styled.div`
  ${WholeContainer}
  ${FlexCenterStyle}

  pointer-events: none;
  backdrop-filter: blur(1vw) brightness(0.85);
  background: linear-gradient(black 0%, rgba(0, 0, 0, 0.1) 42%, rgba(0, 0, 0, 0.1) 52%, black 100%);
`;

export const Left = styled.div`
  margin-left: 2vw;
  width: 16vw;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  height: 75vh;
`;

export const Keyword = styled.div`
  //uppercase
  font-size: 1.25vw;
  text-transform: uppercase;
  font-weight: medium;
  font-style: italic;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.5;
  letter-spacing: 0.07vw;

  ${({ highlight }) => highlight && "color: rgba(255, 255, 255, 1);"}
  ${({ highlight }) => highlight && "text-shadow: 0 0 1vw rgba(255, 255, 255, 1);"}
  transition: all 0.2s ease-in-out;
`;

export const CenterKeyword = styled.div`
  ${FlexCenterStyle}
  ${WholeContainer}
  margin: auto;
  font-size: 8vw;
  font-style: italic;

  ${({ visible }) => (visible ? "opacity: 1;" : "opacity: 0;")}
  transition: all 0.1s ease-in-out;
  z-index: 300;
  font-weight: 500;
  mix-blend-mode: exclusion;
  text-shadow: 0 0 1vw white;
  color: white;

  text-align: center;
`;

export const Center = styled.div`
  width: 60vw;
  height: 33.75vw;
  margin: 0 2vw;

  opacity: ${({ transitioning }) => (transitioning ? "0" : "1")};
  transition: all 0.3s ease-in-out;
`;

export const Right = styled.div`
  margin-right: 3vw;
  margin-left: 2vw;
  width: 13vw;
  font-size: 1.25vw;
  letter-spacing: 0.07vw;
  font-weight: regular;
`;
export const Bottom = styled.div`
  position: absolute;
  bottom: 3vw;
  font-size: 4vw;
  font-weight: 500;
  font-style: italic;
  opacity: 0.75;
`;
