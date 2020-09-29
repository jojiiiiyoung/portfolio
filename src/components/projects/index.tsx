/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";

import Badge from "../common/badge";
import useVisibility from "../common/useVisibility";
import useHash from "../common/useHash";

import { IMAGE_URL } from "../../constants";
import { IProject, PROJECTS } from "./data";

import "./style.css";

const Projects = (): React.ReactElement => {
  const { el: containerEl, visible } = useVisibility();

  useHash(visible, "#portfolio");

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
    {data.img.src.includes("mp4") ? (
      <video
        className="card-img"
        src={IMAGE_URL + data.img.src}
        autoPlay
        muted
        playsInline
        loop
      />
    ) : (
      <img className="card-img" src={IMAGE_URL + data.img.src} alt="" />
    )}
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
