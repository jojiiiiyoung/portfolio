import React, { useRef } from "react";

import "./style.css";
import { IMAGE_URL } from "../../constants";
import Badge from "../common/badge";
import useVisible from "../common/useVisible";
import { IProject, PROJECTS } from "./data";

const Projects = (): React.ReactElement => {
  const containerEl = useRef<HTMLDivElement | null>(null);
  const { visible } = useVisible(containerEl);

  return (
    <section id="portfolio" ref={containerEl}>
      <div className="container">
        <div>
          <h3 className="section-title">Portfolio</h3>
          <div className="section-title-divider" />
        </div>

        <ul className="project-list">
          {PROJECTS.map((project: IProject, index: number) => (
            <ProjectItem
              key={project.name}
              data={project}
              className={`slide ${
                visible ? `delay-${index} slide-up` : "slide-down"
              }`}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;

export const ProjectItem = ({
  data,
  className,
}: {
  data: IProject;
  className: string;
}): React.ReactElement => (
  <li className={`card portfolio-item ${className}`}>
    <img className="card-img" src={IMAGE_URL + data.img.src} alt="" />
    <div className="card-body">
      <h5>{data.name}</h5>
      <p className="description">
        {data.descriptions.map((description) => (
          <React.Fragment key={description}>
            <span>{description}</span>
            <br />
          </React.Fragment>
        ))}
      </p>
      <div className="card-text keywords">
        {data.keywords?.map((keyword) => (
          <Badge key={keyword} text={keyword} size="small" />
        ))}
      </div>
    </div>
  </li>
);
