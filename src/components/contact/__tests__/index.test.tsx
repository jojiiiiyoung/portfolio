/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import { mount } from "enzyme";

import Contact from "..";

describe("should render contact section normally", () => {
  const wrapper = mount(<Contact />);
  it("should include two sns", () => {
    expect(wrapper.find("a")).toHaveLength(2);
    expect(wrapper.find("img")).toHaveLength(2);
  });
});
