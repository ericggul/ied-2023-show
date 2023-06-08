import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

import * as THREE from "three";
//objloader with three-stdlib
import { OBJLoader } from "three-stdlib";
import { Canvas, useLoader, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

//todo: tree model

const OBJ_URL = `https://operating-as-usual.vercel.app/INTERNETINENTAL/images/mulch/tree.obj`;
const SCALE = 1.4;

export default function Intro() {
  return (
    <>
      <S.CanvasContainer>
        <Canvas>
          <pointLight position={[10, 10, 10]} color={"white"} />
          <BackgroundTree />
        </Canvas>
      </S.CanvasContainer>
      <S.Container>
        <S.TopSection>
          <h1>RCA</h1>
          <h1>IED</h1>
        </S.TopSection>
        <S.MidSection>
          <h1>RCA</h1>
          <h1>IED</h1>
        </S.MidSection>
        <S.BottomSection>
          <h1>RCA</h1>
          <h1>IED</h1>
        </S.BottomSection>
      </S.Container>
    </>
  );
}

function BackgroundTree() {
  //objloader wireframe
  const obj = useLoader(OBJLoader, OBJ_URL);
  const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0x005555, wireframe: true, wireframeLinewidth: 0.5, transparent: true, opacity: 0.5 });
  obj.traverse(function (child) {
    if (child.isMesh) {
      child.material = wireframeMaterial;
    }
  });

  //get width of cmaera
  const { viewport } = useThree();

  const scale = useMemo(() => {
    const width = viewport.width;
    const height = viewport.height;
    return 1.4;
  }, [viewport]);

  return <primitive position={[1, 6, 0]} scale={[scale, scale, scale]} rotation={[Math.PI, Math.PI / 2, 0]} object={obj} wireframe={true} />;
}
