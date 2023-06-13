import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

import { connectionToNodeLink, DUMMY_LIST, DATA_NODES_LINKS } from "./data";
import axios from "axios";

import useResize from "utils/hooks/useResize";
import useSocket from "utils/hooks/socket/useSocketMobile";

//foundations
import Rhizome from "foundations/works/Rhizome";
import Header from "foundations/works/Header";

const roundUpFloat = (float, roundUp) => {
  return Math.round(float * roundUp) / roundUp;
};

export default function Works() {
  const socket = useSocket();
  ///data store
  const [displayList, setDisplayList] = useState(DUMMY_LIST);
  const [connectionData, setConnectionData] = useState(DATA_NODES_LINKS);
  const [intensity, setIntensity] = useState(0);

  const [windowWidth, windowHeight] = useResize();

  const listContainerRef = useRef();

  return (
    <>
      <S.Container>
        <Header />
        <Rhizome connectionData={connectionData} />
      </S.Container>
    </>
  );
}
