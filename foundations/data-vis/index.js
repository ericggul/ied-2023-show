import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

//resize
import { useResizeDebounce } from "utils/hooks/useResize";

//d3
import * as d3 from "d3";

//helper
import { initCleanUp, initCreateSimulation, initMarkerStyling, initLinkStyling, initNodeStyling } from "./helper/init";
import { updateHighlightNode, updateTargetAndSourceNodes, updateCurrentNode } from "./helper/update";

const DURATION = 800;

export default function Graph({ showGraph, connectionData }) {
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

    //on click
    node.on("click", (event, d) => {
      const { id, text } = d;
      handleNewKeywordClick(text);
    });
    node.on("mouseenter", (event, d) => {
      const { id, text } = d;
      handleNewKeywordClick(text);
    });
  }, [connectionData, windowWidth, windowHeight]);

  ////////////
  ///interaction///
  ////////////

  const [currentTarget, setCurrentTarget] = useState(null);
  const [keywordsChain, setKeywordsChain] = useState([]);

  function handleNewKeywordClick(target) {
    setCurrentTarget(target);
  }

  const targetNodesRef = useRef(null);
  const sourceNodesRef = useRef(null);

  useEffect(() => {
    let node = nodeRef.current;
    let simulation = simulationRef.current;
    let link = linkRef.current;

    //link and main node clean up
    link.transition().duration(DURATION).attr("stroke", "hsl(180, 100%, 70%)").attr("opacity", "0.27");
    node.selectAll("circle").transition().duration(DURATION).attr("fill", "rgba(255, 255, 255, 0.3)");
    node.selectAll("text").transition().duration(DURATION).attr("font-size", "1.1vw").attr("fill", "rgba(255, 255, 255, 0.1)");

    if (node && simulation) {
      simulation.alphaTarget(0.1).restart();

      const nodes = node.filter((d) => d.text === currentTarget);
      nodes.each((d) => {
        /////TARGET AND SOURCE NODES //////////////////////////////////
        updateTargetAndSourceNodes({ data: connectionData, d, node, link, targetNodesRef, sourceNodesRef });
        ////// CURRENT NODE //////////////////////////////////
        updateCurrentNode({ d, node });
      });
    }
  }, [connectionData, currentTarget, keywordsChain, windowWidth, windowHeight]);

  return (
    <S.Container show={showGraph}>
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
