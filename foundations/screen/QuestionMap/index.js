import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

//resize
import { useResizeDebounce } from "utils/hooks/useResize";

//d3
import * as d3 from "d3";

//helper
import { DATA_NODES_LINKS } from "./data-2";
import { initCleanUp, initCreateSimulation, initMarkerStyling, initLinkStyling, initNodeStyling } from "./helper/init";
import { updateTargetAndSourceNodes, updateKeywordChain, updateCurrentNode } from "./helper/update";

const getRandom = (a, b) => Math.random() * (b - a) + a;
const getRandomFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];

export default function ProjectorTop({ connectionData = DATA_NODES_LINKS }) {
  ////////////
  ///d3///
  ////////////

  const [currentTarget, setCurrentTarget] = useState("Double Thinking");
  const svgRef = useRef();

  //size
  const [windowWidth, windowHeight] = useResizeDebounce();

  //d3-related states
  const simulationRef = useRef(null);
  const linkRef = useRef(null);
  const nodeRef = useRef(null);
  const [reset, setReset] = useState(true);

  useEffect(() => {
    if (!reset) return;
    //variables
    init();
  }, [connectionData, windowWidth, windowHeight, reset]);

  function init() {
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
  }
  ////////////
  ///interaction///
  ////////////
  const [keywordsChain, setKeywordsChain] = useState([]);
  const [question, setQuestion] = useState("");

  useEffect(() => {
    //current target
    setQuestion(connectionData.nodes.filter((n) => n.text === currentTarget)[0].longDescription || "");
    let connected = connectionData.links.filter((l) => l.source === currentTarget);
    let connectedNodes = [...new Set(connected.map((l) => l.target))];
    let target = getRandomFromArray(connectedNodes);

    const timeout = setTimeout(() => {
      setReset(false);
      setCurrentTarget(target);
      setKeywordsChain((keywordsChain) => [...keywordsChain, currentTarget]);
    }, 1800);
    return () => clearTimeout(timeout);
  }, [currentTarget]);

  useEffect(() => {
    if (keywordsChain.length > 15) {
      //reset
      setKeywordsChain([]);
      setQuestion("");
      setCurrentTarget(getRandomFromArray(connectionData.nodes.map((n) => n.text)));
      setReset(true);
    }
  }, [keywordsChain]);

  function handleNewInteraction(data) {
    setCurrentTarget(data.target);
    setKeywordsChain((keywordsChain) => (data.keyword in keywordsChain ? keywordsChain : [...keywordsChain, data.keyword]));
  }

  const targetNodesRef = useRef(null);
  const sourceNodesRef = useRef(null);
  const targetLinksRef = useRef(null);
  const sourceLinksRef = useRef(null);

  console.log(keywordsChain);

  useEffect(() => {
    let node = nodeRef.current;
    let simulation = simulationRef.current;
    let link = linkRef.current;
    let unitSize = windowWidth * 0.001;

    if (node && simulation) {
      simulation.alphaTarget(0.1).restart();

      const nodes = node.filter((d) => d.text === currentTarget);
      nodes.each((d) => {
        d.x = 0;
        d.y = 0;
        /////TARGET AND SOURCE NODES //////////////////////////////////
        updateTargetAndSourceNodes({ data: connectionData, d, node, link, targetNodesRef, sourceNodesRef, targetLinksRef, sourceLinksRef });

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
      <S.Question>{question}</S.Question>
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
