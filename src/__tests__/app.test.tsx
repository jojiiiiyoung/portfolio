import React from "react";
import { shallow } from "enzyme";

import App from "../app";
import Main from "../components/main";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";

describe("renders hello text", () => {
  const wrapper = shallow(<App />);

  it("should include <Main /> component", () => {
    expect(wrapper.contains(<Main />)).toBeTruthy();
  });

  it("should include <About /> component", () => {
    expect(wrapper.contains(<About />)).toBeTruthy();
  });

  it("should include <Projects /> component", () => {
    expect(wrapper.contains(<Projects />)).toBeTruthy();
  });

  it("should include <Contact /> component", () => {
    expect(wrapper.contains(<Contact />)).toBeTruthy();
  });
});
