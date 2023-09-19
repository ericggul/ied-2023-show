import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";
import useResize from "utils/hooks/useResize";

import { QRCodeSVG } from "qrcode.react";

const qrURL = "https://www.rca-ied-2023.co.uk/vna/mobile";

export default function UI({ uiMode }) {
  const [windowWidth, windowHeight] = useResize();

  return (
    <S.Container>
      <S.TopLeft>
        <p>RCA INFORMATION</p>
        <p>EXPERIENCE DESIGN</p>
      </S.TopLeft>
      {uiMode === 0 && (
        <S.TopRight>
          <S.Logo>
            <img src="/assets/vna/logo/vna.svg" />
          </S.Logo>
          <S.Logo>
            <img src="/assets/vna/logo/rca.png" />
          </S.Logo>
        </S.TopRight>
      )}

      {uiMode === 1 && (
        <S.BottomRight>
          <S.Logo>
            <img src="/assets/vna/logo/vna.svg" />
          </S.Logo>
          <S.Logo>
            <img src="/assets/vna/logo/rca.png" />
          </S.Logo>
        </S.BottomRight>
      )}
      {uiMode === 1 && <S.TopRight style={{ opacity: "0.75", marginRight: "1.9vw" }}>VIBRANT MATTERS</S.TopRight>}
      <S.BottomLeft>
        {/* <p style={{ opacity: "0.75" }}>LONDON</p>
        <p style={{ opacity: "0.75" }}>DESIGN FESTIVAL</p> */}
        <br />

        <p>DIGITAL DESIGN</p>
        <p>WEEKEND 2023</p>
      </S.BottomLeft>
      {uiMode === 0 && (
        <S.BottomRight>
          <div
            style={{
              marginRight: "1.5vw",
            }}
          >
            <p>SCAN FOR</p>
            <p>INTERACTIVE OVERVIEW</p>
          </div>

          <S.QRWrapper>
            <QRCodeSVG value={qrURL} bgColor="transparent" fgColor="white" size={windowWidth * 0.08} />
          </S.QRWrapper>
        </S.BottomRight>
      )}
      {uiMode === 1 && <S.BottomRight></S.BottomRight>}
    </S.Container>
  );
}
