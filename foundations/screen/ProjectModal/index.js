import * as S from "./styles";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";

const IMG_DB_URL = "https://ied-2023-show.s3.eu-west-1.amazonaws.com/";

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

export default function Modal({ currentProject, showModal, setShowModal }) {
  console.log(currentProject, showModal);

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
        {currentProject && (
          <S.Left>
            <S.ImageContainer>
              <img src={IMG_DB_URL + currentProject.imgURL} alt="sample project" />
            </S.ImageContainer>
            <S.InformationContainer>
              <S.InfoLeft>
                <h1>{currentProject.name}</h1>
                <h2>{currentProject.studentName}</h2>
              </S.InfoLeft>
              <S.InfoRight>
                <p> {currentProject.abstract}</p>
                <p>
                  {currentProject.keywords.map((keyword, i) => (
                    <S.SingleKeyword key={i}>{"#" + keyword.name}</S.SingleKeyword>
                  ))}
                </p>
              </S.InfoRight>
            </S.InformationContainer>
          </S.Left>
        )}

        {currentProject && <RightCarousel relatedProjects={currentProject.relatedProjects} />}
      </S.ModalContainer>
    </S.Container>
  );
}

function RightCarousel({ relatedProjects }) {
  const [currentLoc, setCurrentLoc] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLoc((loc) => (loc + 1) % relatedProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [relatedProjects]);

  console.log(relatedProjects);

  return (
    <S.Right>
      {relatedProjects.map((prj, i) => {
        const yIdx =
          currentLoc - i > relatedProjects.length / 2
            ? currentLoc - i - relatedProjects.length
            : currentLoc - i < -relatedProjects.length / 2
            ? currentLoc - i + relatedProjects.length
            : currentLoc - i;
        const opacity = Math.abs(yIdx) >= 3 ? 0 : 1;

        return (
          <S.SingleRelatedProject key={i} yIdx={yIdx} opacity={opacity}>
            <S.RelatedImage>
              <img src={IMG_DB_URL + prj.imgURL} alt="sample project" />
            </S.RelatedImage>
            <S.RelatedExplanation>
              <h1>{prj.name}</h1>
              <h2>{prj.studentName}</h2>
            </S.RelatedExplanation>
          </S.SingleRelatedProject>
        );
      })}
    </S.Right>
  );
}
