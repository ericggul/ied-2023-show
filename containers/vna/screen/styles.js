import { FlexCenterStyle, WholeContainer } from "styles/common";
import styled from "styled-components";

export const Container = styled.div`
  ${WholeContainer}

  background: black;
  color: white;
  overflow-y: hidden;

  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 25vh;
  flex-wrap: wrap;
`;

export const Img = styled.div`
  width: 25vh !important;
  height: 25vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
