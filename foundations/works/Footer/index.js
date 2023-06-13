import * as S from "./styles";

export default function HeaderEl({ isRhizome, setIsRhizome }) {
  return (
    <S.Container>
      <S.Image>
        <img src="/assets/RCALogo.png" />
      </S.Image>
      <S.Texts>
        <h1>RCA IED</h1>
        <h1>COUNTERPOINT</h1>
      </S.Texts>
    </S.Container>
  );
}
