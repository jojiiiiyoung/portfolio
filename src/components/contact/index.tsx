import React from "react";
import Lottie from "react-lottie";

import useHash from "../common/useHash";
import useVisibility from "../common/useVisibility";

import linkedIn from "./linkedin.json";
import mail from "./email.json";
import "./style.css";
import { FBEventTypes } from "../../utils/fbHelper";

const Contact = (): React.ReactElement => {
  const { el: containerEl, visible } = useVisibility();

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
            data-fb-event={FBEventTypes.CONTACTS}
            data-fb-params={JSON.stringify({ item_name: "linked-in" })}
          >
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: linkedIn,
              }}
              height="50px"
              width="50px"
            />
            {/* <img src={`${IMAGE_URL}linked-in.png`} alt="linked in" /> */}
          </a>
          <a
            className="contact-link"
            href="mailto:jojiiiiyoung@gmail.com"
            data-fb-event={FBEventTypes.CONTACTS}
            data-fb-params={JSON.stringify({ item_name: "mail" })}
          >
            <Lottie
              options={{
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
      <span className="bg-source">
        Photo by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://unsplash.com/@lucasgwendt?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
        >
          Lucas George Wendt
        </a>{" "}
        on{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://unsplash.com/s/photos/letter?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
        >
          Unsplash
        </a>
      </span>
    </section>
  );
};

export default Contact;
