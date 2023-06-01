import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";
import DataVis from "../data-vis";

export default function Intro() {
  const [input, setInput] = useState("");
  const storedInputLength = useRef(0);
  const timerRef1 = useRef(null);
  const timerRef2 = useRef(null);

  const [showDataVis, setShowDataVis] = useState(false);

  useEffect(() => {
    if (storedInputLength.current < input.length) {
      timerRef1.current = setTimeout(() => {
        setShowDataVis(true);
      }, 100);
      timerRef2.current = setTimeout(() => {
        setShowDataVis(false);
      }, input.length * 100 + 100);
    }

    storedInputLength.current = input.length;

    return () => {
      if (timerRef1.current) clearTimeout(timerRef1.current);
      if (timerRef2.current) clearTimeout(timerRef2.current);
    };
  }, [input]);

  return (
    <S.Container>
      <h1>RCA</h1>
      <h2>IED</h2>
      <h3>Yr 1</h3>
      <h4>2023</h4>
      <h5>Showcase</h5>
      <h6>What are you interested in?</h6>

      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />

      <DataVis show={showDataVis} />
    </S.Container>
  );
}
