import * as S from "./styles";
import dynamic from "next/dynamic";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

import useSocket from "utils/hooks/socket/useSocketScreen";
import * as Tone from "tone";

//foundations
const QuestionMap = dynamic(() => import("foundations/screen/QuestionMap"), { ssr: false });
const ProjectModal = dynamic(() => import("foundations/screen/ProjectModal"), { ssr: false });
const EventModal = dynamic(() => import("foundations/screen/EventModal"), { ssr: false });

export default function Screen({ projects, events }) {
  const [showModal, setShowModal] = useState(false);
  const [modalProject, setModalProject] = useState(null);
  const [modalEvent, setModalEvent] = useState(null);
  const [clickedIteration, setClickedIteration] = useState(-1);

  const socket = useSocket({
    handleNewProjectClick,
    handleNewEventClick,
  });

  function handleNewProjectClick(data) {
    try {
      setClickedIteration((c) => c + 1);
      const project = projects.find((project) => project.name === data);
      setModalProject(project || null);
      if (project) setShowModal(true);
    } catch (e) {
      console.log(e);
    }
  }

  function handleNewEventClick(data) {
    try {
      setClickedIteration((c) => c + 1);
      const event = events.find((ev) => ev.name === data);
      setModalEvent(event || null);
      if (event) setShowModal(true);
    } catch (e) {
      console.log(e);
    }
  }

  const synth = useMemo(() => new Tone.MonoSynth().toDestination(), []);
  useEffect(() => {
    clickedIteration > 0 && handleMelody(synth, clickedIteration);
  }, [synth, clickedIteration]);

  useEffect(() => {
    if (modalProject || modalEvent) {
      const timeout = setTimeout(() => {
        setClickedIteration(0);
        setShowModal(false);
        setModalProject(null);
        setModalEvent(null);

        window.location.reload();
      }, 30 * 1000);
      return () => clearTimeout(timeout);
    }
  }, [modalProject, modalEvent]);

  return (
    <>
      <S.Container>
        <QuestionMap toneOn={!showModal} />
        {showModal && modalEvent && <EventModal currentEvent={modalEvent} showModal={showModal && modalEvent !== null} setShowModal={setShowModal} />}
        <ProjectModal currentProject={modalProject} showModal={showModal && modalProject != null} setShowModal={setShowModal} />
      </S.Container>
    </>
  );
}

const CODES = [
  ["G3", "D4", "E4", "C4"],
  ["C4", "D4", "G4", "E4"],
  ["E4", "G4", "E5", "C5"],
  ["C5", "D5", "G5", "E5"],
  ["C5", "D5", "A4", "G4"],
  ["G4", "A4", "F4", "D4"],
  ["D4", "F4", "C4", "B3"],
  ["C4", "D4", "A3", "G3"],
];

function handleMelody(snyth, iteration) {
  try {
    const code = CODES[iteration % CODES.length];

    const now = Tone.now();
    snyth.triggerAttackRelease(code[0], "32n", now);
    snyth.triggerAttackRelease(code[1], "32n", now + 0.14);
    snyth.triggerAttackRelease(code[2], "32n", now + 0.28);
    snyth.triggerAttackRelease(code[3], "16n", now + 0.42);
  } catch (e) {
    console.log(e);
  }
}
