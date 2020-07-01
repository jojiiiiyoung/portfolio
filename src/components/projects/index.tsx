import React from "react";

import "./style.css";
import { IMAGE_URL } from "../../constants";

const projects: IProject[] = [
  {
    name: "건물관리 시스템",
    img: { src: "project-capstec.png" },
    descriptions: [
      "건물 모니터링 시스템 개발",
      "skills: nextjs, react, dygraph",
      "cross browsing 지원",
    ],
  },
  {
    name: "대기질 모니터링",
    img: { src: "project-air.png" },
    descriptions: [
      "대기질 모니터링 시스템 개발",
      "skills: react, redux, dygraph, webpack",
      "cross browsing 지원",
    ],
  },
  {
    name: "T world",
    img: { src: "project-tworld.jpg" },
    descriptions: [
      "SKT 통합서비스 모바일 웹 frontend 개발",
      "skills: node, typescript, javascript(es5, es6), jquery",
      "cross browsing 지원",
    ],
  },
  {
    name: "vingle",
    img: {
      src: "project-vingle.jpg",
      authorship: "Photo by Phad Pichetbovornkul on Unsplash",
    },
    descriptions: [
      "vingle.net frontend 개발(SPA)",
      "skills: react, redux, typescript, node, sass",
      "cross browsing 지원",
      "routing 모듈 개선",
    ],
  },
  {
    name: "layout framework",
    img: {
      src: "project-framework.jpg",
      authorship: "Photo by Josh Calabrese on Unsplash",
    },
    descriptions: [
      "layout framework 설계 및 개발",
      "skills: javascript, polymer, jquery, html5, css",
      "layout 속도 6배 이상 향상",
    ],
  },
  {
    name: "cross platform",
    img: {
      src: "project-cross.jpg",
      authorship: "Photo by Caspar Camille Rubin on Unsplash",
    },
    descriptions: [
      "UI application 개발용 framework 설계 및 개발",
      "skills: java, c#, android, WPF, eclipse",
    ],
  },
];

const Projects = (): React.ReactElement => {
  return (
    <section id="portfolio">
      <div className="container">
        <div>
          <h3 className="section-title">Portfolio</h3>
          <div className="section-title-divider" />
          <p className="section-description">
            mouseover(pc) / touch(mobile) 하시면 프로젝트 상세 정보와 사용
            skills를 확인하실 수 있습니다.
          </p>
        </div>

        <ul className="project-list">
          {projects.map((project) => (
            <ProjectItem key={project.name} data={project} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;

interface IProject {
  index?: number;
  name: string;
  img: {
    src: string;
    authorship?: string;
  };
  descriptions?: Array<string>;
}

const ProjectItem = ({ data }: { data: IProject }): React.ReactElement => (
  <li
    className="portfolio-item"
    style={{ backgroundImage: `url(${IMAGE_URL + data.img.src})` }}
  >
    <div className="details">
      <h4>{data.name}</h4>
      {data.descriptions?.map((description) => (
        <span key={description}>{description}</span>
      ))}
    </div>
    {data.img.authorship && (
      <span className="bg-source">{data.img.authorship}</span>
    )}
  </li>
);
