import { Fragment, useState, useEffect, useRef, useMemo } from "react";

//hooks
import useSocket from "utils/hooks/socket/vna/useSocketMobile";

//foundations
import dynamic from "next/dynamic";

const Rhizome = dynamic(() => import("foundations/vna/screen/Idle/Rhizome"), { ssr: false });

export default function Idle() {
  return (
    <>
      <Rhizome />
    </>
  );
}
