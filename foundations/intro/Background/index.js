import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";
import useResize from "utils/hooks/useResize";

export default function Intro({ scrollPos }) {
  return (
    <S.BackgroundImage>
      <S.Image scrollPos={scrollPos} src="/assets/Horses.png" alt="main-image" />
    </S.BackgroundImage>
  );
}
