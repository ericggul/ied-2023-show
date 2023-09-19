import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

export default function UI() {
  return (
    <S.Container>
      <S.TopLeft>
        <img src="/assets/vna/logo/vna.svg" />
      </S.TopLeft>
      <S.TopRight>
        <p>DIGITAL DESIGN</p>
        <p>WEEKEND 2023</p>
        <br />
        <p>X</p>
        <br />
        <p>INFORMATION</p>
        <p>EXPERIENCE DESIGN</p>
      </S.TopRight>
      <S.BottomLeft
        style={{
          marginBottom: "-3px",
        }}
      >
        <img src="/assets/vna/logo/rca.png" alt="London Design Festival" />
      </S.BottomLeft>
      <S.BottomRight>
        <p>Credit: Jeanyoon</p>
        <p>Choi, Yue Song</p>
      </S.BottomRight>
    </S.Container>
  );
}
