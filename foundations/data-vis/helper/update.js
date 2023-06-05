//d3
import * as d3 from "d3";

import { PRIMARY_COLOR } from "../index";

export const DURATION_IN = 150;
export const DURATION_OUT = 150;

function updateCurrentNode({ d, node }) {
  let circle = d3.select(`#circle-${d.id}`);
  let text = node.filter((n) => n.text === d.text).selectAll("text");

  circle.transition().duration(DURATION_IN).attr("fill", "white");
  text.transition().duration(DURATION_IN).attr("x", "1rem").attr("y", "1rem").attr("font-size", "3.4rem").attr("fill", "white");
}

function updateTargetAndSourceNodes({ data, d, node, link, targetNodesRef, sourceNodesRef }) {
  let linksDataStartingFromTarget = data.links.filter((l) => l.source === d.text).map((d) => d.target);
  let linksDataEndingAtSource = data.links.filter((l) => l.target === d.text).map((d) => d.source);

  let targetNodes = node.filter((n) => linksDataStartingFromTarget.includes(n.text));
  let sourceNodes = node.filter((n) => linksDataEndingAtSource.includes(n.text));

  //targetnodes & sourcenodes clean up
  if (targetNodesRef.current && sourceNodesRef.current) {
    targetNodesRef.current.selectAll("circle").transition().duration(DURATION_OUT).attr("fill", "rgba(255, 255, 255, 0.3)");
    targetNodesRef.current.selectAll("text").transition().duration(DURATION_OUT).attr("fill", "rgba(255, 255, 255, 0.07)");
    sourceNodesRef.current.selectAll("circle").transition().duration(DURATION_OUT).attr("fill", "rgba(255, 255, 255, 0.3)");
    sourceNodesRef.current.selectAll("text").transition().duration(DURATION_OUT).attr("fill", "rgba(255, 255, 255, 0.07)");
  }

  //new styling
  targetNodes.selectAll("circle").transition().duration(DURATION_IN).attr("fill", PRIMARY_COLOR);
  targetNodes.selectAll("text").transition().duration(DURATION_IN).attr("fill", "rgba(255, 255, 255, 0.7)");
  sourceNodes.selectAll("circle").transition().duration(DURATION_IN).attr("fill", "hsl(0, 100%, 70%)");
  sourceNodes.selectAll("text").transition().duration(DURATION_IN).attr("fill", "rgba(255, 255, 255, 0.7)");

  //update ref
  targetNodesRef.current = targetNodes;
  sourceNodesRef.current = sourceNodes;

  //related links
  let links = link.filter((l) => l.source.text === d.text || l.target.text === d.text);
  let sourceLinks = links.filter((l) => l.source.text === d.text);
  let targetLinks = links.filter((l) => l.target.text === d.text);

  targetLinks.transition().duration(DURATION_IN).attr("stroke", "hsl(0, 100%, 70%)").attr("opacity", 1);
  sourceLinks.transition().duration(DURATION_IN).attr("opacity", 1);
}

//export
export { updateTargetAndSourceNodes, updateCurrentNode };
