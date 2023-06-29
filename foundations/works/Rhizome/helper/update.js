//d3
import * as d3 from "d3";

import { SECONDARY_COLOR } from "../index";

export const DURATION_IN = 350;
export const DURATION_OUT = 350;

function updateCurrentNode({ d, node }) {
  let circle = d3.select(`#circle-${d.id}`);
  let text = node.filter((n) => n.text === d.text).selectAll("text");

  circle.transition().duration(DURATION_IN).attr("fill", "rgba(255, 255, 255, 0.9)");
  text.transition().duration(DURATION_IN).attr("x", ".7rem").attr("y", "1.4rem").attr("font-size", "4rem").attr("fill", "white");
}

function updateTargetAndSourceNodes({ data, d, node, link, targetNodesRef, sourceNodesRef, width, height, currentTargetLength }) {
  let linksDataStartingFromTarget = data.links.filter((l) => l.source === d.text).map((d) => d.target);
  let linksDataEndingAtSource = data.links.filter((l) => l.target === d.text).map((d) => d.source);

  let targetNodes = node.filter((n) => linksDataStartingFromTarget.includes(n.text));
  let sourceNodes = node.filter((n) => linksDataEndingAtSource.includes(n.text));

  //new styling
  targetNodes.selectAll("circle").transition().duration(DURATION_IN).attr("fill", "rgba(255, 255, 255, 0.7)");
  targetNodes.selectAll("text").transition().duration(DURATION_IN).attr("fill", "rgba(255, 255, 255, 0.5)");
  sourceNodes.selectAll("circle").transition().duration(DURATION_IN).attr("fill", "rgba(255, 255, 255, 0.7)");
  sourceNodes.selectAll("text").transition().duration(DURATION_IN).attr("fill", "rgba(255, 255, 255, 0.5)");

  //update ref
  targetNodesRef.current = targetNodes;
  sourceNodesRef.current = sourceNodes;

  //related links
  let links = link.filter((l) => l.source.text === d.text || l.target.text === d.text);
  let sourceLinks = links.filter((l) => l.source.text === d.text);
  let targetLinks = links.filter((l) => l.target.text === d.text);

  const secondaryColor = `hsl(${(currentTargetLength * 30) % 360}, 100%, 80%)`;
  targetLinks
    .transition()
    .duration(DURATION_IN)
    .attr("stroke", secondaryColor)
    .attr("opacity", 1)
    .attr("stroke-width", (d) => (width + height) * 0.001);
  sourceLinks
    .transition()
    .duration(DURATION_IN)
    .attr("stroke", secondaryColor)
    .attr("opacity", 1)
    .attr("stroke-width", (d) => (width + height) * 0.001);
}

//export
export { updateTargetAndSourceNodes, updateCurrentNode };
