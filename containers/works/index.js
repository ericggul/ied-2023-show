import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

//data
import { connectionToNodeLink, DUMMY_LIST, DATA_NODES_LINKS } from "./data";
import axios from "axios";

//hooks
import useResize from "utils/hooks/useResize";
import useSocket from "utils/hooks/socket/useSocketMobile";

//foundations
import dynamic from "next/dynamic";

const Rhizome = dynamic(() => import("foundations/works/Rhizome"), { ssr: false });
const ListView = dynamic(() => import("foundations/works/ListView"), { ssr: false });
const Modal = dynamic(() => import("foundations/works/Modal"), { ssr: false });

const Header = dynamic(() => import("foundations/works/Header"), { ssr: false });
const Footer = dynamic(() => import("foundations/works/Footer"), { ssr: false });

const roundUpFloat = (float, roundUp) => {
  return Math.round(float * roundUp) / roundUp;
};

export default function Works({ projectsData, connectionData }) {
  const socket = useSocket();

  console.log(connectionData);

  const [isRhizome, setIsRhizome] = useState(true);
  const [showModal, setShowModal] = useState(false);

  function handleProjectClick(project) {
    setShowModal(true);
    console.log(project);
  }

  return (
    <>
      <S.Container>
        <Rhizome isVisible={isRhizome} connectionData={connectionData} handleProjectClick={handleProjectClick} />
        <ListView isVisible={!isRhizome} handleProjectClick={handleProjectClick} />
        <Modal showModal={showModal} setShowModal={setShowModal} />

        <Header isRhizome={isRhizome} setIsRhizome={setIsRhizome} />
        <Footer />
      </S.Container>
    </>
  );
}
