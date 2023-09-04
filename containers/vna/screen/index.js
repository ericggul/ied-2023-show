import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

import { PROJECTS, CONNECTIONS, KEYWORDS } from "../data/constant";

//hooks
import useSocket from "utils/hooks/socket/vna/useSocketScreen";

//foundations
import dynamic from "next/dynamic";

const URLS = ["/assets/vna/ev1.png", "/assets/vna/ro1.png"];

export default function Screen() {
  const socket = useSocket({ handleNewProjectClick });

  const [currKeyword, setCurrKeyword] = useState("");

  function handleNewProjectClick(keyword) {
    if (!keyword) return;
    setCurrKeyword(keyword);
  }

  console.log(currKeyword.length);

  return (
    <S.Container>
      {new Array(4).fill(0).map((_, j) => (
        <S.Row key={j}>
          {new Array(25).fill(0).map((_, i) => (
            <S.Img key={i}>
              {(i + j) % 2 === 0 && <img src={"/assets/vna/ev.png"} />}
              {(i + j) % 2 === 1 && <img src={`/assets/vna/ev${currKeyword.length % 2 == 0 ? 1 : 2}.png`} />}
            </S.Img>
          ))}
        </S.Row>
      ))}
    </S.Container>
  );
}
