import { Fragment, useState, useEffect, useRef, useMemo } from "react";

import { PROJECTS, CONNECTIONS, BACKGROUND_CONNECTIONS } from "containers/vna/data/constant";

//hooks
import useSocket from "utils/hooks/socket/vna/useSocketMobile";

//foundations
import dynamic from "next/dynamic";

const Rhizome = dynamic(() => import("foundations/vna/mobile/Rhizome"), { ssr: false });
const BackgroundRhizome = dynamic(() => import("foundations/vna/mobile/BackgroundRhizome"), { ssr: false });

export default function Rhizome({ projectsData = PROJECTS, connectionData = CONNECTIONS, backgroundConnectionData = BACKGROUND_CONNECTIONS }) {
  //async call deriveKeywords

  const socket = useSocket();

  return (
    <>
      <BackgroundRhizome connectionData={backgroundConnectionData} />
      <Rhizome handleCurrentTarget={() => {}} socket={socket} isVisible={true} projectsData={projectsData} connectionData={connectionData} handleProjectClick={() => {}} />
    </>
  );
}
