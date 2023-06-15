export function connectionToNodeLink(data) {
  let nodes = [];
  let links = [];
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    let node = {
      text: data[i].keyword,
      id: i,
    };
    nodes.push(node);
  }

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].targets.length; j++) {
      let value = 1;
      let isCycle = data[i].keyword === "≠";

      let link = {
        source: data[i].keyword,
        target: data[i].targets[j],
        value,
        id: i * 100 + j,
        isCycle,
      };
      links.push(link);
    }
  }

  console.log({ nodes, links });
  return { nodes, links };
}

const NODES = [
  {
    text: "2 + 1 ≠ 3",
    id: 0,
  },
];

// How to design an immersive experience of an immigration issue?
// Immigration Issues

// How can the fictional world guide the audience to contemplate bioethical issues?
// Bioethical Issues

// Is it possible to broaden people's understanding of death?
// Understanding of Death

// How to design an immersive experience to inspire audiences’ symbiotic relationships?
// Symbiotic Relationships

// How to communicate the complexities of the mother-daughter relationship?
// Mother-Daughter Relationship

// Could you perceive what I've witnessed through your eyes?
// Gaze and witness

// How to depict the conflicts between our will and surveillance capitalism?
// Surveillance Capitalism

// How to transmit the multiplicity of microorganisms in the human body?
// Microorganisms

// How to visualize the microbiological world from first-hand perspective?
// Microbiological World

// How can an installation on processual dynamics relate to scientific perspectives?
// Scientific Perspectives

// How do we perceive the impact of science and technology on ecology?
// Ecology

// What is the perceived separation between nature and culture?
// Nature and Culture

// How to assist the self-healing of groups with anxiety tendencies?
// Self-Healing

// How to encourage keloid patients with psychological problems?
// Keloid Patients

// How to decolonise understanding of food?
// Decolonisation

// How to build new relationships in the face of a super famine?
// Super Famine

// How do multispecies mindsets differ in anthropocentrism and ecocentrism?
// Anthropocentrism

// How to contribute to the continuous evolution of cultural ideology?
// Culture Ideology

// How to raise awareness of AI bias among audiences?
// AI bias

// How can we incorporate FISH! Philosophy in Public Transport?
// FISH! Philosophy

// How to design art therapy work for young people?
// Art Therapy

// How to explore the impact of sea level rise in 2085?
// Sea Level Rise

// How to think about the new relationship between humans and natural systems?
// Ecological System
// How will the future womb mimic the human womb?
// Future Womb
// How to interrupt people's neglect of the scope hidden by obstacles?
// Obstacles
// How should human beings interact with nature?
// Human-Nature Interaction
// What should a post-genderless human utopia world be like?
// Post-genderless
// How to support emotional expression in children with autism spectrum?
// Autism Spectrum

// How to envision extreme climate environments?
// 2050 Emissions

// How to experience climate change through the views of the future person?
// Post-Anthropocentrism

// How to reflect on the relationship between human behaviour and current climate change?
// Climate Change

// How to explore a way of an embodiment of the body becoming water?
// Embodiment
// Why is home a significant scenario in Hydro-Mythology?
// Hydro-Mythology
// How do we define the boundary between virtual and reality?
// Virtual-Reality Boundary
// How to define the boundary between humans and machines in the future?
// Human-Machine Boundary
// How can multimodal art experiences create positive shared experiences?
// Multimodal Art Experience

// Has the role of women in society changed?
// Social Feminism
// Wich female consciousness is reflected in fandom culture?
// Fandom Culture
// 2 + 1 ≠ 3?
// 2 + 1 ≠ 3

// Σ= = ≠?
// ≠ (Not Equal)
// How the relationship between humans and nature will change?
// Human-Nature Interaction
// How can the presence of the human can be represented on screen?
// Human Being

// Should I have kids?
// Reproduction
// How to balance between the individual and the other?
// Interpersonal Interaction
// Which problems will we face in the recognition of plant rights?
// Biophysical Egalitarianism
// How to create Net Art that brings people together?
// Multi-Device Web Artwork
// How to evoke emotional resonance towards global warming?
// Global Warming
// How to establish a connection between immersive scenes and the ecosystem?
// Immersive sense

