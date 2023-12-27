import React, { useState } from "react";
import { BiSolidSend } from "react-icons/bi";
import "animate.css";
import { ImGithub } from "react-icons/im";
import { RiLinkedinLine } from "react-icons/ri";
import { RxInstagramLogo } from "react-icons/rx";

const Contact = () => {
  const [animateSend, setAnimateSend] = useState(false);
  const [comebackKey, setComebackKey] = useState(1);

  return (
    <>
      <h1 className="w-full flex items-center justify-center mt-16 text-6xl text-indigo-500 font-rubikMaps font-bold animate__animated animate__bounceInDown">
        CONTACT
      </h1>
      <div className="flex w-full flex-row items-center justify-center my-20">
        <span className="p-4 rounded-lg bg-indigo-500">
          <ImGithub className="text-4xl text-indigo-100 animate__animated animate__zoomInDown animate-delay-100" />
        </span>
        <span className="p-4 rounded-lg bg-indigo-500 mx-24">
          <RiLinkedinLine className="text-4xl text-indigo-100 animate__animated animate__zoomInDown animate-delay-200" />
        </span>
        <span className="p-4 rounded-lg bg-indigo-500">
          <RxInstagramLogo className="text-4xl text-indigo-100 animate__animated animate__zoomInDown animate-delay-300" />
        </span>
      </div>
      <div className="w-full flex flex-col items-center justify-center px-10 pb-10">
        <div className="w-7/12 flex flex-row z-20 items-center justify-center">
          <input
            key={comebackKey}
            placeholder="Your e-mail address"
            className={`w-full py-4 mb-2 rounded-xl bg-indigo-50 duration-500 outline px-3 outline-1  placeholder-indigo-300 font-poppins text-indigo-500 animate__animated ${
              animateSend
                ? "animate__bounceOutRight animate-delay-700"
                : "animate__animated animate__bounceInLeft animate-delay-400 outline-indigo-500"
            }`}
            readOnly={animateSend}
          ></input>
          <BiSolidSend
            onClick={() => {
              setTimeout(() => {
                setAnimateSend(true);
              }, 0);
              setTimeout(() => {
                setAnimateSend(false);
                setComebackKey(comebackKey + 1);
              }, 2200);
            }}
            className={`text-indigo-500 mb-2 text-5xl animate__animated mr-5 ml-8 ${
              animateSend
                ? "animate__bounceOutRight animate-delay-700"
                : "animate__animated animate__bounceInLeft animate-delay-200"
            }`}
          />
        </div>
        <p
          className={`text-indigo-500 duration-300 text-light font-light text-xl ${
            animateSend
              ? "opacity-100 delay-[1100ms] translate-y-32"
              : "opacity-0 -mb-3"
          }`}
        >
          Message Sent!
        </p>
        <textarea
          placeholder="Your message"
          readOnly={animateSend}
          className={`w-7/12 pb-64 duration-500 rounded-2xl outline p-3 resize-none outline-1 placeholder-indigo-300  font-poppins text-indigo-500 animate__animated bg-indigo-50 ${
            animateSend
              ? "animate__animated animate__zoomOutUp"
              : "animate__animated animate__zoomInDown animate-delay-[800ms] outline-indigo-500"
          }`}
        ></textarea>
      </div>
    </>
  );
};

export default Contact;
