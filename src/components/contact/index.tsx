import React, { useRef } from "react";

import "./style.css";
import { IMAGE_URL } from "../../constants";
import useHash from "../common/useHash";
import useVisibility from "../common/useVisibility";

const Contact = (): React.ReactElement => {
  const containerEl = useRef<HTMLDivElement | null>(null);
  const { visible } = useVisibility(containerEl);

  useHash(visible, "#contact");

  return (
    <section id="contact" ref={containerEl}>
      <div className="container">
        <h3>Contact Me</h3>
        <div className="sns-list">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/jiyoung-jo-17b882b1"
          >
            <img src={`${IMAGE_URL}linked-in.png`} alt="linked in" />
          </a>
          <a href="mailto:jojiiiiyoung@gmail.com">
            <img src={`${IMAGE_URL}mail.png`} alt="mail" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
