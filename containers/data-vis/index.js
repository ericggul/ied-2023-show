import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

import { connectionToNodeLink, DATA, DATA_NODES_LINKS } from "./data";
import axios from "axios";

//foundations
import Graph from "foundations/data-vis";

export default function DataVis({ show = true, filter }) {
  ///data store
  const [showGraph, setShowGraph] = useState(false);
  const [metaData, setMetaData] = useState(DATA);
  const [connectionData, setConnectionData] = useState(DATA_NODES_LINKS);

  return (
    <S.Container show={show}>
      <Graph connectionData={connectionData} />
    </S.Container>
  );
}
