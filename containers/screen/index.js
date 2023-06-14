import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

import { connectionToNodeLink, DUMMY_LIST, DATA_NODES_LINKS } from "./data";

//foundations
import Background from "foundations/screen/Background";
import QuestionMap from "foundations/screen/QuestionMap";
import Modal from "foundations/screen/Modal";

export default function Screen() {
  const [connectionData, setConnectionData] = useState(DATA_NODES_LINKS);

  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <S.Container>
        {/* <Background /> */}
        <QuestionMap connectionData={connectionData} />
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </S.Container>
    </>
  );
}
