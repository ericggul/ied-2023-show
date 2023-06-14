import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

const RELATED_PROJECTS = [
  {
    projectName: "MBA (Medium-Based Approach)",
    artistName: "Jeanyoon Choi",
    imageURL: "/assets/sample/SampleProject.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    keywords: ["interactive", "installation", "sound"],
  },

  {
    projectName: "Test 1",
    artistName: "Jeanyoon Choi",
    imageURL: "/assets/sample/Sample1.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    keywords: ["interactive", "installation", "sound"],
  },
  {
    projectName: "Test 2",
    artistName: "Jeanyoon Choi",
    imageURL: "/assets/sample/Sample2.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    keywords: ["interactive", "installation", "sound"],
  },
  {
    projectName: "Test 3",
    artistName: "Jeanyoon Choi",
    imageURL: "/assets/sample/Sample3.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    keywords: ["interactive", "installation", "sound"],
  },
  {
    projectName: "Test 1",
    artistName: "Jeanyoon Choi",
    imageURL: "/assets/sample/Sample1.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    keywords: ["interactive", "installation", "sound"],
  },
  {
    projectName: "Test 2",
    artistName: "Jeanyoon Choi",
    imageURL: "/assets/sample/Sample2.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    keywords: ["interactive", "installation", "sound"],
  },
  {
    projectName: "Test 3",
    artistName: "Jeanyoon Choi",
    imageURL: "/assets/sample/Sample3.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    keywords: ["interactive", "installation", "sound"],
  },
  {
    projectName: "Test 4",
    artistName: "Jeanyoon Choi",
    imageURL: "/assets/sample/Sample4.jpeg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    keywords: ["interactive", "installation", "sound"],
  },
];

export default function Modal({ showModal, setShowModal }) {
  const [currentProject, setCurrentProject] = useState(RELATED_PROJECTS[0]);

  return (
    <S.Container
      showModal={showModal}
      onClick={(e) => {
        e.stopPropagation();
        setShowModal(false);
      }}
    >
      <S.ModalContainer
        showModal={showModal}
        onClick={(e) => {
          e.stopPropagation();
          setShowModal(false);
        }}
      >
        <S.Left>
          <S.ImageContainer>
            <img src={currentProject.imageURL} alt="sample project" />
          </S.ImageContainer>
          <S.InformationContainer>
            <S.InfoLeft>
              <h1>{currentProject.projectName}</h1>
              <h2>{currentProject.artistName}</h2>
            </S.InfoLeft>
            <S.InfoRight>
              <p> {currentProject.description}</p>
              <p>
                {currentProject.keywords.map((keyword, i) => (
                  <S.SingleKeyword key={i}>{"#" + keyword}</S.SingleKeyword>
                ))}
              </p>
            </S.InfoRight>
          </S.InformationContainer>
        </S.Left>

        <RightCarousel />
      </S.ModalContainer>
    </S.Container>
  );
}

function RightCarousel() {
  const [currentLoc, setCurrentLoc] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLoc((loc) => (loc + 1) % RELATED_PROJECTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <S.Right>
      {RELATED_PROJECTS.map((prj, i) => {
        const yIdx =
          currentLoc - i > RELATED_PROJECTS.length / 2
            ? currentLoc - i - RELATED_PROJECTS.length
            : currentLoc - i < -RELATED_PROJECTS.length / 2
            ? currentLoc - i + RELATED_PROJECTS.length
            : currentLoc - i;
        const opacity = Math.abs(yIdx) >= 3 ? 0 : 1;

        return (
          <S.SingleRelatedProject key={i} yIdx={yIdx} opacity={opacity}>
            <S.RelatedImage>
              <img src={prj.imageURL} alt="sample project" />
            </S.RelatedImage>
            <S.RelatedExplanation>
              <h1>{prj.projectName}</h1>
              <h2>{prj.artistName}</h2>
            </S.RelatedExplanation>
          </S.SingleRelatedProject>
        );
      })}
    </S.Right>
  );
}
