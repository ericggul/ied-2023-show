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

  const [show, setShow] = useState(false);

  return (
    <S.Container>
      <Background show={show} windowWidth={windowWidth} scrollPos={scrollPos} handleBackgroundLoad={() => setShow(true)} />
      {show && <MainVisual show={show} scrollPos={scrollPos} />}
      <Navigator show={show} scrollPos={scrollPos} />
    </S.Container>
  );
}
