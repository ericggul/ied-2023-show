import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo, use } from "react";

import axios from "axios";

import useResize from "utils/hooks/useResize";
import useSocket from "utils/hooks/socket/useSocketMobile";

//foundations
import Header from "foundations/events/Header";
import Footer from "foundations/events/Footer";

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

  return (
    <>
      <S.Container>
        <Header />
        <Footer />
      </S.Container>
    </>
  );
}
