import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";
import useResize from "utils/hooks/useResize";

export default function UI() {
  return (
    <S.Container>
      <S.TopLeft>
        <img src="/assets/vna/logo/ldf.png" alt="London Design Festival" />
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
      <S.BottomLeft>
        <img src="/assets/vna/logo/rca.png" alt="London Design Festival" />
      </S.BottomLeft>
      <S.BottomRight>
        <p>Credit: Jeanyoon</p>
        <p>Choi, Yue Song</p>
      </S.BottomRight>
    </S.Container>
  );
}
