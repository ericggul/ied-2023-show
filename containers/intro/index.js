import * as S from "./styles";
import dynamic from "next/dynamic";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

const Background = dynamic(() => import("foundations/intro/Background"), {
  ssr: false,
});

export default function Intro() {
  return (
    <S.Container>
      <Background />
      <h1>COUNTERPOINTS</h1>
    </S.Container>
  );
}
