import React, { useState } from "react";
import { BiSolidSend } from "react-icons/bi";
import "animate.css";
import { VscGithubAlt } from "react-icons/vsc";
import { RiLinkedinLine } from "react-icons/ri";
import { RxInstagramLogo } from "react-icons/rx";

const Contact = () => {
  const [animateSend, setAnimateSend] = useState(false);

  return (
    <>
      <h1 className="w-full flex items-center justify-center mt-12 text-6xl text-indigo-500 font-rubikMaps font-bold animate__animated animate__bounceInDown">
        CONTACT
      </h1>
      <div className="w-full flex flex-col items-center justify-center px-10 py-20">
        <div className="w-7/12 flex flex-row z-20 items-center justify-center">
          <input
            placeholder="Your e-mail address"
            className={`w-full py-4 mb-6 rounded-xl bg-indigo-50 duration-500 outline px-3 outline-2 outline-indigo-200 placeholder-indigo-300 font-poppins text-indigo-500 animate__animated ${
              animateSend
                ? "delay-[1100ms] outline-indigo-400"
                : "animate__animated animate__bounceInDown animate-delay-200"
            }`}
            readOnly={animateSend}
          ></input>
          <BiSolidSend
            onClick={() => {
              setAnimateSend(false);
              setTimeout(() => {
                setAnimateSend(true);
              }, 0);
            }}
            className={`text-indigo-500 mb-6 mr-5 ml-8 text-5xl animate__animated ${
              animateSend
                ? "animate__bounceOutRight animate-delay-500 delay-[900ms] duration-300 mr-0 ml-0 h-0 w-0"
                : "animate__animated animate__bounceInDown animate-delay-200"
            }`}
          />
        </div>
        <textarea
          placeholder="Your message"
          readOnly={animateSend}
          className={`w-7/12 pb-72 duration-500 rounded-2xl outline p-3 resize-none z-10 outline-2 placeholder-indigo-300 outline-indigo-200 font-poppins text-indigo-500 animate__animated bg-indigo-50 ${
            animateSend
              ? "outline-indigo-400 delay-[1100ms]"
              : "animate__animated animate__bounceInUp animate-delay-[400ms]"
          }`}
        ></textarea>
        <p
          className={`text-indigo-500 duration-300 text-light font-light mt-3 text-lg ${
            animateSend ? "opacity-100 delay-[1100ms]" : "opacity-0 -mt-6"
          }`}
        >
          Message Sent!
        </p>
      </div>
    </>
  );
};

export default Contact;
