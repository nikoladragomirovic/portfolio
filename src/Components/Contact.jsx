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
            className={`w-full py-4 mb-6 rounded-xl bg-indigo-50 outline-dashed px-3 outline-2 outline-indigo-500 placeholder-indigo-300 text-indigo-500 animate__animated ${
              animateSend
                ? "animate__bounceOutRight animate-delay-1000"
                : "animate__animated animate__bounceInDown animate-delay-200"
            }`}
          ></input>
          <BiSolidSend
            onClick={() => {
              setAnimateSend(false);
              setTimeout(() => {
                setAnimateSend(true);
              }, 0);
            }}
            className={`text-indigo-500 mb-6 mx-5 text-5xl animate__animated ${
              animateSend
                ? "animate__bounceOutRight animate-delay-1000"
                : "animate__animated animate__bounceInDown animate-delay-200"
            }`}
          />
        </div>
        <textarea
          placeholder="Your message"
          readOnly={animateSend}
          className={`w-7/12 pb-72 duration-300 rounded-2xl outline-dashed p-3 resize-none z-10 outline-2 placeholder-indigo-300 outline-indigo-500 text-indigo-500 animate__animated bg-indigo-50 ${
            animateSend
              ? "animate__zoomOutUp -mt-12"
              : "animate__animated animate__bounceInUp animate-delay-[400ms]"
          }`}
        ></textarea>
      </div>
    </>
  );
};

export default Contact;
