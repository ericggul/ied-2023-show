import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

import { connectionToNodeLink, DUMMY_LIST, DATA_NODES_LINKS } from "./data";
import axios from "axios";

//foundations
import DataVisEl from "foundations/data-vis";

export default function DataVis({ show = true, filter }) {
  ///data store
  const [showGraph, setShowGraph] = useState(false);
  const [metaData, setMetaData] = useState(DUMMY_LIST);
  const [connectionData, setConnectionData] = useState(DATA_NODES_LINKS);
  const [intensity, setIntensity] = useState(0);

  return (
    <S.Container
      show={show}
      onScroll={(e) => {
        e.stopPropagation();
        setIntensity((i) => i + 0.01);
      }}
    >
      <DataVisEl connectionData={connectionData} intensity={intensity} />
      <S.ListContainer
        opacity={1 - intensity}
        onScroll={(e) => {
          e.stopPropagation();
          setIntensity((i) => Math.min(i + 0.01, 1));
        }}
      >
        {DUMMY_LIST.map((el, i) => (
          <SingleProject key={i} data={el} />
        ))}
      </S.ListContainer>
    </S.Container>
  );
}

function SingleProject({ data }) {
  return (
    <S.SingleProject>
      <h1>{data.projectName}</h1>
      <h3>{data.artistName}</h3>
    </S.SingleProject>
  );
}
