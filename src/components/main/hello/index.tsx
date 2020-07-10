import React from "react";
import { Lottie } from "@crello/react-lottie";
import animationData from "./hello.json";

const Hello = (): React.ReactElement => (
  <Lottie
    config={{
      loop: true,
      autoplay: true,
      animationData,
    }}
    height="250px"
    width="250px"
  />
);

export default Hello;
