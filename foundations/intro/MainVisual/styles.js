import { FlexCenterStyle, WholeContainer } from "styles/common";
import styled, { css } from "styled-components";

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
