/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import { mount } from "enzyme";

import Projects, { ProjectItem } from "..";
import Badge from "../../common/badge";

import { PROJECTS } from "../data";

describe("should render project section normally", () => {
  const wrapper = mount(<Projects />);
  it("should include Item components", () => {
    expect(wrapper.find(ProjectItem)).toHaveLength(PROJECTS.length);
  });

  it("should have correct contents", () => {
    expect(wrapper.find("ul").children()).toHaveLength(PROJECTS.length);
    expect(wrapper.find("h3.section-title")).toHaveLength(1);
    expect(wrapper.find("div.section-title-divider")).toHaveLength(1);
  });
});

describe("should render a project component normally", () => {
  const data = PROJECTS[0];
  const wrapper = mount(<ProjectItem data={data} className="slide-down" />);

  it("should have contents", () => {
    expect(wrapper.find("img.card-img")).toHaveLength(1);
    expect(wrapper.find("div.card-body h5").text()).toBe(data.name);
    expect(wrapper.find("p.description span").length).toBe(
      data.descriptions.length
    );
    expect(wrapper.find("p.description span").length).toBe(
      data.descriptions.length
    );
    expect(wrapper.find("p.description span").at(0).text()).toBe(
      data.descriptions[0]
    );
  });

  it("should contain multiple Badge component", () => {
    expect(wrapper.find(Badge).length).toBe(data.keywords?.length || 0);
  });
});
