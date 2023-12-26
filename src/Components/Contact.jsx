import React, { useState } from "react";
import { BiSolidSend } from "react-icons/bi";
import "animate.css";
import { VscGithubAlt } from "react-icons/vsc";
import { RiLinkedinLine } from "react-icons/ri";
import { RxInstagramLogo } from "react-icons/rx";

const Contact = () => {
  const [animateSend, setAnimateSend] = useState(false);

  return (
    <div className="w-full h-full overflow-hidden">
      <h1 className="w-full flex items-center justify-center mt-12 text-6xl text-indigo-500 font-rubikMaps font-bold animate__animated animate__bounceInDown">
        CONTACT
      </h1>
      <div className="w-full h-full flex flex-row items-start justify-center px-10 py-20">
        <div className="flex flex-col h-full w-full items-center justify-start">
          <h1 className="font-poppins font-bold text-4xl text-indigo-500 text-center animate__animated animate__bounceInDown">
            SEND A MESSAGE
          </h1>
          <div className="h-full w-full flex flex-col items-center justify-center">
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
        </div>
        <div className="flex flex-col h-full w-full items-center justify-start">
          <h1 className="font-poppins font-bold text-4xl text-indigo-500 animate__animated animate__bounceInRight animate-delay-[600ms]">
            SOCIAL MEDIA
          </h1>
          <div className="w-full flex h-full flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-start text-2xl font-poppins font-extralight bg-gradient-to-r text-indigo-700 from-indigo-300 p-6 w-7/12 rounded-l-2xl animate__animated animate__bounceInRight animate-delay-[800ms]  hover:text-3xl hover:pl-8 hover:py-4 duration-300">
              <VscGithubAlt className="mr-5" />
              GITHUB
            </div>
            <div className="flex flex-row mt-16 items-center justify-start text-2xl font-poppins font-extralight bg-gradient-to-r text-indigo-700 from-indigo-300 p-6 w-7/12 rounded-l-2xl animate__animated animate__bounceInRight animate-delay-[1000ms]  hover:text-3xl hover:pl-8 hover:py-4 duration-300">
              <RiLinkedinLine className="mr-5" />
              LINKEDIN
            </div>
            <div className="flex flex-row mt-16 items-center justify-start text-2xl font-poppins font-extralight bg-gradient-to-r text-indigo-700 from-indigo-300 p-6 w-7/12 rounded-l-2xl animate__animated animate__bounceInRight animate-delay-[1200ms]  hover:text-3xl hover:pl-8 hover:py-4 duration-300">
              <RxInstagramLogo className="mr-5" />
              INSTAGRAM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
