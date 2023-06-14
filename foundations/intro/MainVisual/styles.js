import { FlexCenterStyle, WholeContainer } from "styles/common";
import styled, { css } from "styled-components";

export const MainVisual = styled.div`
  ${FlexCenterStyle}
  ${WholeContainer}

  height: 90vh;
  position: fixed !important;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  bottom: 0;
  opacity: 0;
  margin: auto;
  background-size: cover;
  background-position: center;
  z-inde: 3;

  transition: all 0.1s;
`;

export const Image = styled.img`
  position: absolute;
  width: 90%;
  height: 90vh;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  object-fit: contain;
  transform: scaleY(0);

  transition: all 0.1s;
`;

export const Info = styled.div`
  width: ${({ theme }) => Math.min(theme.windowWidth * 0.9, 1300)}px;
  display: flex;
  color: #fff;
  z-indes: 30;
  mix-blend-mode: difference;

  transition: all 0.1s;
  letter-spacing: 0.25rem;
  line-height: 1.2;

  div {
    margin: 4vh 2vw;
    width: 50%;
    display: flex;
    flex-direction: column;

    &:last-child {
      align-items: flex-end;

      h1,
      h2 {
        text-align: right;
      }
    }
    h1,
    h2 {
      font-size: 1.1rem;
      font-weight: normal;
      margin: 0;
      padding: 0;
      i {
        font-size: 1rem;
        font-family: Times New Roman;
        line-height: 1;
      }
    }
  }
`;
