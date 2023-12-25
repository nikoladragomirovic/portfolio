import React from "react";
import { HiAcademicCap, HiCode } from "react-icons/hi";

const Banner = () => {
  return (
    <>
      <div className="flex items-center p-36 justify-center rounded-3xl bg-indigo-200 my-32">
        <span className="flex items-center justify-center flex-col">
          <h1 className="text-indigo-500 font-bold font-poppins text-3xl text-center">
            I LIKE TO MAKE THINGS LOOK
          </h1>
          <span className=" inline-block relative">
            <span
              className={`block absolute w-6 top-6 left-0 fill-indigo-500 animate-ping animate-duration-[1200ms] animate-delay-75`}
            >
              <svg viewBox="0 0 160 160">
                <path d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z" />
              </svg>
            </span>
            <span
              className={`block absolute w-10 top-6 left-64 fill-indigo-500 animate-ping animate-duration-1000 animate-delay-150`}
            >
              <svg viewBox="0 0 160 160">
                <path d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z" />
              </svg>
            </span>
            <span
              className={`block absolute w-8 top-32 left-32 fill-indigo-500 animate-ping`}
            >
              <svg viewBox="0 0 160 160">
                <path d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z" />
              </svg>
            </span>
            <span>
              <h1 className="text-indigo-500 my-10 font-rubikMaps text-9xl text-center">
                NICE
              </h1>
            </span>
          </span>
          <h1 className="text-indigo-700 font-light font-poppins text-2xl text-center">
            Or at least what i view as nice
          </h1>
        </span>
      </div>
      <div className="flex flex-col items-start justify-start">
        <span className="text-lg font-poppins text-indigo-700 font-light flex flex-col items-center justify-center w-full px-10 text-center">
          <HiAcademicCap className=" text-5xl text-indigo-400 mb-4" />
          <p>
            Computing & Automation student at the 'Faculty of Technical Sciences
            in Novi Sad'
          </p>
        </span>
        <span className="text-lg font-poppins mt-16 text-indigo-700 font-light flex flex-col items-center justify-center w-full mb-32 px-10 text-center">
          <HiCode className=" text-5xl text-indigo-400 mb-4" />
          <p>
            Knows his way around the terminal, can build you a custom linux
            kernel, but find passion in frontend & UI/UX design.
          </p>
        </span>
      </div>
    </>
  );
};

export default Banner;
