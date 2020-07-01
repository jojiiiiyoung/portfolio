import React from "react";
import { IMAGE_URL, DEFAULT_LOGO as logo } from "../../constants";

import "./style.css";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const RotatingText = require("react-rotating-text");

const Main = (): React.ReactElement => {
  return (
    <section
      id="main"
      style={{ backgroundImage: `url(${IMAGE_URL}home-bg.jpg)` }}
    >
      <div className="main-container container">
        <div className="wow fadeIn">
          <div className="main-logo">
            <img className="" src={logo} alt="smile :)" />
            <img className="" src={logo} alt="smile :)" />
            <img className="" src={logo} alt="smile :)" />
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
        <a href="https://unsplash.com/@11x11?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Enzo Tommasi
        </a>{" "}
        on{" "}
        <a href="/s/photos/computer?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Unsplash
        </a>
      </span>
    </section>
  );
};

export default Main;
