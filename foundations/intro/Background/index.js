import * as S from "./styles";

export default function Background({ windowWidth }) {
  return (
    <S.BackgroundImage show={true}>
      <S.Image src="/assets/Horses.png" alt="main-image" />
    </S.BackgroundImage>
  );
}
