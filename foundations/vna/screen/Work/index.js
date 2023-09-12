import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";
import useResize from "utils/hooks/useResize";
import Image from "next/image";

import { PROJECTS } from "containers/vna/data/constant";

export default function Work({ currKeyword }) {
  const [windowWidth, windowHeight] = useResize();

  const [currProjectIdx, setCurrProjectIdx] = useState(0);

  return (
    <>
      <S.Background>
        <Image src={PROJECTS[currProjectIdx].imgURL} alt={PROJECTS[currProjectIdx].name} width={windowWidth * 1.1} height={(windowWidth * 1.1 * 9) / 16} />
      </S.Background>
      <S.Container>
        <S.Left></S.Left>
        <S.Center>
          <Image src={PROJECTS[currProjectIdx].imgURL} alt={PROJECTS[currProjectIdx].name} width={windowWidth * 0.6} height={windowWidth * 0.3375} />
        </S.Center>
        <S.Right></S.Right>

        <S.Bottom>{PROJECTS[currProjectIdx].name}</S.Bottom>
      </S.Container>
    </>
  );
}
