import React from "react";
import Banner from "./Banner";
import About from "./About";

const Hero = () => {
  return (
    <div className="w-full h-full flex flex-col xl:flex-row items-start justify-between">
      <About />
      <Banner />
    </div>
  );
};

export default Hero;
