/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";

import { IMAGE_URL } from "../../constants";

import "./style.css";
import Hello from "./hello";

const RotatingText = require("react-rotating-text");

const Main = (): React.ReactElement => {
  return (
    <section
      id="main"
      style={{
        backgroundImage: `url(${IMAGE_URL}home-bg.jpg)`,
      }}
    >
      <div className="main-container container">
        <div className="wow fadeIn">
          <div className="main-logo">
            <Hello />
          </div>

          <h1>Hello, my name is Jiyoung</h1>
          <h2>
            I am{" "}
            <RotatingText
              items={["Frontend Developer", "working in SK planet."]}
            />
          </h2>
          <div className="actions">
            <a href="#about" className="btn-get-started">
              About
            </a>
            <a href="#portfolio" className="btn-services">
              Portfolio
            </a>
          </div>
        </div>
      </div>
      <span className="bg-source">
        Photo by{" "}
        <a href="https://unsplash.com/@joannakosinska?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Joanna Kosinska
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/simple-background?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Unsplash
        </a>
      </span>
    </section>
  );
};

export default Main;
