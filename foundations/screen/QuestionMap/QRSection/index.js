import * as S from "./styles";
import { QRCodeSVG } from "qrcode.react";
import useResize from "utils/hooks/useResize";

const qrURL = "https://www.rca-ied-2023.co.uk";

export default function QRSection() {
  const [windowWidth, windowHeight] = useResize();
  return (
    <S.RightWrapper animate={false}>
      <S.RightInner>
        <S.ImageWrapper>
          {/* <img src={"/assets/images/term2/wooging/qr.png"} /> */}
          <QRCodeSVG value={qrURL} bgColor="transparent" fgColor="white" size={windowWidth * 0.16} />
        </S.ImageWrapper>

        <S.Footer>
          <h2>Scan the QR code</h2>
          <p>to view projects</p>
        </S.Footer>
      </S.RightInner>
    </S.RightWrapper>
  );
}
