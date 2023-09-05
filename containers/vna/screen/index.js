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

  return (
    <S.Container>
      {new Array(4).fill(0).map((_, j) => (
        <S.Row key={j}>
          {new Array(10).fill(0).map((_, i) => (
            <Fragment key={i}>
              {(i + j) % 2 === 0 && <ImageComp i={i} j={j} globalImgURL={projectImg} />}
              {(i + j) % 2 === 1 && <ImageComp i={i} j={j} globalImgURL={aiImg} />}
            </Fragment>
          ))}
        </S.Row>
      ))}
    </S.Container>
  );
}

function ImageComp({ i, j, globalImgURL }) {
  const [imgURL, setImgURL] = useState(false);
  const transitioningIdx = useRef(0);
  const [transitioning, setTransitioning] = useState(false);
  const timeoutSeconds = useMemo(() => (i + j) * 50, [i, j]);

  const [windowWidth, windowHeight] = useResize();

  useEffect(() => {
    let timeout1, timeout2;

    transitioningIdx.current++;
    timeout1 = setTimeout(() => {
      setTransitioning(true);
    }, timeoutSeconds);
    timeout2 = setTimeout(() => {
      setImgURL(globalImgURL);
      setTransitioning(false);
    }, timeoutSeconds + 300);

    return () => {
      timeout1 && clearTimeout(timeout1);
      timeout2 && clearTimeout(timeout2);
    };
  }, [globalImgURL, i, j, timeoutSeconds]);

  return (
    <S.Img transitioning={transitioning} transitioningIdx={transitioningIdx.current}>
      <Image src={`/assets/vna/${imgURL}.png`} width={windowHeight / 4} height={windowHeight / 4} alt="Image" />
    </S.Img>
  );
}
