import * as S from "./styles";
import dynamic from "next/dynamic";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

//foundations
import MainVisual from "foundations/intro/MainVisual";
import Navigator from "foundations/intro/Navigator";
import Background from "foundations/intro/Background";

//hooks
import useResize from "utils/hooks/useResize";

export default function Intro() {
  const [windowWidth, windowHeight] = useResize();

  ///scroller
  useEffect(() => {
    let timeout;
    document.addEventListener("scroll", () => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(handleScroll, 5);
    });
    return () => {
      document.removeEventListener("scroll", () => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(handleScroll, 5);
      });
    };
  }, [windowWidth, windowHeight]);
  const [scrollPos, setScrollPos] = useState(0);
  const handleScroll = (e) => {
    if (windowHeight === 0) return;
    setScrollPos(Math.round((window.scrollY / windowHeight) * 100) / 100);
  };

  const [show, setShow] = useState(0);

  return (
    <S.Container>
      <Background show={show} windowWidth={windowWidth} scrollPos={scrollPos} handleImageLoaded={() => setShow((s) => s + 0.5)} />
      <MainVisual show={show} scrollPos={scrollPos} handleImageLoaded={() => setShow((s) => s + 0.5)} />
      <Navigator show={show} scrollPos={scrollPos} />
      <S.Loading show={show < 1}></S.Loading>
    </S.Container>
  );
}
