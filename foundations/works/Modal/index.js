import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

export default function Modal({ showModal, setShowModal }) {
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
        }}
      ></S.ModalContainer>
    </S.Container>
  );
}
