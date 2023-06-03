import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";
import DataVis from "../data-vis";

export default function Intro() {
  const [input, setInput] = useState("");
  const [intensity, setIntensity] = useState(0);
  const storedInputLength = useRef(0);
  const timerRef1 = useRef(null);
  const timerRef2 = useRef(null);

  const [showDataVis, setShowDataVis] = useState(false);

  useEffect(() => {
    if (storedInputLength.current < input.length) {
      setIntensity(Math.min(1, input.length ** 1.3 * 0.01));
      timerRef1.current = setTimeout(() => {
        setShowDataVis(true);
      }, 100);
    }

    storedInputLength.current = input.length;

    return () => {
      if (timerRef1.current) clearTimeout(timerRef1.current);
      if (timerRef2.current) clearTimeout(timerRef2.current);
    };
  }, [input]);

  return (
    <S.Container>
      {/* <h2>RCA</h2>
      <h2>IED</h2>
      <h2>Yr 1</h2>
      <h2>2023</h2>
      <h2>Showcase</h2> */}
      <h1>RCA</h1>
      <h2>IED</h2>
      <h3>Yr 1</h3>
      <h4>2023</h4>
      <h5>Showcase</h5>

      <input placeholder="I'm Feeling Lucky" type="text" value={input} onChange={(e) => setInput(e.target.value)} />

      <DataVis show={showDataVis} filter={input} intensity={intensity} setIntensity={setIntensity} />
    </S.Container>
  );
}
