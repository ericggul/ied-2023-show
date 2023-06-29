import * as S from "./styles";
import { useRouter } from "next/router";

export default function HeaderEl({ currentTarget }) {
  const router = useRouter();
  return (
    <S.Container>
      <S.Center show={currentTarget != null}>{currentTarget}</S.Center>
      <S.Texts
        show={currentTarget == null}
        onClick={() => {
          router.push("/");
        }}
      >
        <h1
          style={{
            opacity: "0.5",
          }}
        >
          go back to
        </h1>
        <h1
          style={{
            marginTop: "0.2rem",
          }}
        >
          <b>COUNTERPOINT</b>
        </h1>
      </S.Texts>
    </S.Container>
  );
}
