import * as S from "./styles";

export default function Background({ show, windowWidth, scrollPos, handleBackgroundLoad }) {
  return (
    <S.BackgroundImage show={show}>
      <S.Image
        style={{
          transform: `scale(${Math.max(windowWidth / 1200, 1) * (1 + scrollPos * 0.1)}) rotate(${scrollPos * 9}deg)`,
        }}
        src="/assets/Horses.png"
        alt="main-image"
        onLoad={handleBackgroundLoad}
      />
    </S.BackgroundImage>
  );
}
