import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

import { connectionToNodeLink, DUMMY_LIST, DATA_NODES_LINKS } from "./data";
import axios from "axios";

import useResize from "utils/hooks/useResize";
import useSocket from "utils/hooks/socket/useSocketMobile";

//foundations
import Rhizome from "foundations/works/Rhizome";
import ListView from "foundations/works/ListView";
import Header from "foundations/works/Header";
import Footer from "foundations/works/Footer";

const roundUpFloat = (float, roundUp) => {
  return Math.round(float * roundUp) / roundUp;
};

export default function Works() {
  const socket = useSocket();

  const [connectionData, setConnectionData] = useState(DATA_NODES_LINKS);

  const [isRhizome, setIsRhizome] = useState(true);

  return (
    <>
      <S.Container>
        <Header isRhizome={isRhizome} setIsRhizome={setIsRhizome} />
        <Rhizome isVisible={isRhizome} connectionData={connectionData} />
        <ListView isVisible={!isRhizome} />

        <Footer />
      </S.Container>
    </>
  );
}
