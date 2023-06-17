import * as S from "./styles";

export default function QRSection() {
  return (
    <S.RightWrapper animate={true}>
      <S.RightInner>
        <S.TextWrapper>
          <span>RCA IED 2023</span>
          <br /> with your fingers
        </S.TextWrapper>
        <S.ImageWrapper>
          <img src={"/assets/images/term2/wooging/qr.png"} />
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
