/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import Main from ".";

const RotatingText = require("react-rotating-text");

describe("contains proper text", () => {
  const { getByText } = render(<Main />);

  it('main page includes "jiyoung" text', () => {
    const textElement = getByText(/jiyoung/i);
    expect(textElement).toBeInTheDocument();
  });
});

describe("renders main page normally", () => {
  const wrapper = shallow(<Main />);
  it("main page includes TypingWords component", () => {
    expect(
      wrapper.contains(
        <RotatingText items={["Frontend Developer", "working in SK planet."]} />
      )
    ).toBeTruthy();
  });
});
