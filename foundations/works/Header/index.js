import * as S from "./styles";

export default function HeaderEl({ isRhizome, setIsRhizome }) {
  return (
    <S.Container>
      <S.Upper>
        <S.Item
          onClick={() => setIsRhizome(true)}
          style={{
            opacity: isRhizome ? 1 : 0.4,
          }}
        >
          RHIZOME
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
          LIST
        </S.Item>
      </S.Upper>
    </S.Container>
  );
}
