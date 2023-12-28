import React, { useState } from "react";
import "animate.css";
import { ImGithub } from "react-icons/im";
import { RiLinkedinLine } from "react-icons/ri";
import { RxInstagramLogo } from "react-icons/rx";
import { FiArrowUpRight } from "react-icons/fi";
import { BiSolidSend } from "react-icons/bi";

const Contact = () => {
  const [animateSend, setAnimateSend] = useState(false);
  const [comebackKey, setComebackKey] = useState(1);

  return (
    <>
      <h1 className="w-full flex items-center justify-center mt-16 mb-20 text-6xl text-indigo-400 font-rubikMaps font-bold animate__animated animate__bounceInDown">
        CONTACT
      </h1>
      <div className="w-full flex flex-col items-center justify-center px-10 pb-10">
        <div className="w-7/12 flex flex-row z-20 items-center justify-center">
          <input
            key={comebackKey}
            placeholder="Your e-mail address"
            className={`w-full py-4 rounded-xl z-30 bg-indigo-50 duration-500 outline px-3 outline-1 outline-indigo-200 focus:outline-indigo-400 placeholder-indigo-300 font-poppins text-indigo-500  ${
              animateSend
                ? "animate__animated animate__bounceOutRight animate-delay-1000"
                : "animate__animated animate__bounceInLeft animate-delay-[600ms]"
            }`}
            readOnly={animateSend}
          ></input>
          <BiSolidSend
            onClick={() => {
              setAnimateSend(true);
              setTimeout(() => {
                setAnimateSend(false);
                setComebackKey(comebackKey + 1);
              }, 2200);
            }}
            className={`text-indigo-400 text-5xl animate__animated ml-4 mr-2 ${
              animateSend
                ? "animate__bounceOutRight animate-delay-1000"
                : "animate__animated animate__bounceInLeft animate-delay-[600ms]"
            }`}
          />
        </div>
        <p
          className={`text-indigo-500 duration-300 text-light font-light text-xl ${
            animateSend
              ? "opacity-100 delay-[1400ms] translate-y-32"
              : "opacity-0"
          }`}
        >
          Message Sent!
        </p>
        <textarea
          placeholder="Your message"
          readOnly={animateSend}
          className={`w-7/12 pb-64 duration-500 rounded-2xl outline z-10 p-3 resize-none outline-1 placeholder-indigo-300 outline-indigo-200 focus:outline-indigo-400 font-poppins text-indigo-500 animate__animated bg-indigo-50 ${
            animateSend
              ? "animate__animated animate__zoomOutUp -mt-7"
              : "animate__animated animate__zoomInDown animate-delay-[1000ms]"
          }`}
        ></textarea>
        <div className="flex w-full flex-row items-center justify-center mt-20">
          <div className="animate__animated animate__zoomInDown animate-delay-[1200ms] flex">
            <span className="group p-2 rounded-lg bg-indigo-200 hover:rotate-[23deg] relative duration-300 hover:translate-y-1">
              <ImGithub className="text-4xl text-indigo-400 group-hover:text-indigo-500 group-hover:-translate-x-7 group-hover:-rotate-[32deg] duration-300" />
              <FiArrowUpRight className="absolute top-0 right-0 opacity-0 text-indigo-500 duration-300 group-hover:opacity-100 group-hover:scale-150 group-hover:-translate-x-2 group-hover:translate-y-2" />
            </span>
          </div>
          <div className="animate__animated animate__zoomInDown animate-delay-[1400ms] flex">
            <span className="group p-2 rounded-lg bg-indigo-200 hover:rotate-[23deg] duration-300 hover:translate-y-1 mx-36">
              <RiLinkedinLine className="text-4xl text-indigo-400 group-hover:text-indigo-500 group-hover:-translate-x-7 group-hover:-rotate-[32deg] duration-300" />
              <FiArrowUpRight className="absolute top-0 right-0 opacity-0 text-indigo-500 duration-300 group-hover:opacity-100 group-hover:scale-150 group-hover:-translate-x-2 group-hover:translate-y-2" />
            </span>
          </div>
          <div className="animate__animated animate__zoomInDown animate-delay-[1600ms] flex">
            <span className="group p-2 rounded-lg bg-indigo-200 hover:rotate-[23deg] duration-300 hover:translate-y-1">
              <RxInstagramLogo className="text-4xl text-indigo-400 group-hover:text-indigo-500 group-hover:-translate-x-7 group-hover:-rotate-[32deg] duration-300" />
              <FiArrowUpRight className="absolute top-0 right-0 opacity-0 text-indigo-500 duration-300 group-hover:opacity-100 group-hover:scale-150 group-hover:-translate-x-2 group-hover:translate-y-2" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
