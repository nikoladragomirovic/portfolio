import React from "react";
import me from "../Rescources/Me.png";
import { MdCircle } from "react-icons/md";

const About = () => {
  return (
    <div className="h-full w-1/2 flex flex-col items-start justify-start pl-16 py-12">
      <img
        className="max-h-64 rounded-3xl outline outline-indigo-300 outline-4 bg-indigo-400"
        src={me}
      ></img>
      <h1 className="text-6xl font-rubikMaps mt-8 text-indigo-400 w-full">
        NIKOLA DRAGOMIROVIĆ
      </h1>
      <p className="text-2xl font-poppins mt-1 text-indigo-700 font-light">
        Wannabe frontend developer & UI/UX engineer
      </p>
      <span className="text-lg font-poppins mt-8 text-indigo-700 font-light flex items-center justify-start w-full">
        <MdCircle className="text-indigo-400 mr-4" />
        <p>
          Computing & Automation student at the 'Faculty of Technical Sciences
          in Novi Sad'
        </p>
      </span>
      <span className="text-lg font-poppins mt-3 text-indigo-700 font-light flex items-center justify-start w-full">
        <MdCircle className="text-indigo-400 mr-4" />
        <p>
          Thinks he has an eye for design, he actually doesn't and is just
          severely delusional
        </p>
      </span>
      <span className="text-lg font-poppins mt-3 text-indigo-700 font-light flex items-center justify-start w-full">
        <MdCircle className="text-indigo-400 mr-4" />
        <p>
          Knows some embedded programming, and makes telegram bots that annoy
          people
        </p>
      </span>
    </div>
  );
};

export default About;
