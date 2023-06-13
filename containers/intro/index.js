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
    setScrollPos(Math.min(window.scrollY / windowHeight, 1));
  };

  return (
    <S.Container>
      <Background scrollPos={scrollPos} />

      <S.InitialText
        style={{
          opacity: Math.max(1 - scrollPos * 10, 0),
        }}
      >
        <S.UpperText>
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
        <S.BottomText>
          COUNTERPOINT is an interdisciplinary festival featuring new installations, events and performances imagined and designed by the Information Experience Design MA1 cohort of artists and
          thinkers.
        </S.BottomText>
      </S.InitialText>

      <S.MainVisual
        style={{
          opacity: scrollPos,
        }}
      >
        <S.Image
          src="/assets/Counterpoint.png"
          style={{
            transform: `scaleY(${(scrollPos * 1) ** 4})`,
          }}
        />

        <S.Info
          style={{
            opacity: Math.max(0.9 - (1 - scrollPos) * 10, 0),
          }}
        >
          <div>
            <p>RCA IED MA1</p>
          </div>
          <div>
            <p>Information Experience</p>
            <p>Design</p>
          </div>
        </S.Info>
        <S.Info
          style={{
            opacity: Math.max(0.9 - (1 - scrollPos) * 10, 0),
          }}
        >
          <div>
            <p>30th June - 3rd July</p>
            <p>12pm - 6pm</p>
          </div>
          <div>
            <p>RCA Kensington</p>
            <p>First Floor</p>
            <p>Royal Albert</p>
            <p>Hall Entrance</p>
          </div>
        </S.Info>
      </S.MainVisual>
    </S.Container>
  );
}
