import * as S from "./styles";
import dynamic from "next/dynamic";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

import useSocket from "utils/hooks/socket/useSocketScreen";

//foundations
const QuestionMap = dynamic(() => import("foundations/screen/QuestionMap"), { ssr: false });
const ProjectModal = dynamic(() => import("foundations/screen/ProjectModal"), { ssr: false });
const EventModal = dynamic(() => import("foundations/screen/EventModal"), { ssr: false });

export default function Screen({ projects }) {
  const [showModal, setShowModal] = useState(true);
  const [modalProject, setModalProject] = useState(null);

  const socket = useSocket({
    handleNewProjectClick,
  });

  function handleNewProjectClick(data) {
    const project = projects.find((project) => project.name === data);
    setModalProject(project || null);
    if (project) setShowModal(true);
  }

  return (
    <>
      <S.Container>
        <QuestionMap toneOn={!showModal} />
        {/* <EventModal showModal={showModal} setShowModal={setShowModal} /> */}
        <ProjectModal currentProject={modalProject} showModal={showModal && modalProject != null} setShowModal={setShowModal} />
      </S.Container>
    </>
  );
}
