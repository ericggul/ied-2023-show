import * as S from "./styles";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { toast, Toast } from "loplat-ui";

export default function Navigator({ show, scrollPos }) {
  ///main visual identity
  const [navigatorVisualIntensity, setNavigatorVisualIntensity] = useState(0);

  useEffect(() => {
    setNavigatorVisualIntensity(Math.max(1 - Math.max((4 - scrollPos) * 0.5, 0), 0));
  }, [scrollPos]);

  console.log(scrollPos, navigatorVisualIntensity);

  const router = useRouter();

  function handleClick(ev, type) {
    // router.push("/works");
    toast.danger("Work in progress");
  }

  return (
    <>
      <S.MainVisual
        style={{
          opacity: Math.min(navigatorVisualIntensity * 1.1, 1),
        }}
      >
        <S.Upper>
          <h2>COUNTERPOINT</h2>
          <br />
          <h2>is a post-disciplinary festival featuring new installations, workshops and performances imagined and designed by the Information Experience Design MA1 cohort.</h2>
        </S.Upper>

        <S.ButtonContainer>
          <S.Button
            style={{
              transform: `scaleY(${1 + 1.5 ** 2 - (Math.min(navigatorVisualIntensity * 1.1, 1) * 1.5) ** 2})`,
              filter: `blur(${Math.max(0.9 - navigatorVisualIntensity, 0)}rem)`,
            }}
            onClick={(ev) => handleClick(ev, "works")}
          >
            (WIP)
            <S.ArrowRight src={"/assets/arrow-right.svg"} />
          </S.Button>
          <S.Button
            style={{
              transform: `scaleY(${1 + 1.5 ** 2 - (Math.min(navigatorVisualIntensity * 1.1, 1) * 1.5) ** 2})`,
              filter: `blur(${Math.max(0.9 - navigatorVisualIntensity, 0)}rem)`,
            }}
            onClick={(ev) => handleClick(ev, "events")}
          >
            (WIP)
            <S.ArrowLeft src={"/assets/arrow-left.svg"} />
          </S.Button>
        </S.ButtonContainer>

        <S.Lower
          style={
            {
              // filter: `blur(${Math.max(0.9 - navigatorVisualIntensity, 0)}rem)`,
            }
          }
        >
          <h1>Website Made by</h1>
          <h3>
            UI Designer:{" "}
            <a href={"https://portfolio-jyc.org/"} target={"_blank"}>
              Yue Song
            </a>
          </h3>
          <h3>
            <a href={"https://portfolio-jyc.org/"} target={"_blank"}>
              Frontend & Backend Developer: Jeanyoon Choi
            </a>
          </h3>
          {/* <h3>Website Team: Kelly Ho, Yuxin Peng. Wenyu Wu, Xinyi Li, Aijia sun, Runnan Fang, Xinran Pu, Yige wei, Ze Zhu, Yuwei Li, Ruoling Shen</h3> */}
        </S.Lower>
      </S.MainVisual>
      <Toast />
    </>
  );
}
