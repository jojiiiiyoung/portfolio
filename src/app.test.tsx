import React from "react";
import { shallow } from "enzyme";

import App from "./app";
import Main from "./components/main";

describe("renders hello text", () => {
  const wrapper = shallow(<App />);

  it("main page includes <Main /> component", () => {
    expect(wrapper.contains(<Main />)).toBeTruthy();
  });
});
