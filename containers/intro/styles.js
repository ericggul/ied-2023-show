import { FlexCenterStyle, WholeContainer } from "styles/common";
import styled, { css } from "styled-components";

export const Container = styled.div`
  ${WholeContainer}
  display: flex;
  flex-direction: column;
  height: 200vh;

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

export const UpperText = styled.div`
  ${FlexCenterStyle}
  justify-content: space-between;
  z-index: 5;
  width: ${({ theme }) => Math.min(theme.windowWidth * 0.8, 800)}px;
  margin: auto;
  margin-top: 3rem;
  ${({ scrollPos }) => `opacity: ${Math.max(1 - scrollPos * 10, 0)}`};
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

export const MainVisual = styled.div`
  ${FlexCenterStyle}
  ${WholeContainer}
  position: fixed !important;
  flex-direction: column;
  top: 0;
  bottom: 0;
  margin: auto;

  background-image: url("");
`;

// export const MainImage = styled.img`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   mix-blend-mode: multiply;

//   object-fit: cover;
//   ${({ scrollPos }) => `opacity: ${scrollPos}`};
// `;

export const MainText = styled.div`
  ${FlexCenterStyle}
  ${WholeContainer}
  mix-blend-mode: multiply;
  color: white;

  font-size: 10vw;

  ${({ scrollPos, theme }) => `transform: scaleY(${(scrollPos * 2) ** 3 * (768 / theme.windowWidth)});`}
`;