// How can I Ching’s divination process assist filmmakers?
// I Ching

export const DATA_NODES_LINKS = {
  nodes: [
    {
      text: "2 + 1 ≠ 3",
      longDescription: "2 + 1 ≠ 3?",
      shortDescription: "2 + 1 ≠ 3",
      id: 0,
    },
    {
      text: "Illogically Logical",
      id: 1,
      longDescription: "How to design an immersive experience of an immigration issue?",
      shortDescription: "Immigration Issues",
    },
    {
      text: "Dynamic System",
      id: 2,
      longDescription: "How can the fictional world guide the audience to contemplate bioethical issues?",
      shortDescription: "Bioethical Issues",
    },
    {
      text: "Nonequality",
      id: 3,
      longDescription: "Is it possible to broaden people's understanding of death?",
      shortDescription: "Understanding of Death",
    },
    {
      text: "Not Equal",
      id: 4,
      longDescription: "How to design an immersive experience to inspire audiences’ symbiotic relationships?",
      shortDescription: "Symbiotic Relationships",
    },
    {
      text: "Static System",
      id: 5,
      longDescription: "How to communicate the complexities of the mother-daughter relationship?",
      shortDescription: "Mother-Daughter Relationship",
    },
    {
      text: "Double Thinking",
      id: 6,
      longDescription: "Could you perceive what I've witnessed through your eyes?",
      shortDescription: "Gaze and witness",
    },
    {
      text: "Narrative Fallacy",
      id: 7,
      longDescription: "How to depict the conflicts between our will and surveillance capitalism?",
      shortDescription: "Surveillance Capitalism",
    },
    {
      text: "Number Theory",
      id: 8,
      longDescription: "How to transmit the multiplicity of microorganisms in the human body?",
      shortDescription: "Microorganisms",
    },
    {
      text: "2 + 1 = 3",
      id: 9,
      longDescription: "How to visualize the microbiological world from first-hand perspective?",
      shortDescription: "Microbiological World",
    },
    {
      text: "Equality",
      id: 10,
      longDescription: "How can an installation on processual dynamics relate to scientific perspectives?",
      shortDescription: "Scientific Perspectives",
    },
    {
      text: "Modular Arithmetic",
      id: 11,
      longDescription: "How do we perceive the impact of science and technology on ecology?",
      shortDescription: "Ecology",
    },
    {
      text: "Prime Numbers",
      id: 12,
      longDescription: "What is the perceived separation between nature and culture?",
      shortDescription: "Nature and Culture",
    },
    {
      text: "Equation",
      id: 13,
      longDescription: "How to assist the self-healing of groups with anxiety tendencies?",
      shortDescription: "Self-Healing",
    },
    {
      text: "Nonequlibrium",
      id: 14,
      longDescription: "How to encourage keloid patients with psychological problems?",
      shortDescription: "Keloid Patients",
    },
    {
      text: "Crowd Psychology",
      id: 15,
      longDescription: "How to decolonise understanding of food?",
      shortDescription: "Decolonisation",
    },
    {
      text: "Performance Art",
      id: 16,
      longDescription: "How to build new relationships in the face of a super famine?",
      shortDescription: "Super Famine",
    },
    {
      text: "Joker",
      id: 17,
      longDescription: "How do multispecies mindsets differ in anthropocentrism and ecocentrism?",
      shortDescription: "Anthropocentrism",
    },
    {
      text: "Behaviour Economics",
      id: 18,
      longDescription: "How to contribute to the continuous evolution of cultural ideology?",
      shortDescription: "Culture Ideology",
    },
    {
      text: "Nonsense",
      id: 19,
      longDescription: "How to raise awareness of AI bias among audiences?",
      shortDescription: "AI bias",
    },
    {
      text: "Blockchain",
      id: 20,
      longDescription: "How can we incorporate FISH! Philosophy in Public Transport?",
      shortDescription: "FISH! Philosophy",
    },
    {
      text: "Action Painting",
      id: 21,
      longDescription: "How to design art therapy work for young people?",
      shortDescription: "Art Therapy",
    },
    {
      text: "Monumental Art",
      id: 22,
      longDescription: "How to explore the impact of sea level rise in 2085?",
      shortDescription: "Sea Level Rise",
    },
    {
      text: "Unexpected",
      id: 23,
      longDescription: "How to think about the new relationship between humans and natural systems?",
      shortDescription: "Ecological System",
    },
    {
      text: "Gaussian Distribution",
      id: 24,
      longDescription: "How will the future womb mimic the human womb?",
      shortDescription: "Future Womb",
    },
    {
      text: "AI",
      id: 25,
      longDescription: "How to interrupt people's neglect of the scope hidden by obstacles?",
      shortDescription: "Obstacles",
    },
    {
      text: "Building Unusable Runway",
      id: 26,
      longDescription: "How should human beings interact with nature?",
      shortDescription: "Human-Nature Interaction",
    },
    {
      text: "False Justification",
      id: 27,
      longDescription: "What should a post-genderless human utopia world be like?",
      shortDescription: "Post-genderless",
    },
    {
      text: "Narrative",
      id: 28,
      longDescription: "How to support emotional expression in children with autism spectrum?",
      shortDescription: "Autism Spectrum",
    },
    {
      text: "NFT",
      id: 29,
      longDescription: "How to envision extreme climate environments?",
      shortDescription: "2050 Emissions",
    },
    {
      text: "Inflation",
      id: 30,
      longDescription: "How to experience climate change through the views of the future person?",
      shortDescription: "Post-Anthropocentrism",
    },
    {
      text: "Probability",
      id: 31,
      longDescription: "How to reflect on the relationship between human behaviour and current climate change?",
      shortDescription: "Climate Change",
    },
    {
      text: "Logically Illogical",
      id: 32,
      longDescription: "How to explore a way of an embodiment of the body becoming water?",
      shortDescription: "Embodiment",
    },
    {
      text: "Human Logics",
      id: 33,
      longDescription: "Why is home a significant scenario in Hydro-Mythology?",
      shortDescription: "Hydro-Mythology",
    },
    {
      text: "Bitcoin",
      id: 34,
      longDescription: "How do we define the boundary between virtual and reality?",
      shortDescription: "Virtual-Reality Boundary",
    },
    {
      text: "Landmark",
      id: 35,
      longDescription: "How to define the boundary between humans and machines in the future?",
      shortDescription: "Human-Machine Boundary",
    },
    {
      text: "Berlin",
      id: 36,
      longDescription: "How can multimodal art experiences create positive shared experiences?",
      shortDescription: "Multimodal Art Experience",
    },
    {
      text: "Climate Change",
      id: 37,
      longDescription: "Has the role of women in society changed?",
      shortDescription: "Social Feminism",
    },
    {
      text: "Black Swan",
      id: 38,
      longDescription: "Wich female consciousness is reflected in fandom culture?",
      shortDescription: "Fandom Culture",
    },
    {
      text: "Conceptual Art",
      id: 39,
      longDescription: "Σ= = ≠?",
      shortDescription: "≠ (Not Equal)",
    },
    {
      text: "Pop Art",
      id: 40,
      longDescription: "How the relationship between humans and nature will change?",
      shortDescription: "Human-Nature Interaction",
    },
    {
      text: "Hyperobject",
      id: 41,
      longDescription: "How can the presence of the human can be represented on screen?",
      shortDescription: "Human Being",
    },
    {
      text: "Land Art",
      id: 42,
      longDescription: "Should I have kids?",
      shortDescription: "Reproduction",
    },
    {
      text: "Environment",
      id: 43,
      longDescription: "How to balance between the individual and the other?",
      shortDescription: "Interpersonal Interaction",
    },
    {
      text: "Industry",
      id: 44,
      longDescription: "Which problems will we face in the recognition of plant rights?",
      shortDescription: "Biophysical Egalitarianism",
    },
    {
      text: "Efficiency",
      id: 45,
      longDescription: "How to create Net Art that brings people together?",
      shortDescription: "Multi-Device Web Artwork",
    },
    {
      text: "JFK Airport",
      id: 46,
      longDescription: "How to evoke emotional resonance towards global warming?",
      shortDescription: "Global Warming",
    },
    {
      text: "Airport",
      id: 47,
      longDescription: "How to establish a connection between immersive scenes and the ecosystem?",
      shortDescription: "Immersive sense",
    },
    {
      text: "John F. Kennedy",
      id: 48,
      longDescription: "How can I Ching’s divination process assist filmmakers?",
      shortDescription: "I Ching",
    },
    {
      text: "Airplane",
      id: 49,
      longDescription: "How to interrupt people's neglect of the scope hidden by obstacles?",
      shortDescription: "Obstacles",
    },
    {
      text: "Seoul",
      id: 50,
      longDescription: "What is the notion of equality?",
      shortDescription: "Equality",
    },
    {
      text: "New York",
      id: 51,
      longDescription: "How should human beings interact with nature?",
      shortDescription: "Human-Nature Interaction",
    },
    {
      text: "Hyde Park",
      id: 52,
      longDescription: "What is the essence of human being?",
      shortDescription: "Human Being",
    },
    {
      text: "Downing 10",
      id: 53,
      longDescription: "How can we oppose to the logic?",
      shortDescription: "Postmodernism",
    },
    {
      text: "Churchill",
      id: 54,
      longDescription: `What is a truth?`,
      shortDescription: "Post-Truth",
    },
    {
      text: "London",
      id: 55,
      longDescription: "How to design art therapy work for young people?",
      shortDescription: "Art Therapy",
    },
    {
      text: "Green Park",
      id: 56,
      longDescription: "How to explore the impact of sea level rise in 2085?",
      shortDescription: "Sea Level Rise",
    },
    {
      text: "Tour Eiffel",
      id: 57,
      longDescription: `How does office workers percieve inter-personal relationship?`,
      shortDescription: "Interpersonal Interaction",
    },
    {
      text: "Parc de la Villette",
      id: 58,
      longDescription: `How to trigger people's interest in the artwork?`,
      shortDescription: "Behaviour Aesthetics",
    },
  ],
  links: [
    {
      source: "2 + 1 ≠ 3",
      target: "≠ (Not Equal)",
      id: 101,
    },
    {
      source: "Immigration Issues",
      target: "Interpersonal Interaction",
      id: 102,
    },
    {
      source: "Bioethical Issues",
      target: "Microorganisms",
      id: 103,
    },
    {
      source: "Understanding of Death",
      target: "Self-Healing",
      id: 104,
    },
    {
      source: "Symbiotic Relationships",
      target: "Decolonisation",
      id: 105,
    },
    {
      source: "Mother-Daughter Relationship",
      target: "Super Famine",
      id: 106,
    },
    {
      source: "Gaze and witness",
      target: "Surveillance Capitalism",
      id: 107,
    },
    {
      source: "Surveillance Capitalism",
      target: "Microbiological World",
      id: 108,
    },
    {
      source: "Microorganisms",
      target: "Scientific Perspectives",
      id: 109,
    },
    {
      source: "Microbiological World",
      target: "Ecology",
      id: 110,
    },
    {
      source: "Scientific Perspectives",
      target: "Nature and Culture",
      id: 111,
    },
    {
      source: "Ecology",
      target: "Self-Healing",
      id: 112,
    },
    {
      source: "Nature and Culture",
      target: "Keloid Patients",
      id: 113,
    },
    {
      source: "Self-Healing",
      target: "Decolonisation",
      id: 114,
    },
    {
      source: "Keloid Patients",
      target: "Art Therapy",
      id: 115,
    },
    {
      source: "Decolonisation",
      target: "Sea Level Rise",
      id: 116,
    },
    {
      source: "Anthropocentrism",
      target: "Human-Nature Interaction",
      id: 117,
    },
    {
      source: "Culture Ideology",
      target: "AI bias",
      id: 118,
    },
    {
      source: "AI bias",
      target: "FISH! Philosophy",
      id: 119,
    },
    {
      source: "Art Therapy",
      target: "Hydro-Mythology",
      id: 120,
    },
    {
      source: "Sea Level Rise",
      target: "Virtual-Reality Boundary",
      id: 121,
    },
    {
      source: "Ecological System",
      target: "Human-Nature Interaction",
      id: 122,
    },
    {
      source: "Future Womb",
      target: "Obstacles",
      id: 123,
    },
    {
      source: "Obstacles",
      target: "Human-Nature Interaction",
      id: 124,
    },
    {
      source: "Human-Nature Interaction",
      target: "Post-genderless",
      id: 125,
    },
    {
      source: "Autism Spectrum",
      target: "2050 Emissions",
      id: 126,
    },
    {
      source: "2050 Emissions",
      target: "Post-Anthropocentrism",
      id: 127,
    },
    {
      source: "Post-Anthropocentrism",
      target: "Climate Change",
      id: 128,
    },
    {
      source: "Climate Change",
      target: "Embodiment",
      id: 129,
    },
    {
      source: "Embodiment",
      target: "Hydro-Mythology",
      id: 130,
    },

    {
      source: "Hydro-Mythology",
      target: "Virtual-Reality Boundary",
      id: 131,
    },
    {
      source: "Virtual-Reality Boundary",
      target: "Human-Machine Boundary",
      id: 132,
    },
    {
      source: "Human-Machine Boundary",
      target: "Multimodal Art Experience",
      id: 133,
    },
    {
      source: "Social Feminism",
      target: "Fandom Culture",
      id: 134,
    },
    {
      source: "Fandom Culture",
      target: "≠ (Not Equal)",
      id: 135,
    },
    {
      source: "≠ (Not Equal)",
      target: "Human-Nature Interaction",
      id: 136,
    },
    {
      source: "Human-Nature Interaction",
      target: "Human Being",
      id: 137,
    },
    {
      source: "Human Being",
      target: "Reproduction",
      id: 138,
    },
    {
      source: "Reproduction",
      target: "Interpersonal Interaction",
      id: 139,
    },
    {
      source: "Interpersonal Interaction",
      target: "Biophysical Egalitarianism",
      id: 140,
    },
    {
      source: "Biophysical Egalitarianism",
      target: "Multi-Device Web Artwork",
      id: 141,
    },
    {
      source: "Multi-Device Web Artwork",
      target: "Global Warming",
      id: 142,
    },
    {
      source: "Global Warming",
      target: "Immersive sense",
      id: 143,
    },
    {
      source: "Immersive sense",
      target: "I Ching",
      id: 144,
    },
    {
      source: "I Ching",
      target: "Obstacles",
      id: 145,
    },
    {
      source: "Obstacles",
      target: "Equality",
      id: 146,
    },
    {
      source: "Equality",
      target: "Human-Nature Interaction",
      id: 147,
    },
    {
      source: "Equality",
      target: "≠ (Not Equal)",
      id: 148,
    },
    {
      source: "≠ (Not Equal)",
      target: "Human Being",
      id: 149,
    },
    {
      source: "Human Being",
      target: "Postmodernism",
      id: 150,
    },
    {
      source: "Postmodernism",
      target: "Post-Truth",
      id: 151,
    },
    {
      source: "Post-Truth",
      target: "≠ (Not Equal)",
      id: 152,
    },
    {
      source: "≠ (Not Equal)",
      target: "Art Therapy",
      id: 153,
    },
    {
      source: "Art Therapy",
      target: "Sea Level Rise",
      id: 154,
    },
    {
      source: "Sea Level Rise",
      target: "Interpersonal Interaction",
      id: 155,
    },
    {
      source: "Interpersonal Interaction",
      target: "Behaviour Aesthetics",
      id: 156,
    },
    {
      source: "Behaviour Aesthetics",
      target: "≠ (Not Equal)",
      id: 157,
    },
    {
      source: "≠ (Not Equal)",
      target: "Postmodernism",
      id: 158,
    },
    {
      source: "Postmodernism",
      target: "Human Being",
      id: 159,
    },
    {
      source: "Human Being",
      target: "Human-Nature Interaction",
      id: 160,
    },
    {
      source: "Human-Nature Interaction",
      target: "Human-Machine Boundary",
      id: 161,
    },
    {
      source: "Human-Machine Boundary",
      target: "Multimodal Art Experience",
      id: 162,
    },
    {
      source: "Multimodal Art Experience",
      target: "Multi-Device Web Artwork",
      id: 163,
    },
    {
      source: "Multi-Device Web Artwork",
      target: "Decolonisation",
      id: 164,
    },
    {
      source: "Decolonisation",
      target: "Sea Level Rise",
      id: 165,
    },
    {
      source: "Decolonisation",
      target: "Immigration Issues",
      id: 166,
    },
    {
      source: "Immigration Issues",
      target: "Microorganisms",
      id: 167,
    },
    {
      source: "Microorganisms",
      target: "Self-Healing",
      id: 168,
    },
    {
      source: "Self-Healing",
      target: "Keloid Patients",
      id: 169,
    },
    {
      source: "Keloid Patients",
      target: "Art Therapy",
      id: 170,
    },
    {
      source: "Art Therapy",
      target: "I Ching",
      id: 171,
    },
    {
      source: "I Ching",
      target: "Obstacles",
      id: 172,
    },
    {
      source: "Obstacles",
      target: "Human-Nature Interaction",
      id: 173,
    },
    {
      source: "Human-Nature Interaction",
      target: "Human Being",
      id: 174,
    },
    {
      source: "Human Being",
      target: "Art Therapy",
      id: 175,
    },
    {
      source: "Art Therapy",
      target: "Reproduction",
      id: 176,
    },
    {
      source: "Reproduction",
      target: "Interpersonal Interaction",
      id: 177,
    },
    {
      source: "Interpersonal Interaction",
      target: "Obstacles",
      id: 178,
    },
    {
      source: "Obstacles",
      target: "Mother-Daughter Relationship",
      id: 179,
    },
    {
      source: "Mother-Daughter Relationship",
      target: "Symbiotic Relationships",
      id: 180,
    },
    {
      source: "Symbiotic Relationships",
      target: "Gaze and witness",
      id: 181,
    },
    {
      source: "Gaze and witness",
      target: "Surveillance Capitalism",
      id: 182,
    },
    {
      source: "Surveillance Capitalism",
      target: "Microbiological World",
      id: 183,
    },
    {
      source: "Microbiological World",
      target: "Ecology",
      id: 184,
    },
    {
      source: "Ecology",
      target: "Embodiment",
      id: 185,
    },
    {
      source: "Embodiment",
      target: "Hydro-Mythology",
      id: 186,
    },
    {
      source: "Hydro-Mythology",
      target: "Virtual-Reality Boundary",
      id: 187,
    },
    {
      source: "Virtual-Reality Boundary",
      target: "Human-Machine Boundary",
      id: 188,
    },
    {
      source: "Human-Machine Boundary",
      target: "Multi-Device Web Artwork",
      id: 189,
    },
    {
      source: "Multi-Device Web Artwork",
      target: "Multimodal Art Experience",
      id: 190,
    },
    {
      source: "Multimodal Art Experience",
      target: "Anthropocentrism",
      id: 191,
    },
    {
      source: "Anthropocentrism",
      target: "Culture Ideology",
      id: 192,
    },
    {
      source: "Culture Ideology",
      target: "AI bias",
      id: 193,
    },
    {
      source: "AI bias",
      target: "FISH! Philosophy",
      id: 194,
    },
    {
      source: "FISH! Philosophy",
      target: "Interpersonal Interaction",
      id: 195,
    },
    {
      source: "Interpersonal Interaction",
      target: "Future Womb",
      id: 196,
    },
    {
      source: "Future Womb",
      target: "Post-Anthropocentrism",
      id: 197,
    },
    {
      source: "Post-Anthropocentrism",
      target: "Anthropocentrism",
      id: 198,
    },
    {
      source: "Anthropocentrism",
      target: "Sea Level Rise",
      id: 199,
    },
    {
      source: "Sea Level Rise",
      target: "Postmodernism",
      id: 200,
    },
    {
      source: "Postmodernism",
      target: "Post-genderless",
      id: 201,
    },
    {
      source: "Post-genderless",
      target: "Social Feminism",
      id: 202,
    },
    {
      source: "Social Feminism",
      target: "Reproduction",
      id: 203,
    },
  ],
};
