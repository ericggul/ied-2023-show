import * as S from "./styles";

export default function HeaderEl() {
  return (
    <S.Container>
      <S.Upper>
        <S.Image src="/assets/Counterpoint.png" />
      </S.Upper>
      <S.List>
        <S.Item>rhizome</S.Item>
        <S.Center>WORKS</S.Center>
        <S.Item>list</S.Item>
      </S.List>
    </S.Container>
  );
}
