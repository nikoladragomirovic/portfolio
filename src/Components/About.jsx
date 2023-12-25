import React from "react";
import me from "../Rescources/Me.png";

const About = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center pt-16">
      <div className="rounded-t-3xl p-10 bg-gradient-to-b from-indigo-400">
        <img className="max-h-64 rounded-3xl" src={me}></img>
      </div>
      <h1 className="text-8xl font-rubikMaps mt-8 text-indigo-400 w-full text-center">
        NIKOLA
        <br />
        DRAGOMIROVIĆ
      </h1>
      <p className="text-2xl font-poppins mt-3 text-indigo-600 font-light">
        A wannabe frontend developer & UI/UX engineer
      </p>
    </div>
  );
};

export default About;
