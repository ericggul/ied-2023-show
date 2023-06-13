import * as S from "./styles";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Navigator({ show, scrollPos }) {
  ///main visual identity
  const [navigatorVisualIntensity, setNavigatorVisualIntensity] = useState(0);

  useEffect(() => {
    setNavigatorVisualIntensity(Math.max(1 - Math.abs(scrollPos - 1.5), 0));
  }, [scrollPos]);

  const router = useRouter();

  function handleClick(ev, type) {
    router.push("/works");
  }

  return (
    <S.MainVisual
      style={{
        opacity: navigatorVisualIntensity,
      }}
    >
      <S.Upper>
        <h2>
          <b>COUNTERPOINT</b> is a post-disciplinary festival featuring new installations, workshops and performances imagined and designed by the Information Experience Design MA1 cohort.
        </h2>
      </S.Upper>

      <S.ButtonContainer>
        <S.Button
          style={{
            transform: `scaleY(${1 + 1.5 ** 2 - (navigatorVisualIntensity * 1.5) ** 2})`,
            filter: `blur(${1 - navigatorVisualIntensity}rem)`,
          }}
          onClick={(ev) => handleClick(ev, "works")}
        >
          WORKS
          <S.ArrowRight src={"/assets/arrow-right.svg"} />
        </S.Button>
        <S.Button
          style={{
            transform: `scaleY(${1 + 1.5 ** 2 - (navigatorVisualIntensity * 1.5) ** 2})`,
            filter: `blur(${1 - navigatorVisualIntensity}rem)`,
          }}
          onClick={(ev) => handleClick(ev, "events")}
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
        <h3>
          UI Designer:{" "}
          <a href={"https://portfolio-jyc.org/"} target={"_blank"}>
            Yue Song
          </a>
          , Yiyao Liu
        </h3>
        <h3>
          <a href={"https://portfolio-jyc.org/"} target={"_blank"}>
            Frontend & Backend Developer: Jeanyoon Choi
          </a>
        </h3>
        <h3>Website Team: Kelly Ho, Yuxin Peng. Wenyu Wu, Xinyi Li, Aijia sun, Runnan Fang, Xinran Pu, Yige wei, Ze Zhu, Yuwei Li, Ruoling Shen</h3>
      </S.Lower>
    </S.MainVisual>
  );
}
