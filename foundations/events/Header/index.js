import * as S from "./styles";

export default function HeaderEl() {
  return (
    <S.Container>
      <S.Upper>
        <S.UpperCenter>EVENTS</S.UpperCenter>
        <S.UpperRight>
          WORKS
          <img src={"/assets/arrow-right.svg"} />
        </S.UpperRight>
      </S.Upper>
      {/* <S.List>
        <S.Item
          onClick={() => setIsRhizome(true)}
          style={{
            opacity: isRhizome ? 1 : 0.4,
          }}
        >
          rhizome
        </S.Item>
        <S.Center></S.Center>
        <S.Item
          onClick={() => setIsRhizome(false)}
          style={{
            opacity: isRhizome ? 0.4 : 1,
          }}
        >
          list view
        </S.Item>
      </S.List> */}
    </S.Container>
  );
}
