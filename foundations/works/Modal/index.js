import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

import { RxCross1 } from "react-icons/rx";

export default function Modal({ showModal, setShowModal }) {
  function handleClick(e) {
    e.stopPropagation();
    //send to google.com
    window.open("https://www.rca.ac.uk/students/jeanyoon-choi/", "_blank");
  }
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
        <S.ModalCancel
          onClick={(e) => {
            e.stopPropagation();
            setShowModal(false);
          }}
        >
          <RxCross1 />
        </S.ModalCancel>
        <S.Image>
          <img src="/assets/sample/SampleProject.png" alt="sample project" />
        </S.Image>
        <S.Lower>
          <S.Text>
            <h1>MBA (Medium-Based Approach)</h1>
            <h2>Jeanyoon Choi</h2>
          </S.Text>
          <S.Bottom>
            <S.Description>
              <S.Tag>#Overcontrol</S.Tag>
              <S.Tag>#Speculative</S.Tag>
              <S.Tag>#Interaction</S.Tag>
            </S.Description>
            <S.Link onClick={handleClick}>
              Learn More at RCA 2023
              <img src={"/assets/arrow-white.svg"} />
            </S.Link>
          </S.Bottom>
        </S.Lower>
      </S.ModalContainer>
    </S.Container>
  );
}
