import * as S from "./styles";
import dynamic from "next/dynamic";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

import { connectionToNodeLink, DUMMY_LIST, DATA_NODES_LINKS } from "./data";

//foundations
const QuestionMap = dynamic(() => import("foundations/screen/QuestionMap"), { ssr: false });
const ProjectModal = dynamic(() => import("foundations/screen/ProjectModal"), { ssr: false });
const EventModal = dynamic(() => import("foundations/screen/EventModal"), { ssr: false });

export default function Screen() {
  const [connectionData, setConnectionData] = useState(DATA_NODES_LINKS);

  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <S.Container>
        <QuestionMap connectionData={connectionData} />
        {/* <EventModal showModal={showModal} setShowModal={setShowModal} /> */}
        <ProjectModal showModal={showModal} setShowModal={setShowModal} />
      </S.Container>
    </>
  );
}
