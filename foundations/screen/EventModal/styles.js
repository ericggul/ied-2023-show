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
  flex-direction: column;
  backdrop-filter: blur(3vw);
`;

export const Header = styled.div`
  ${FlexCenterStyle}
  flex-direction: column;

  h1 {
    font-size: 4vw;
    margin-bottom: 5vw;
  }
`;

export const TimeContainer = styled.div`
  ${FlexCenterStyle}
`;

export const Days = styled.div`
  font-size: 9vw;
  // margin-left: -7vw;
  span {
    font-size: 1.5vw;
    margin: 0.5vw;
  }
  margin-right: 1.8vw;
`;

export const Box = styled.div`
  font-size: 9vw;
  margin: 0 2.3vw;
  min-width: 10vw;
  position: relative;

  text-align: center;

  span {
    font-size: 1.5vw;
    margin: 0.5vw;
  }
`;

export const Dots = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
`;

export const Dot = styled.div`
  width: 1.5vw;
  height: 1.5vw;
  border-radius: 50%;
  box-shadow: inset 0 0 0.4vw white;
  margin: 0.5vw 0;
`;

export const InfoContainer = styled.div``;
