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
  ///socket handler
  const socket = useSocket({ handleNewProjectClick });
  const [currKeyword, setCurrKeyword] = useState("");

  function handleNewProjectClick(keyword) {
    if (!keyword) return;
    setCurrKeyword(keyword);
  }

  ///idle state handler
  const [workDeanimated, setWorkDeanimated] = useState(false);
  const [isIdle, setIsIdle] = useState(true);
  useEffect(() => {
    let timeout1, timeout2;
    if (currKeyword) {
      setIsIdle(false);
      timeout2 = setTimeout(() => {
        setWorkDeanimated(true);
      }, 29 * 1000);
      timeout1 = setTimeout(() => {
        setCurrKeyword("");
      }, 30 * 1000);
    } else {
      setIsIdle(true);
      setWorkDeanimated(false);
    }
    return () => {
      timeout1 && clearTimeout(timeout1);
      timeout2 && clearTimeout(timeout2);
    };
  }, [currKeyword]);

  return (
    <S.Container>
      {isIdle && <Idle />}
      {currKeyword && <Work workDeanimated={workDeanimated} currKeyword={currKeyword} />}
    </S.Container>
  );
}
