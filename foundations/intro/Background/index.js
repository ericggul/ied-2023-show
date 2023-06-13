import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";
import useResize from "utils/hooks/useResize";

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
    <S.BackgroundImage>
      <S.Image scrollPos={scrollPos} src="/assets/Asses.png" alt="main-image" />
    </S.BackgroundImage>
  );
}
