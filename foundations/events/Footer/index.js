import * as S from "./styles";
import { useRouter } from "next/router";

export default function HeaderEl({ isRhizome, setIsRhizome }) {
  const router = useRouter();
  return (
    <S.Container>
      <S.Image
        onClick={() => {
          //rca website, blank
          window.open("https://www.rca.ac.uk/", "_blank");
        }}
      >
        <img src="/assets/RCALogo.png" />
      </S.Image>
      <S.Texts
        onClick={() => {
          router.push("/");
        }}
      >
        <h1>RCA IED</h1>
        <h1>COUNTERPOINT</h1>
      </S.Texts>
    </S.Container>
  );
}
