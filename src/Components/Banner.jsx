import React from "react";

const Banner = () => {
  return (
    <div className="flex items-center px-36 justify-center w-1/2 h-full ml-20 rounded-l-3xl bg-indigo-200">
      <span className="flex items-center justify-center flex-col">
        <h1 className="text-indigo-500 font-bold font-poppins text-3xl text-center">
          I LIKE TO MAKE THINGS LOOK
        </h1>
        <h1 className="text-indigo-500 my-10 font-rubikMaps text-9xl text-center">
          NICE
        </h1>
        <h1 className="text-indigo-700 font-light font-poppins text-2xl text-center">
          Or at least what i view as nice
        </h1>
      </span>
    </div>
  );
};

export default Banner;
