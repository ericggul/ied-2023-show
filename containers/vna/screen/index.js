import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo, use } from "react";

import { PROJECTS, CONNECTIONS, KEYWORDS } from "../data/constant";

//hooks
import useSocket from "utils/hooks/socket/vna/useSocketScreen";
import useResize from "utils/hooks/useResize";

import Image from "next/image";

import dynamic from "next/dynamic";

const Idle = dynamic(() => import("foundations/vna/screen/Idle"), { ssr: false });
const Work = dynamic(() => import("foundations/vna/screen/Work"), { ssr: false });

export default function Screen() {
  const socket = useSocket({ handleNewProjectClick });

  const [currKeyword, setCurrKeyword] = useState("");

  function handleNewProjectClick(keyword) {
    if (!keyword) return;
    setCurrKeyword(keyword);
  }

  return (
    <S.Container>
      {/* <Idle /> */}
      {currKeyword && <Work currKeyword={currKeyword} />}
    </S.Container>
  );
}
