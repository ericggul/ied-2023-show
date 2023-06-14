import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

const EVENT_INFO = {
  title: "Dummy Event",
  name: "Jeanyoon Choi",
  date: "June 14",
  time: "18:35",
  location: "Kensington",
};

const formatNumber = (n, digit = 2) => ("0".repeat(digit) + Math.floor(n)).slice(-digit);

export default function Modal({ showModal, setShowModal }) {
  const [targetEvent, setTargetEvent] = useState(EVENT_INFO);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const countDownDate = new Date(`${targetEvent.date} ${targetEvent.time} 2023`).getTime();
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60)) % 60;
      const seconds = Math.floor((distance % (1000 * 60 * 60 * 24)) / 1000) % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  console.log(timeLeft);

  return (
    <S.Container
      showModal={showModal}
      onClick={(e) => {
        e.stopPropagation();
        setShowModal(false);
      }}
    >
      <S.ModalContainer
        showModal={showModal}
        onClick={(e) => {
          e.stopPropagation();
          setShowModal(false);
        }}
      >
        <S.Header>
          <h1>{targetEvent.title}</h1>
        </S.Header>
        <S.TimeContainer>
          <S.Box>
            {/* <span
              style={{
                marginRight: "3vw",
              }}
            >
              Starting in
            </span> */}
            {timeLeft.days}
            <span>days</span>
          </S.Box>
          {/* <DotSets /> */}
          <S.Box>{formatNumber(timeLeft.hours)}</S.Box>
          <DotSets />
          <S.Box>{formatNumber(timeLeft.minutes)}</S.Box>
          <DotSets />
          <S.Box>
            {formatNumber(timeLeft.seconds)}
            <span>Left</span>
          </S.Box>
        </S.TimeContainer>

        <S.InfoContainer>
          <p>Student Name: {targetEvent.name}</p>
          <p>Date: {targetEvent.date}</p>
          <p>Time: {targetEvent.time}</p>
        </S.InfoContainer>
      </S.ModalContainer>
    </S.Container>
  );
}

function DotSets() {
  return (
    <S.Dots>
      <S.Dot />
      <S.Dot />
    </S.Dots>
  );
}
