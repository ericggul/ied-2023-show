import * as S from "./styles";
import dynamic from "next/dynamic";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

import useResize from "utils/hooks/useResize";

const Background = dynamic(() => import("foundations/intro/Background"), {
  ssr: false,
});

export default function Intro() {
  const [windowWidth, windowHeight] = useResize();
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [windowWidth, windowHeight]);

  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = (e) => {
    setScrollPos(window.scrollY / windowHeight);
  };

  return (
    <S.Container>
      <Background scrollPos={scrollPos} />

      <S.UpperText scrollPos={scrollPos}>
        <S.UpperLeft>
          <h1>RCA</h1>
          <h1>IED</h1>
          <h3>MA 1</h3>
        </S.UpperLeft>

        <S.UpperRight>
          <p>Information Experience</p>
          <p>Design</p>
        </S.UpperRight>
      </S.UpperText>

      <S.MainVisual scrollPos={scrollPos}>
        <S.MainText scrollPos={scrollPos}>COUNTERPOINT</S.MainText>
        {/* <S.MainImage scrollPos={scrollPos} src="/assets/IEDVisual.jpeg" alt="key-visual-image" /> */}
      </S.MainVisual>
    </S.Container>
  );
}
