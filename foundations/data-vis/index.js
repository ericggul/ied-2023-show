import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

//resize
import { useResizeDebounce } from "utils/hooks/useResize";

//d3
import * as d3 from "d3";

//helper
import { initCleanUp, initCreateSimulation, initMarkerStyling, initLinkStyling, initNodeStyling } from "./helper/init";
import { updateTargetAndSourceNodes, updateCurrentNode } from "./helper/update";

const DURATION = 800;

export default function Graph({ showGraph, connectionData, intensity }) {
  const alphaTargetRef = useRef();

  const svgRef = useRef();

  //size
  const [windowWidth, windowHeight] = useResizeDebounce();

  //d3-related states
  const simulationRef = useRef(null);
  const linkRef = useRef(null);
  const nodeRef = useRef(null);
  const [currentTarget, setCurrentTarget] = useState(null);

  ///simulation intensity
  useEffect(() => {
    if (!simulationRef.current) return;
    const width = windowWidth;
    const height = windowHeight;
    simulationRef.current.force("charge", d3.forceManyBody().strength(-((intensity * 8) ** 2) * ((width + height * 1.5) / 1000) ** 2));
    alphaTargetRef.current = 1 - intensity;
  }, [intensity, windowWidth, windowHeight]);

  useEffect(() => {
    //variables
    const types = ["isCycle", "isNotCycle"];
    const color = d3.scaleOrdinal(types, ["hsl(180, 100%, 70%)", "hsl(180, 100%, 70%)"]);
    const width = windowWidth;
    const height = windowHeight;
    const svg = d3.select(svgRef.current);
    const links = connectionData.links.map((d) => Object.create(d));
    const nodes = connectionData.nodes.map((d) => Object.create(d));

    //prevent any zoom effect
    svg.call(d3.zoom().on("zoom", null));

    //cleanup
    initCleanUp({ svg });
    //marker default styling
    initMarkerStyling({ svg, types, color, width, height });

    //create simulation
    const simulation = initCreateSimulation({ nodes, links, width, height });
    //link styling
    const link = initLinkStyling({ svg, links, color, width, height });
    //node styling
    const node = initNodeStyling({ svg, nodes, simulation, width, height, setCurrentTarget });

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
    link.transition().duration(DURATION).attr("stroke", "hsl(180, 100%, 70%)").attr("opacity", "0.37");
    node.selectAll("circle").transition().duration(DURATION).attr("fill", "rgba(255, 255, 255, 0.05)");
    node.selectAll("text").transition().duration(DURATION).attr("font-size", ".8rem").attr("fill", "rgba(255, 255, 255, 0.07)");

    if (node && simulation) {
      simulation.alphaTarget(1 - alphaTargetRef.current || 0.1).restart();

      const nodes = node.filter((d) => d.text === currentTarget);
      nodes.each((d) => {
        /////TARGET AND SOURCE NODES //////////////////////////////////
        updateTargetAndSourceNodes({ data: connectionData, d, node, link, targetNodesRef, sourceNodesRef });
        ////// CURRENT NODE //////////////////////////////////
        updateCurrentNode({ d, node });
      });
    }
  }, [connectionData, currentTarget, windowWidth, windowHeight]);

  return (
    <S.Container show={showGraph}>
      {intensity.toFixed(2)}
      <svg ref={svgRef} width={windowWidth} height={windowHeight} viewBox={`0 0 ${windowWidth} ${windowHeight}`} />
      <S.ListContainer opacity={1 - intensity}>
        {connectionData.nodes.map((el, i) => (
          <div key={i}>{el.text}</div>
        ))}
      </S.ListContainer>
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
