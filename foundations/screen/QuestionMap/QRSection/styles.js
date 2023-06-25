import { FlexCenterStyle, WholeContainer } from "styles/common";
import styled from "styled-components";

export const RightWrapper = styled.div`
  background: rgba(200, 200, 200, 0.1);
  box-shadow: 0 0 0.5vw 0.5vw rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(0.5vw) brightness(1);
  position: absolute;
  right: 0;
  height: 100%;
  color: white;
  width: 18vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RightInner = styled.div`
  padding-left: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 1.5vw;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 10vw;

  img {
    width: 100%;
  }
`;

export const Footer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 2vw;

  p {
    font-size: 1.7vw;
  }

  h2 {
    font-size: 1.7vw;
  }
`;
