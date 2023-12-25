import React from "react";
import me from "../Rescources/Me.png";

const About = () => {
  return (
    <div className="w-full h-[80vh] flex flex-col items-center justify-center">
      <div className="rounded-t-3xl p-10 bg-gradient-to-b from-indigo-400 animate-jump-in animate-duration-1000 animate-delay-200">
        <img className="max-h-64 rounded-3xl" src={me}></img>
      </div>
      <h1 className="text-8xl font-rubikMaps mt-10 text-indigo-400 w-full text-center animate-jump-in animate-duration-1000 animate-delay-500">
        NIKOLA
        <br />
        DRAGOMIROVIĆ
      </h1>
      <p className="text-3xl font-poppins mt-3 text-indigo-600 font-light animate-fade-up animate-duration-1000 animate-delay-1000">
        A wannabe frontend developer & UI/UX engineer
      </p>
    </div>
  );
};

export default About;
