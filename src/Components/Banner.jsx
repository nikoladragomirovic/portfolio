import React, { useRef } from "react";
import { HiAcademicCap, HiCode } from "react-icons/hi";
import { useState, useEffect } from "react";
import Sparkles from "./Sparkles";
import { useInView, motion, useAnimation } from "framer-motion";
import { FaPaintBrush } from "react-icons/fa";
import me from "../Rescources/Me.png";
import { TfiAngleDown } from "react-icons/tfi";

const Banner = () => {
  const bannerAnimation = useAnimation();
  const infoAnimation = useAnimation();
  const banner = useRef(null);
  const info = useRef(null);
  const scroll = useRef(null);
  const infoInView = useInView(info);
  const bannerInView = useInView(banner);
  const scrollOutView = useInView(scroll);

  const bannerVariant = {
    visible: { opacity: 1, scale: 1.048, z: 0 },
    hidden: { opacity: 0, scale: 0, z: 0 },
  };

  const infoVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    if (bannerInView) {
      bannerAnimation.start("visible");
    }
    if (infoInView) {
      infoAnimation.start("visible");
    }
  }, [bannerAnimation, bannerInView, infoAnimation, infoInView, scrollOutView]);

  return (
    <div className="w-full flex flex-col items-center justify-center bg-indigo-100">
      <div className="w-full min-h-[85vh] flex flex-col items-center justify-center">
        <img
          className="max-h-64 rounded-3xl rounded-t-3xl animate-jump-in animate-duration-1000 animate-delay-200"
          src={me}
        ></img>
        <h1 className="text-8xl font-rubikMaps mt-6 text-indigo-400 w-full text-center animate-jump-in animate-duration-1000 animate-delay-500">
          NIKOLA
          <br />
          DRAGOMIROVIĆ
        </h1>
        <p className="text-3xl font-poppins mt-6 text-indigo-500 font-light animate-fade-up animate-duration-1000 animate-delay-1000">
          A wannabe frontend developer & UI/UX engineer
        </p>
        <span
          className={`text-3xl mt-16 text-indigo-300 animate-fade-up animate-duration-1000 animate-delay-[1500ms]`}
        >
          <TfiAngleDown
            className={`${
              scrollOutView
                ? "opacity-0"
                : "animate-jump animate-duration-1000 animate-infinite"
            } -mb-4 duration-300`}
          />
          <TfiAngleDown
            className={`${
              scrollOutView
                ? "opacity-0"
                : "animate-jump animate-infinite animate-duration-1000 animate-delay-200"
            } mb-5 duration-[400ms]`}
          />
        </span>
      </div>
      <div className="flex flex-col min-h-[80vh] items-center w-1/2 justify-center">
        <motion.div
          ref={scroll}
          variants={infoVariant}
          initial="hidden"
          animate={infoAnimation}
          transition={{ duration: 1 }}
          className="text-xl font-poppins text-indigo-600 font-light flex flex-col items-center justify-center w-full px-10 text-center"
        >
          <HiAcademicCap className=" text-5xl text-indigo-400 mb-4" />
          <p>
            Computing & Automation student at the 'Faculty of Technical Sciences
            in Novi Sad'
          </p>
        </motion.div>
        <motion.div
          variants={infoVariant}
          initial="hidden"
          animate={infoAnimation}
          transition={{ duration: 1.5 }}
          className="text-xl font-poppins mt-16 text-indigo-600 font-light flex flex-col items-center justify-center w-full px-10 text-center"
        >
          <HiCode className=" text-5xl text-indigo-400 mb-4" />
          <p>
            Know my way around the terminal, can build you a backend, or a
            custom linux kernel.
          </p>
        </motion.div>
        <motion.div
          ref={info}
          variants={infoVariant}
          initial="hidden"
          animate={infoAnimation}
          transition={{ duration: 2 }}
          className="text-xl font-poppins mt-16 text-indigo-600 font-light flex flex-col items-center justify-center w-full px-10 text-center"
        >
          <FaPaintBrush className=" text-4xl text-indigo-400 mb-4" />
          <p>
            I have a passion for UI/UX design, frontend development, overall
            just like making things.
          </p>
        </motion.div>
      </div>
      <div className="min-h-[83vh] flex items-center justify-center rounded-3xl animate-fade-up">
        <motion.div
          ref={banner}
          variants={bannerVariant}
          initial="hidden"
          animate={bannerAnimation}
          transition={{ duration: 1 }}
          className="flex items-center justify-center flex-col"
        >
          <h1 className="text-indigo-400 font-bold font-poppins text-5xl text-center">
            I MAKE THINGS THAT LOOK
          </h1>
          <Sparkles>
            <h1 className="text-indigo-400 my-36 font-rubikMaps text-9xl text-center antialiased">
              NICE
            </h1>
          </Sparkles>
          <h1 className="text-indigo-500 font-light font-poppins text-3xl text-center tracking-wider">
            or at least not completely hideous
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
