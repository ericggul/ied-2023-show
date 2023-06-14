import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

//resize
import { useResizeDebounce } from "utils/hooks/useResize";

//d3
import * as d3 from "d3";

//helper
import { initCleanUp, initCreateSimulation, initMarkerStyling, initLinkStyling, initNodeStyling } from "./helper/init";
import { updateTargetAndSourceNodes, updateKeywordChain, updateCurrentNode } from "./helper/update";

export default function ProjectorTop({ connectionData }) {
  ////////////
  ///d3///
  ////////////

  const [currentTarget, setCurrentTarget] = useState("");
  const svgRef = useRef();

  //size
  const [windowWidth, windowHeight] = useResizeDebounce();

  //d3-related states
  const simulationRef = useRef(null);
  const linkRef = useRef(null);
  const nodeRef = useRef(null);

  useEffect(() => {
    //variables
    const types = ["isCycle", "isNotCycle"];
    const color = d3.scaleOrdinal(types, ["hsl(180, 100%, 70%)", "hsl(180, 100%, 70%)"]);
    const width = windowWidth;
    const height = windowHeight;
    const svg = d3.select(svgRef.current);
    const links = connectionData.links.map((d) => Object.create(d));
    const nodes = connectionData.nodes.map((d) => Object.create(d));

    //cleanup
    initCleanUp({ svg });
    //marker default styling
    initMarkerStyling({ svg, types, color, width, height });

    //create simulation
    const simulation = initCreateSimulation({ nodes, links, width, height });
    //link styling
    const link = initLinkStyling({ svg, links, color, width, height });
    //node styling
    const node = initNodeStyling({ svg, nodes, simulation, width, height });

    simulationRef.current = simulation;
    linkRef.current = link;
    nodeRef.current = node;

    //tick simulation
    simulation.on("tick", () => {
      link.attr("d", linkArc);
      node.attr("transform", (d) => `translate(${d.x},${d.y})`);
    });
  }, [connectionData, windowWidth, windowHeight]);

  ////////////
  ///interaction///
  ////////////

  // const socket = useSocketProjector({
  //   projectorMode: true,
  //   handleNewMobileJoin,
  //   handleNewMobileInteraction,
  // });

  const [keywordsChain, setKeywordsChain] = useState([]);

  function handleNewMobileInteraction(data) {
    setCurrentTarget(data.target);
    setKeywordsChain((keywordsChain) => (data.keyword in keywordsChain ? keywordsChain : [...keywordsChain, data.keyword]));
  }

  const targetNodesRef = useRef(null);
  const sourceNodesRef = useRef(null);

  useEffect(() => {
    let node = nodeRef.current;
    let simulation = simulationRef.current;
    let link = linkRef.current;
    let unitSize = windowWidth * 0.001;

    if (node && simulation) {
      simulation.alphaTarget(0.1).restart();

      const nodes = node.filter((d) => d.text === currentTarget);
      nodes.each((d) => {
        //position
        d.x = 0;
        d.y = 0;

        /////TARGET AND SOURCE NODES //////////////////////////////////
        updateTargetAndSourceNodes({ data: connectionData, d, node, link, targetNodesRef, sourceNodesRef });

        ///KEYWORD CHAIN MANAGEMENT////////////////////////////////
        updateKeywordChain({ d, keywordsChain, node, link, unitSize });

        //get current r
        updateCurrentNode({ d, node });
      });
    }
  }, [connectionData, currentTarget, keywordsChain, windowWidth, windowHeight]);

  return (
    <S.Container>
      <svg ref={svgRef} />
    </S.Container>
  );
}

///helper functions

function linkArc(d) {
  const r = Math.hypot(d.target.x - d.source.x, d.target.y - d.source.y);
  return `
       M${d.source.x},${d.source.y}
       A${r},${r} 0 0,1 ${d.target.x},${d.target.y}
     `;
}
