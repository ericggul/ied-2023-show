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
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [windowWidth, windowHeight]);
  const [scrollPos, setScrollPos] = useState(0);
  const handleScroll = (e) => {
    setScrollPos(window.scrollY / windowHeight, 1);
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
