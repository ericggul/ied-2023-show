//react-gl imports
import GLTransition from "./GLTransition";
import { glTransitions } from "./glsls";

import { useState, useMemo, useEffect, useRef, Suspense } from "react";

//usespring
import { useSpring } from "react-spring";
import useResize from "utils/hooks/useResize";

const TRANSPARENT_URL = `https://operating-as-usual.vercel.app/INTERNETINENTAL/images/mulch/transparent.png`;
const TREE_URL = `https://operating-as-usual.vercel.app/INTERNETINENTAL/images/mulch/tree.png`;

export default function Container() {
  const [progress, setProgress] = useState(0);

  useSpring({
    from: { progress: 0 },
    to: { progress: 1 },
    config: { duration: 15000, tension: 170, friction: 26 },
    onChange: ({ value }) => {
      setProgress(value.progress ** 3);
    },
    onRest: () => {},
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GLTransition from={TRANSPARENT_URL} to={TREE_URL} transition={glTransitions[0]} progress={progress} size={windowWidth / 3} />
    </Suspense>
  );
}
