import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

import { PROJECTS, CONNECTIONS } from "../data/constant";
import { projectsToConnection, deriveKeywords } from "../data/utils";

//hooks
import useSocket from "utils/hooks/socket/vna/useSocketMobile";

//foundations
import dynamic from "next/dynamic";

const Rhizome = dynamic(() => import("foundations/vna/works/Rhizome"), { ssr: false });
const Modal = dynamic(() => import("foundations/vna/works/Modal"), { ssr: false });

export default function Map({ projectsData = PROJECTS, connectionData = CONNECTIONS }) {
  //async call deriveKeywords

  useEffect(() => {
    projectsToConnection();
  }, []);

  const socket = useSocket();

  const [isRhizome, setIsRhizome] = useState(true);

  const [modalProject, setModalProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function handleProjectClickFromRhizome(projectName) {
    //select project with project from projectsdata
    const project = projectsData.find((project) => project.name === projectName);
    setModalProject(project || null);
    if (project) setShowModal(true);
  }

  function handleProjectClick(project) {
    setModalProject(project);
    setShowModal(true);
  }

  const [currentTarget, setCurrentTarget] = useState(null);
  useEffect(() => {
    setCurrentTarget(null);
  }, [isRhizome]);

  return (
    <>
      <S.Container>
        <Rhizome
          handleCurrentTarget={(t) => setCurrentTarget(t)}
          socket={socket}
          isVisible={isRhizome}
          projectsData={projectsData}
          connectionData={connectionData}
          handleProjectClick={handleProjectClickFromRhizome}
        />
        <Modal showModal={showModal && modalProject != null} project={modalProject} setShowModal={setShowModal} />
      </S.Container>
    </>
  );
}
