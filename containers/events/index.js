import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

import useResize from "utils/hooks/useResize";
import useSocket from "utils/hooks/socket/useSocketMobile";

//foundations
import Header from "foundations/events/Header";
import Footer from "foundations/events/Footer";

export default function Events() {
  const socket = useSocket();

  return (
    <>
      <S.Container>
        <Header />
        <Footer />
      </S.Container>
    </>
  );
}
