import React from "react";
import Intro from "./Intro";
import Wheel from "./Wheel";
import Socials from "./Socials";

const Stream = ({ windowWidth }) => {
  return (
    <>
      <Intro />
      <Wheel windowWidth={windowWidth} />
      <Socials />
    </>
  );
};

export default Stream;
