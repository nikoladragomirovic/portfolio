import React from "react";
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";

const ArrowIndicator = () => {
  return (
    <div className="flex w-fit flex-row mb-4 py-2 bg-indigo-300 outline outline-1 outline-indigo-200 bg-opacity-30 rounded-lg items-center justify-around animate-fade-down animate-duration-1000 animate-delay-1000">
      <span className="text-base text-indigo-500 pr-2 pl-5">
        <TfiAngleUp className="animate-jump animate-duration-[2000ms] animate-infinite duration-300" />
        <TfiAngleDown className="animate-jump animate-duration-[2000ms] animate-infinite duration-300" />
      </span>
      <p className="text-indigo-500 font-extralight text-base pl-2 pr-4">
        Use arrow keys to cycle projects
      </p>
    </div>
  );
};

export default ArrowIndicator;
