import { FlexCenterStyle, WholeContainer } from "styles/common";
import styled from "styled-components";

export const Container = styled.div`
  ${WholeContainer}

  background: black;
  color: white;
  overflow-y: hidden;

  // display: flex;
  // flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 25vh;
  overflow-x: scroll;
  width: 400vh;
  flex-shrink: 0;
`;

export const Img = styled.div`
  width: 25vh !important;
  height: 25vh;

  // transform: translateY(${({ transitioning }) => (transitioning ? "-100%" : "0")});
  transform: rotateY(${({ transitioning }) => (transitioning ? "90deg" : "0deg")});
  // opacity: ${({ transitioning }) => (transitioning ? "0" : "1")};
  transition: all 0.2s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
