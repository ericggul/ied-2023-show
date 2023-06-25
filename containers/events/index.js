import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo, use } from "react";

import axios from "axios";

import useResize from "utils/hooks/useResize";
import useSocket from "utils/hooks/socket/useSocketMobile";

import dynamic from "next/dynamic";

//foundations
import Header from "foundations/events/Header";
import Footer from "foundations/events/Footer";
import EventView from "foundations/events/EventView";
const Modal = dynamic(() => import("foundations/events/Modal"), { ssr: false });

export default function Events() {
  const socket = useSocket();

  const [events, setEvents] = useState([]);
  useEffect(() => {
    getEvents();
  }, []);

  async function getEvents() {
    const res = await axios.get("/api/prisma/retrive-all-events");
    console.log(res.data);
    setEvents(res.data);
  }

  const [modelEvent, setModalEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function handleEventClick(event) {
    setModalEvent(event);
    setShowModal(true);
  }

  return (
    <>
      <S.Container>
        <Header />
        <Footer />
        <EventView socket={socket} eventsData={events} handleEventClick={handleEventClick} />
        <Modal showModal={showModal && modelEvent != null} event={modelEvent} setShowModal={setShowModal} />
      </S.Container>
    </>
  );
}
