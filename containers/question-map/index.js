import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

import { connectionToNodeLink, DUMMY_LIST, DATA_NODES_LINKS } from "./data";

import useResize from "utils/hooks/useResize";

//foundations
import QuestionMapEl from "foundations/question-map";

export default function MainEl() {
  const [connectionData, setConnectionData] = useState(DATA_NODES_LINKS);

  return (
    <>
      <S.Container>
        <QuestionMapEl connectionData={connectionData} />
      </S.Container>
    </>
  );
}
