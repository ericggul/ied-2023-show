import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";
import { BsSearch } from "react-icons/bs";
import { DUMMY_LIST } from "containers/works/data";

export default function ListView({ socket, projectsData, isVisible, handleProjectClick }) {
  const [filterWord, setFilterWord] = useState("");
  const [filteredList, setFilteredList] = useState(projectsData);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (filterWord === "") {
      setFilteredList(projectsData);
    } else {
      const filtered = projectsData.filter((item) => item.projectName.toLowerCase().includes(filterWord.toLowerCase()) || item.artistName.toLowerCase().includes(filterWord.toLowerCase()));
      setFilteredList(filtered);
    }
  }, [filterWord, projectsData]);

  return (
    <S.Container isVisible={isVisible} length={DUMMY_LIST.length}>
      <S.Description>
        The range of works present an opportunity to <i>immerse</i> yourself in questions about the current <i>status quo</i> of our society, cultural context, and the very notion of{" "}
        <i>creativity and interdisciplinary.</i>
      </S.Description>

      {isVisible && (
        <S.SearchContainer>
          <S.P goUp={filterWord !== "" || focused}>
            <span>
              <BsSearch />
            </span>
            {filterWord === "" ? "Search for Projects or Students" : `${filteredList.length} results found`}
          </S.P>
          <S.SearchInput onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} type="text" placeholder="" value={filterWord} onChange={(e) => setFilterWord(e.target.value)} />
        </S.SearchContainer>
      )}

      <S.ListContainer>
        {isVisible &&
          filteredList.map((item, idx) => (
            <S.ListItem key={idx} idx={idx} onClick={() => handleProjectClick(item)}>
              <S.ListItemTitle>{item.name}</S.ListItemTitle>
              <S.ListItemContent>{item.studentName}</S.ListItemContent>
            </S.ListItem>
          ))}
        {isVisible && filteredList.length === 0 && <S.ListItem>No results found</S.ListItem>}
      </S.ListContainer>
    </S.Container>
  );
}
