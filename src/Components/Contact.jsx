import React, { useState } from "react";
import { BiSolidSend } from "react-icons/bi";
import "animate.css";
import { animate } from "framer-motion";

const Contact = () => {
  const [animateSend, setAnimateSend] = useState(false);

  return (
    <div className="w-full flex flex-row items-start justify-center">
      <div className="flex flex-col w-full items-center justify-center">
        <h1 className="font-poppins font-bold text-4xl text-indigo-500 mt-10">
          SEND ME A MESSAGE
        </h1>

        <div className="w-7/12 flex flex-row items-center justify-around">
          <input
            placeholder="Your e-mail address"
            className={`mb-6 w-full min-h-[6vh] mt-6 rounded-xl outline-dashed px-3 outline-2 outline-indigo-500 placeholder-indigo-300 text-indigo-500 animate__animated ${
              animateSend ? "animate__bounceOutRight" : ""
            }`}
          ></input>
          <BiSolidSend
            onClick={() => {
              setAnimateSend(false);
              setTimeout(() => {
                setAnimateSend(true);
              }, 0);
            }}
            className={`text-indigo-500 mx-5 text-5xl animate__animated ${
              animateSend ? "animate__bounceOutRight" : ""
            }`}
          />
        </div>
        <textarea
          placeholder="Your message"
          readOnly={animateSend}
          className={`w-7/12 min-h-[50vh] mb-10 duration-300 rounded-2xl outline-dashed p-3 resize-none z-10 outline-2 placeholder-indigo-300 text-indigo-500 animate__animated ${
            animateSend
              ? "-mt-20 delay-300 outline-indigo-400"
              : "outline-indigo-500"
          }`}
        ></textarea>
        <p
          className={`text-md font-light font-poppins text-indigo-700 duration-300 ${
            animateSend ? "opacity-1 -mt-6 delay-700" : "opacity-0"
          }`}
        >
          Message sent!
        </p>
      </div>
      <div className="flex flex-col w-full items-center justify-start mt-10">
        <h1 className="font-poppins font-bold text-4xl text-indigo-500">
          SOCIAL MEDIA
        </h1>
      </div>
    </div>
  );
};

export default Contact;
