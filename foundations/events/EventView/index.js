import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";
import { BsSearch } from "react-icons/bs";
import { DUMMY_LIST } from "containers/works/data";

export default function ListView({ socket, eventsData, handleEventClick }) {
  return (
    <S.Container length={DUMMY_LIST.length}>
      <S.Description>
        The range of works present an opportunity to <i>immerse</i> yourself in questions about the current <i>status quo</i> of our society, cultural context, and the very notion of{" "}
        <i>creativity and interdisciplinary.</i>
      </S.Description>

      <S.ListContainer>
        {eventsData.map((item, idx) => (
          <S.ListItem
            key={idx}
            idx={idx}
            onClick={() => {
              if (socket && socket.current) socket.current.emit("event-click", item.name);
              handleEventClick(item);
            }}
          >
            <S.ListItemTitle>{item.name}</S.ListItemTitle>
            <S.ListItemContent>{item.studentName}</S.ListItemContent>
          </S.ListItem>
        ))}
      </S.ListContainer>
    </S.Container>
  );
}
