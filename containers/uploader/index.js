import * as S from "./styles";
import dynamic from "next/dynamic";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

import axios from "axios";

const PROJECTS = [
  {
    name: "≠",
    studentName: "Jeanyoon Choi",
    abstract: "Rhizomatic Multi-Device Web Artwork radically challenging the notion of equality ('=').",
    slug: "jeanyoon-choi",
    imgURL: "%3D%CC%B8.png",
    keywordsArray: ["Postmodern", "Chaos", "Non-linear"],
  },
  {
    name: "W",
    studentName: "Jeanyoon Choi",
    abstract: "Multi-Device Web Artwork exploring the theme of accelerationism within the keyboard key 'W'.",
    slug: "jeanyoon-choi",
    imgURL: "w.png",
    keywordsArray: ["Postmodern", "Hyper-real", "Non-linear"],
  },

  {
    name: "MBA",
    studentName: "Jeanyoon Choi",
    abstract: "Medium-Based Approach of Multi-Device Web Artwork, objecting and playing around user's mental model.",
    slug: "jeanyoon-choi",
    imgURL: "mba.png",
    keywordsArray: ["Web Art", "Chaos", "Poetic"],
  },
  {
    name: "105",
    studentName: "Jeanyoon Choi",
    abstract: "A web artwork providing Philosophical criticism towards modern society's obsession towards the status quo.",
    slug: "jeanyoon-choi",
    imgURL: "105.png",
    keywordsArray: ["Sociopolitical", "Capitalism", "Web Art"],
  },
  {
    name: "By AI",
    studentName: "Jeanyoon Choi",
    abstract: "AI-led orchestration of a Multi-Device Web interaction recreating the experience of training an AI.",
    slug: "jeanyoon-choi",
    imgURL: "by_ai.png",
    keywordsArray: ["Data and Society", "Artificial Intelligence", "Information Technology"],
  },
  {
    name: "Ode to Decentralisation",
    studentName: "Jeanyoon Choi",
    abstract: "Decentralisation Multi-Device Web Orchestra where participants co-create the melody of 'Ode to Joy'.",
    slug: "jeanyoon-choi",
    imgURL: "otd.png",
    keywordsArray: ["Interaction", "Decentralisation", "Poststructural"],
  },
  {
    name: "Labour-Data Trading Floor",
    studentName: "Jeanyoon Choi",
    abstract: "Highlighting unpaid labour behind the Image Classification job of the AI model training system.",
    slug: "jeanyoon-choi",
    imgURL: "ldtf.png",
    keywordsArray: ["Data and Society", "Artificial Intelligence", "Capitalism"],
  },
  {
    name: "Collective Opinion",
    studentName: "Jeanyoon Choi",
    abstract: "Creating a harmonic melody based on diverse opinions, opposing to news recommendation algorithm.",
    slug: "jeanyoon-choi",
    imgURL: "collective_opinion.png",
    keywordsArray: ["Diversity", "Sociopolitical", "Democracy"],
  },
  {
    name: "Concept Visualisation",
    studentName: "Jeanyoon Choi",
    abstract: "Multi-Device Web Artwork (MDWA) guiding spectators to learn more about key concepts of MDWA.",
    slug: "jeanyoon-choi",
    imgURL: "concept_visualisation.png",
    keywordsArray: ["Non-linear", "Connectivity", "Rhizomatic"],
  },
  {
    name: "Altering Headline",
    studentName: "Jeanyoon Choi",
    abstract: "Multi-Device Web Artwork where users alter NYT headline, and AI generates corresponding headline image.",
    slug: "jeanyoon-choi",
    imgURL: "altering_headline.png",
    keywordsArray: ["Interaction", "Artificial Intelligence", "Democracy"],
  },
  {
    name: "Woogie-Booging",
    studentName: "Jeanyoon Choi",
    abstract: "Reconstructing Mondrian's Broadway Boogie-Woogie through Multi-Device Web Artwork.",
    slug: "jeanyoon-choi",
    imgURL: "woogie_booging.png",
    keywordsArray: ["Web Art", "Interaction", "Spatial-Temporal"],
  },
  {
    name: "Ainting",
    studentName: "Jeanyoon Choi",
    abstract: "Reconstructing Pollock's Action Painting through Multi-Device Web Artwork.",
    slug: "jeanyoon-choi",
    imgURL: "ainting.png",
    keywordsArray: ["Web Art", "Interaction", "Spatial-Temporal"],
  },
  {
    name: "Death of Blue Screen",
    studentName: "Jeanyoon Choi",
    abstract: "Multi-Device Web Artwork playing around the notion of Blue Screen of Death and Yves Klein Blue.",
    slug: "jeanyoon-choi",
    imgURL: "death_of_blue_screen.jpg",
    keywordsArray: ["Human-Computer Interaction", "Spatial-Temporal", "Information Technology"],
  },
  {
    name: "Explicit Narrative: A Primitive Approach",
    studentName: "Jeanyoon Choi",
    abstract: "Multi-Device Web Artwork where the narrative of the project becomes the project itself.",
    slug: "jeanyoon-choi",
    imgURL: "explicit_narrative.png",
    keywordsArray: ["Human-Computer Interaction", "Semiotics", "Poststructural"],
  },
  {
    name: "InInInInInstagram",
    studentName: "Jeanyoon Choi",
    abstract: "Instagram Live-in-Instagram Live-in-Instagram Live-in-Instagram Live-in-Instagram Live.",
    slug: "jeanyoon-choi",
    imgURL: "inininininstagram.png",
    keywordsArray: ["Human-Computer Interaction", "Connectivity", "Poststructural"],
  },
  {
    name: "17 Square Minus 4 Square Equals 4'33''",
    studentName: "Jeanyoon Choi",
    abstract: "4'33''=273s=13*21s=(17-4)*(17+4)s=17^2s-4^2s=4'49''-16s=(Whole Length)-(Intermission)",
    slug: "jeanyoon-choi",
    imgURL: "17Square.png",
    keywordsArray: ["Contemporary Art", "Non-linear", "Information Technology"],
  },
];

export default function Screen() {
  useEffect(() => {
    for (const project of PROJECTS) {
      // projectUpload(project);
    }
  }, []);
  async function projectUpload(project) {
    try {
      await axios.post("/api/prisma/upload-project", project);
      console.log(project, "uploaded");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <S.Container></S.Container>
    </>
  );
}
