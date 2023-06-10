import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

import { connectionToNodeLink, DUMMY_LIST, DATA_NODES_LINKS } from "./data";
import axios from "axios";

import useResize from "utils/hooks/useResize";

//foundations
import ProjectMapEl from "foundations/project-map";

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
const roundUpFloat = (float, roundUp) => {
  return Math.round(float * roundUp) / roundUp;
};

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

export default function MainEl({ show = true, filter }) {
  ///data store
  const [displayList, setDisplayList] = useState(DUMMY_LIST);
  const [connectionData, setConnectionData] = useState(DATA_NODES_LINKS);
  const [intensity, setIntensity] = useState(0);

  const [windowWidth, windowHeight] = useResize();

  const listContainerRef = useRef();

  function handleTopClick() {
    listContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {/* <Header background={intensity < 0.8 ? "black" : "transparent"} /> */}
      <S.Container show={show}>
        <S.ListContainer
          ref={listContainerRef}
          onScroll={(e) => {
            e.stopPropagation();
            setIntensity((i) => Math.min(e.target.scrollTop / 2000, 1) ** 0.8);
          }}
        >
          <ProjectMapEl connectionData={connectionData} intensity={roundUpFloat(intensity, 10)} handleTopClick={handleTopClick} />
          {displayList.map((el, i) => (
            <SingleProject key={i} data={el} intensity={intensity} isMobile={windowWidth < 768} />
          ))}
        </S.ListContainer>
      </S.Container>
    </>
  );
}

function SingleProject({ data, opacity, isMobile, intensity }) {
  const target = useMemo(
    () => ({
      projectName: "This is not an artwork",
      artistName: "Nobody",
    }),
    []
  );

  const transformThreshold = useMemo(() => getRandom(0.5, 0.8), []);

  const longerText = useMemo(() => {
    let projectLonger = data.projectName.length > target.projectName.length ? data.projectName : target.projectName;
    let artistLonger = data.artistName.length > target.artistName.length ? data.artistName : target.artistName;

    return {
      projectName: projectLonger,
      artistName: artistLonger,
    };
  }, [target, data]);

  return (
    <S.SingleProject opacity={opacity} isMobile={isMobile}>
      <h1>
        {longerText.projectName.split("").map((letter, i) => (
          <SingleCharacter key={i} transformThreshold={transformThreshold} origin={data.projectName[i] || ""} target={target.projectName[i] || ""} intensity={intensity} />
        ))}
      </h1>
      <h3>
        {longerText.artistName.split("").map((letter, i) => (
          <SingleCharacter key={i} transformThreshold={transformThreshold} origin={data.artistName[i] || ""} target={target.artistName[i] || ""} intensity={intensity} />
        ))}
      </h3>
    </S.SingleProject>
  );
}

function SingleCharacter({ origin, target, intensity, transformThreshold }) {
  const [changed, setChanged] = useState(false);
  const [letter, setLetter] = useState(origin);
  const changeTarget = useMemo(() => getRandom(getRandom(0, transformThreshold), transformThreshold), [transformThreshold]);

  useEffect(() => {
    if (intensity > changeTarget) {
      setChanged(true);
      setLetter(target);
    } else {
      setChanged(false);
      setLetter(origin);
    }
  }, [intensity, changeTarget]);

  return <S.SingleCharacter changed={changed}>{letter}</S.SingleCharacter>;
}
