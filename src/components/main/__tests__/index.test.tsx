/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import { shallow } from "enzyme";

import Main from "..";

const RotatingText = require("react-rotating-text");

describe("sholud render main page normally", () => {
  const wrapper = shallow(<Main />);
  it("should include TypingWords component", () => {
    expect(
      wrapper.contains(
        <RotatingText items={["Frontend Developer", "working in SK planet."]} />
      )
    ).toBeTruthy();
  });
});
