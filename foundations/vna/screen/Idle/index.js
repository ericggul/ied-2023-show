import { Fragment, useState, useEffect, useRef, useMemo } from "react";

//hooks
import useSocket from "utils/hooks/socket/vna/useSocketMobile";

//foundations
import dynamic from "next/dynamic";

const Video = dynamic(() => import("foundations/vna/screen/Idle/Video"), { ssr: false });
const Rhizome = dynamic(() => import("foundations/vna/screen/Idle/Rhizome"), { ssr: false });

export default function Idle() {
  const [showVideo, setShowVideo] = useState(false);
  //cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setShowVideo((v) => !v);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {showVideo && <Video />}
      {!showVideo && <Rhizome />}
    </>
  );
}
