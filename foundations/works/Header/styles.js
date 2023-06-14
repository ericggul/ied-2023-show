import { FlexCenterStyle } from "styles/common";
import styled from "styled-components";

import { Appear } from "styles/common";

export const Container = styled.div`
  z-index: 100;
  width: 100%;
  position: fixed;
  height: 7rem;
  padding-top: 0.5rem;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.5s;
  pointer-events: all;

  ${FlexCenterStyle}
  flex-direction: column;
  backdrop-filter: blur(1rem) brightness(2);

  animation: ${Appear} 1s ease-in-out both;
  animation-delay: 0.5s;
`;

export const Upper = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0.8rem;
  ${FlexCenterStyle}
  justify-content: space-between;

  width: 100%;
`;

export const UpperLeft = styled.div`
  font-size: 1rem;
  font-weight: bold;
  position: absolute;
  left: 1.5rem;
  opacity: 0.4;
  ${FlexCenterStyle}
  cursor: pointer;

  img {
    margin-right: 0.5rem;
    width: 1rem;
  }
`;

export const Center = styled.div`
  ${FlexCenterStyle}
  flex-direction: column;
`;

export const CenterText = styled.div`
  font-size: 1rem;
  font-weight: bold;
  opacity: 0.4;
  margin-right: 0rem;
`;

export const UpperCenter = styled.div`
  font-size: 1rem;
  font-weight: bold;
  ${FlexCenterStyle}
  transform: scaleY(4);

  @keyframes bounce-back {
    25% {
      transform: scaleY(4);
    }
    95% {
      transform: scaleY(1);
    }
    100% {
      transform: scaleY(4);
    }
  }

  animation: bounce-back 8s infinite;
`;

export const List = styled.div`
  margin-top: 1.5rem;
  ${FlexCenterStyle}
  width: 100%;
`;

export const Item = styled.div`
  ${FlexCenterStyle}
  text-align: center;
  font-size: 1.1rem;
  margin: 0 1rem;
  transition: all 0.3s;
  cursor: pointer;
  font-style: italic;
  font-family: Times New Roman;
`;

// export const Center = styled.div`
//   font-weight: bold;
//   font-size: 3rem;
//   ${FlexCenterStyle}
//   text-align: center;
//   transform: scaleX(0.7);
// `;
