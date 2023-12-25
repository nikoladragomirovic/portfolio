import React from "react";
import Banner from "./Banner";
import About from "./About";

const Hero = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <About />
      <Banner />
    </div>
  );
};

export default Hero;
