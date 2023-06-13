import * as S from "./styles";

export default function HeaderEl({ isRhizome, setIsRhizome }) {
  return (
    <S.Container>
      <S.Upper>WORKS</S.Upper>
      <S.List>
        <S.Item
          onClick={() => setIsRhizome(true)}
          style={{
            // marginRight: "0.3rem",
            opacity: isRhizome ? 1 : 0.3,
          }}
        >
          rhizome
        </S.Item>
        <S.Center></S.Center>
        <S.Item
          onClick={() => setIsRhizome(false)}
          style={{
            // marginLeft: "0.3rem",
            opacity: isRhizome ? 0.3 : 1,
          }}
        >
          list view
        </S.Item>
      </S.List>
    </S.Container>
  );
}
