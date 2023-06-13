import * as S from "./styles";
import { useState, useEffect } from "react";
import { useSpring } from "react-spring";
import * as easings from "d3-ease";

export default function MainVisual({ show, scrollPos }) {
  ///main visual identity
  const [mainVisualIntensity, setMainVisualIntensity] = useState(0);

  useSpring({
    from: { progress: 0 },
    to: { progress: show ? 1 : 0 },
    config: { duration: 2000, easing: easings.easeCubicIn },
    onChange: ({ value }) => {
      console.log(value);
      setMainVisualIntensity(value.progress);
    },
    onRest: () => {},
  });

  useEffect(() => {
    setMainVisualIntensity(Math.max(1 - scrollPos, 0));
  }, [scrollPos]);

  return (
    <S.MainVisual
      style={{
        opacity: mainVisualIntensity,
      }}
    >
      <S.Image
        src="/assets/Counterpoint.png"
        style={{
          transform: `scaleY(${(mainVisualIntensity * 1) ** 4})`,
        }}
      />

      <S.Info
        style={{
          opacity: Math.max(0.9 - (1 - Math.min(mainVisualIntensity + 0.1, 1)) * 5, 0),
        }}
      >
        <div>
          <h1>RCA IED MA1</h1>
          <h1>Public Event</h1>
        </div>
        <div>
          <h1>Information Experience</h1>
          <h1>Design</h1>
        </div>
      </S.Info>
      <S.Info
        style={{
          opacity: Math.max(0.9 - (1 - Math.min(mainVisualIntensity + 0.1, 1)) * 2, 0),
          alignItems: "flex-end",
        }}
      >
        <div>
          <h1>30th June</h1>
          <h1>
            <i>to</i> 3rd July
          </h1>
          <h1>12pm - 6pm</h1>
        </div>
        <div>
          <h1>RCA Kensington</h1>
          <h1>First Floor</h1>
          <h1>
            <i>Enter from</i>
          </h1>
          <h1>
            <i>Royal Albert Hall</i>
          </h1>
        </div>
      </S.Info>
    </S.MainVisual>
  );
}
