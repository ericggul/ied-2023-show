import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo, use } from "react";

import { PROJECTS, CONNECTIONS, KEYWORDS } from "../data/constant";

//hooks
import useSocket from "utils/hooks/socket/vna/useSocketScreen";
import useResize from "utils/hooks/useResize";

import Image from "next/image";

const URLS = ["/assets/vna/ev1.png", "/assets/vna/ro1.png"];

export default function Screen() {
  const socket = useSocket({ handleNewProjectClick });

  const [currKeyword, setCurrKeyword] = useState("");

  function handleNewProjectClick(keyword) {
    if (!keyword) return;
    setCurrKeyword(keyword);
  }

  const [projectImg, setProjectImg] = useState("ev");
  const [projectImgTransitioningIdx, setProjectImgTransitioningIdx] = useState(0);
  const [aiImg, setAIImg] = useState("ev1");
  const [aiImgTransitioningIdx, setAiImgTransitioningIdx] = useState(0);

  useEffect(() => {
    setAIImg("ev" + ((currKeyword.length % 3) + 1).toString());
  }, [currKeyword]);

  ////////////
  ////project img
  ////////////
  useEffect(() => {
    setProjectImgTransitioningIdx((i) => i + 1);
  }, [projectImg]);

  ////////////
  ////ai img
  ////////////

  useEffect(() => {
    setAiImgTransitioningIdx((i) => i + 1);
  }, [aiImg]);

  return <S.Container></S.Container>;
}
