import { FlexCenterStyle } from "@/styles/common";
import styled from "styled-components";

export const Container = styled.div`
  z-index: 100;
  width: 100%;
  height: 65px;
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props) => props.background};
  transition: all 0.5s;
`;
