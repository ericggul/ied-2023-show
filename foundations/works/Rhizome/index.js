import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

//resize
import { useResizeDebounce } from "utils/hooks/useResize";

//color-picker
import { HexColorPicker } from "react-colorful";

//d3
import * as d3 from "d3";
import { initCleanUp, initCreateSimulation, initMarkerStyling, initLinkStyling, initNodeStyling } from "./helper/init";
import { updateTargetAndSourceNodes, updateCurrentNode } from "./helper/update";

export const PRIMARY_COLOR = "#8A75F6";
export const SECONDARY_COLOR = "#CBC6E5";
const DURATION = 150;

const getRandom = (a, b) => Math.random() * (b - a) + a;

export default function Rhizome({ isVisible, connectionData }) {
  const [primaryColor, setPrimaryColor] = useState(PRIMARY_COLOR);
  const [secondaryColor, setSecondaryColor] = useState(SECONDARY_COLOR);

  const svgRef = useRef();

  //size
  const [windowWidth, windowHeight] = useResizeDebounce();

  //d3-related states
  const simulationRef = useRef(null);
  const linkRef = useRef(null);
  const nodeRef = useRef(null);
  const [currentTarget, setCurrentTarget] = useState(null);

  useEffect(() => {
    if (windowWidth === 0 || windowHeight === 0) return;
    if (!isVisible) return;

    triggerInit();
    function triggerInit() {
      const types = ["isCycle", "isNotCycle"];
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
      initMarkerStyling({ svg, types, width, height });

      //create simulation
      const simulation = initCreateSimulation({ nodes, links, width, height });
      //link styling
      const link = initLinkStyling({ svg, links, width, height });
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

      ["touchstart", "touchmove", "touchend", "mouseenter", "touch", "mousedown", "mousemove", "mouseup", "click"].forEach((eventType) => {
        node.on(eventType, (ev, d) => {
          const { id, text } = d;
          handleNewKeywordClick(text);
        });
      });
    }
  }, [isVisible, connectionData, windowWidth, windowHeight]);

  ////////////
  ///interaction///
  ////////////

  function handleNewKeywordClick(target) {
    setCurrentTarget(target);
  }

  const targetNodesRef = useRef(null);
  const sourceNodesRef = useRef(null);

  useEffect(() => {
    if (!simulationRef.current) return;
    let node = nodeRef.current;
    let simulation = simulationRef.current;
    let link = linkRef.current;

    //link and main node clean up
    link
      .transition()
      .duration(DURATION)
      .attr("stroke", primaryColor)
      .attr("opacity", "0.42")
      .attr("stroke-width", () => (windowWidth + windowHeight) * 0.0005);
    node.selectAll("circle").transition().duration(DURATION).attr("fill", "rgba(255, 255, 255, 0.05)");
    node.selectAll("text").transition().duration(DURATION).attr("font-size", "1.4rem").attr("fill", "rgba(255, 255, 255, 0.02)");

    if (node && simulation) {
      simulation.alphaTarget(0.1).restart();

      const nodes = node.filter((d) => d.text === currentTarget);
      nodes.each((d) => {
        /////TARGET AND SOURCE NODES //////////////////////////////////
        updateTargetAndSourceNodes({ data: connectionData, d, node, link, targetNodesRef, sourceNodesRef, width: windowWidth, height: windowHeight, secondaryColor });
        ////// CURRENT NODE //////////////////////////////////
        updateCurrentNode({ d, node });
      });
    }
  }, [connectionData, currentTarget, windowWidth, windowHeight, primaryColor, secondaryColor]);

  return (
    <S.Container isVisible={isVisible}>
      <S.ColorPickers>
        <HexColorPicker color={primaryColor} onChange={setPrimaryColor} />
        <HexColorPicker color={secondaryColor} onChange={setSecondaryColor} />
        {primaryColor}
        {secondaryColor}
      </S.ColorPickers>

      <svg ref={svgRef} width={windowWidth} height={windowHeight} viewBox={`0 0 ${windowWidth} ${windowHeight}`} />
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
