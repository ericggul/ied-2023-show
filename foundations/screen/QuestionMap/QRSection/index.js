import * as S from "./styles";
import { QRCodeSVG } from "qrcode.react";
import useResize from "utils/hooks/useResize";

const qrURL = "https://www.rca-ied-2023.co.uk";

export default function QRSection() {
  const [windowWidth, windowHeight] = useResize();
  return (
    <S.RightWrapper animate={false}>
      <S.RightInner>
        <S.TextWrapper>
          <span>Scan the QR</span>
          <br /> to view projects
        </S.TextWrapper>
        <S.ImageWrapper>
          {/* <img src={"/assets/images/term2/wooging/qr.png"} /> */}
          <QRCodeSVG value={qrURL} bgColor="transparent" fgColor="white" size={windowWidth * 0.16} />
        </S.ImageWrapper>
        <S.Expl>Scan your phone</S.Expl>

        <S.Footer>
          <p>RCA IED 2023</p>
          <h2>Counterpoint</h2>
        </S.Footer>
      </S.RightInner>
    </S.RightWrapper>
  );
}
