import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

import { connectionToNodeLink, DUMMY_LIST, DATA_NODES_LINKS } from "./data";
import axios from "axios";

import useResize from "utils/hooks/useResize";

//foundations
import DataVisEl from "foundations/data-vis";

const INTERRUPTION = [
  {
    projectName: "This is not an artwork",
    artistName: "Nobody",
    weight: 1,
  },
  {
    projectName: "Are you",
    artistName: "Paying Attention?",
    weight: 0.5,
  },
  {
    projectName: "Is anyone actually",
    artistName: "Reading This?",
    weight: 0.5,
  },
  {
    projectName: "This Traditional List Layout",
    artistName: "Is Non-Rhizomatic",
    weight: 0.5,
  },
  {
    projectName: "Get out of the box",
    artistName: "Literally Saying",
    weight: 0.5,
  },
];

const getRandom = (a, b) => Math.random() * (b - a) + a;

const getRandomFromInterruption = () => {
  ///consider weight
  let weightSum = INTERRUPTION.reduce((acc, cur) => acc + cur.weight, 0);
  let random = Math.random() * weightSum;

  let currentSum = 0;
  for (let i = 0; i < INTERRUPTION.length; i++) {
    currentSum += INTERRUPTION[i].weight;
    if (random < currentSum) return INTERRUPTION[i];
  }
  return INTERRUPTION[0];
};

export default function DataVis({ show = true, filter }) {
  ///data store
  const [showGraph, setShowGraph] = useState(false);
  const [displayList, setDisplayList] = useState(DUMMY_LIST);
  const [connectionData, setConnectionData] = useState(DATA_NODES_LINKS);
  const [intensity, setIntensity] = useState(0);

  useEffect(() => {
    let originalList = DUMMY_LIST;
    let originalLength = originalList.length;

    //double up the length
    for (let i = 0; i < originalLength * 0.5; i++) {
      let randomEl = getRandomFromInterruption();
      //insert in loc
      let randomLoc = getRandom(getRandom(0, originalList.length), originalList.length);

      originalList.splice(randomLoc, 0, randomEl);
    }

    setDisplayList(originalList);
  }, []);

  const [windowWidth, windowHeight] = useResize();

  const listContainerRef = useRef();

  function handleTopClick() {
    listContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <S.Container
      show={show}
      onScroll={(e) => {
        // e.stopPropagation();
        // console.log(e.target.scrollTop);
        // setIntensity((i) => e.target.scrollTop / 1000);
      }}
    >
      <S.ListContainer
        ref={listContainerRef}
        onScroll={(e) => {
          e.stopPropagation();
          console.log(e.target.scrollTop);
          setIntensity((i) => Math.min(e.target.scrollTop / 2000, 1) ** 0.8);
        }}
      >
        <DataVisEl connectionData={connectionData} intensity={intensity} handleTopClick={handleTopClick} />
        {displayList.map((el, i) => (
          <SingleProject key={i} data={el} isMobile={windowWidth < 768} />
        ))}
      </S.ListContainer>
    </S.Container>
  );
}

function SingleProject({ data, opacity, isMobile }) {
  return (
    <S.SingleProject opacity={opacity} isMobile={isMobile}>
      <h1>{data.projectName}</h1>
      <h3>{data.artistName}</h3>
    </S.SingleProject>
  );
}
