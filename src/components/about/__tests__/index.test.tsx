/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import { mount } from "enzyme";
import About, { Company } from "..";
import { COMPANIES } from "../data";
import Badge from "../../common/badge";

describe("should render about page normally", () => {
  const wrapper = mount(<About />);
  it("should include Company components", () => {
    expect(wrapper.find(Company)).toHaveLength(COMPANIES.length);
  });

  it("should have correct contents", () => {
    expect(wrapper.find("div.about-content")).toHaveLength(1);
    expect(wrapper.find("div.about-content h2.about-title")).toHaveLength(1);
    expect(wrapper.find("div.about-content p.about-text")).toHaveLength(2);
  });

  it("should contain multiple Badge component", () => {
    expect(wrapper.find(Badge).length).toBeGreaterThan(0);
  });
});

describe("should render a company component normally", () => {
  const data = COMPANIES[0];
  const wrapper = mount(<Company data={data} className="slide-down" />);

  it("should have contents", () => {
    expect(wrapper.find("div.box h4.title")).toHaveLength(1);
    expect(wrapper.find("div.box h4.title span").text()).toBe(data.name);
    expect(wrapper.find("div.description span.period")).toHaveLength(1);
    expect(wrapper.find("ul.skill-list")).not.toBe(0);
  });

  it("should contain multiple Badge component", () => {
    expect(wrapper.find(Badge).length).toBe(data.skills.length);
  });
});
