import React, { useRef } from "react";
import { Lottie } from "@crello/react-lottie";

import useHash from "../common/useHash";
import useVisibility from "../common/useVisibility";

import linkedIn from "./linkedin.json";
import mail from "./email.json";
import "./style.css";

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
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/jiyoung-jo-17b882b1"
          >
            <Lottie
              config={{
                loop: true,
                autoplay: true,
                animationData: linkedIn,
              }}
              height="50px"
              width="50px"
            />
            {/* <img src={`${IMAGE_URL}linked-in.png`} alt="linked in" /> */}
          </a>
          <a className="contact-link" href="mailto:jojiiiiyoung@gmail.com">
            <Lottie
              config={{
                loop: true,
                autoplay: true,
                animationData: mail,
              }}
              height="50px"
              width="50px"
            />
            {/* <img src={`${IMAGE_URL}mail.png`} alt="mail" /> */}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
