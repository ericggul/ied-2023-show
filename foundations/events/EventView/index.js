import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";
import { BsSearch } from "react-icons/bs";
import { DUMMY_LIST } from "containers/works/data";

const LIST = [
  {
    filter: "30 June",
    display: "30th June, Fri",
  },
  {
    filter: "1 July",
    display: "1st July, Sat",
  },
  {
    filter: "2 July",
    display: "2nd July, Sun",
  },
  {
    filter: "3 July",
    display: "3rd July, Mon",
  },
];

export default function ListView({ socket, eventsData, handleEventClick }) {
  return (
    <S.Container length={DUMMY_LIST.length}>
      <S.Description>
        Among other things, COUNTERPOINT has a packed programme of live performances including generative composition, artificial intelligence, multi-device web art, and film screenings.
      </S.Description>

      <S.ListContainer>
        {LIST.map((listItem, idx) => (
          <SingleDay socket={socket} listItem={listItem} key={idx} eventsData={eventsData} handleEventClick={handleEventClick} />
        ))}
      </S.ListContainer>
    </S.Container>
  );
}

function SingleDay({ socket, listItem, eventsData, handleEventClick }) {
  return (
    <S.SingleDay>
      <S.Date>{listItem.display}</S.Date>
      {eventsData
        .filter((item) => {
          let el = new Date(item.date).toLocaleDateString("en-UK", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          return el.includes(listItem.filter);
        })
        .map((item, idx) => (
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
            <S.Time>
              {new Date(item.date).toLocaleTimeString()}-{new Date(item.endDate).toLocaleTimeString()}
            </S.Time>
          </S.ListItem>
        ))}
    </S.SingleDay>
  );
}
