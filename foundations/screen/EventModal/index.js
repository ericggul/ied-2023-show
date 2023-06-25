import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

const EVENT_INFO = {
  id: 1,
  name: "Building Third Runways: Challenging Equality (‘=’)",
  studentName: "Jeanyoon Choi",
  date: "2023-06-30T15:30:00.000Z",
  endDate: "2023-06-30T15:50:00.000Z",
  description: "Co-Creating an Imaginary Land Installation of building runways around the world’s airports.",
  imgURL: "events/Hypertext_Jump.png",
  slug: "jeanyoon-choi",
};
const IMG_DB_URL = "https://ied-2023-show.s3.eu-west-1.amazonaws.com/";

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
      const countDownDate = new Date(targetEvent.date).getTime();
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
          <h1>{targetEvent.name}</h1>
        </S.Header>
        <S.ImageContainer>
          <img src={IMG_DB_URL + targetEvent.imgURL} alt="event image" />
        </S.ImageContainer>
        <S.TimeContainer>
          <S.Box>
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
          <p>Student Name: {targetEvent.studentName}</p>
          <p>Date: {new Date(targetEvent.date).toLocaleString()}</p>
          <p>Duration: {new Date(targetEvent.endDate).getMinutes() - new Date(targetEvent.date).getMinutes()} Mins</p>
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
