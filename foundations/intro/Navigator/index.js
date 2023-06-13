import * as S from "./styles";
import { useState, useEffect } from "react";
import { useSpring } from "react-spring";
import * as easings from "d3-ease";

export default function Navigator({ show, scrollPos }) {
  ///main visual identity
  const [navigatorVisualIntensity, setNavigatorVisualIntensity] = useState(0);

  useEffect(() => {
    setNavigatorVisualIntensity(Math.max(1 - Math.abs(scrollPos - 1.5), 0));
  }, [scrollPos]);

  return (
    <S.MainVisual
      style={{
        opacity: navigatorVisualIntensity,
      }}
    >
      <S.Upper>
        <h2>COUNTERPOINT is a post-disciplinary festival featuring new installations, workshops and performances imagined and designed by the Information Experience Design MA1 cohort.</h2>
      </S.Upper>

      <S.ButtonContainer>
        <S.Button
          style={{
            transform: `scaleY(${1 + 1.5 ** 2 - (navigatorVisualIntensity * 1.5) ** 2})`,
            filter: `blur(${1 - navigatorVisualIntensity}rem)`,
          }}
        >
          WORKS
          <S.ArrowRight src={"/assets/arrow-right.svg"} />
        </S.Button>
        <S.Button
          style={{
            transform: `scaleY(${1 + 1.5 ** 2 - (navigatorVisualIntensity * 1.5) ** 2})`,
            filter: `blur(${1 - navigatorVisualIntensity}rem)`,
          }}
        >
          EVENTS
          <S.ArrowLeft src={"/assets/arrow-left.svg"} />
        </S.Button>
      </S.ButtonContainer>

      <S.Lower
        style={{
          filter: `blur(${1 - navigatorVisualIntensity}rem)`,
        }}
      >
        <h1>Website Made by</h1>
        <h3>UI Designer: Yue Song, Yiyao Liu</h3>
        <h3>Frontend & Backend Developer: Jeanyoon Choi</h3>
        <h3>Website Team: Kelly Ho, Yuxin Peng. Wenyu Wu, Xinyi Li, Aijia sun, Runnan Fang, Xinran Pu, Yige wei, Ze Zhu, Yuwei Li, Ruoling Shen</h3>
      </S.Lower>
    </S.MainVisual>
  );
}