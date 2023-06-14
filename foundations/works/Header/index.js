import * as S from "./styles";

export default function HeaderEl({ isRhizome, setIsRhizome }) {
  return (
    <S.Container>
      <S.Upper>
        {/* <S.UpperLeft>
          <img src={"/assets/arrow-left.svg"} />
          EVENTS
        </S.UpperLeft> */}

        <S.Item
          onClick={() => setIsRhizome(true)}
          style={{
            opacity: isRhizome ? 1 : 0.4,
          }}
        >
          rhizome
        </S.Item>
        <S.UpperCenter>
          <S.CenterText>EVENTS</S.CenterText>
          WORKS
        </S.UpperCenter>

        <S.Item
          onClick={() => setIsRhizome(false)}
          style={{
            opacity: isRhizome ? 0.4 : 1,
          }}
        >
          list view
        </S.Item>
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
