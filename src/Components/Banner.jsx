import React, { useRef } from "react";
import { HiAcademicCap, HiCode } from "react-icons/hi";
import { useState, useEffect } from "react";
import Sparkles from "./Sparkles";
import { useInView, motion, useAnimation } from "framer-motion";

const Banner = () => {
  const bannerAnimation = useAnimation();
  const infoAnimation = useAnimation();
  const banner = useRef(null);
  const info = useRef(null);
  const infoInView = useInView(info);
  const bannerInView = useInView(banner);

  const bannerVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
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
  }, [bannerAnimation, bannerInView, infoAnimation, infoInView]);

  return (
    <>
      <div className="flex flex-col h-[80vh] items-center w-1/2 justify-center">
        <motion.div
          variants={infoVariant}
          initial="hidden"
          animate={infoAnimation}
          transition={{ duration: 1 }}
          className="text-lg font-poppins text-indigo-700 font-light flex flex-col items-center justify-center w-full px-10 text-center"
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
          className="text-lg font-poppins mt-16 text-indigo-700 font-light flex flex-col items-center justify-center w-full px-10 text-center"
        >
          <HiCode className=" text-5xl text-indigo-400 mb-4" />
          <p>
            Knows his way around the terminal, can build you a custom linux
            kernel, but finds passion in frontend & UI/UX design.
          </p>
        </motion.div>
        <motion.div
          ref={info}
          variants={infoVariant}
          initial="hidden"
          animate={infoAnimation}
          transition={{ duration: 2 }}
          className="text-lg font-poppins mt-16 text-indigo-700 font-light flex flex-col items-center justify-center w-full px-10 text-center"
        >
          <HiCode className=" text-5xl text-indigo-400 mb-4" />
          <p>
            Knows his way around the terminal, can build you a custom linux
            kernel, but finds passion in frontend & UI/UX design.
          </p>
        </motion.div>
      </div>
      <div className="h-[80vh] flex items-center justify-center rounded-3xl animate-fade-up">
        <motion.div
          ref={banner}
          variants={bannerVariant}
          initial="hidden"
          animate={bannerAnimation}
          transition={{ duration: 1 }}
          className="flex items-center justify-center flex-col my-16"
        >
          <h1 className="text-indigo-500 font-bold font-poppins text-5xl text-center">
            I LIKE TO MAKE THINGS LOOK
          </h1>
          <Sparkles>
            <h1 className="text-indigo-500 my-36 font-rubikMaps text-9xl text-center">
              NICE
            </h1>
          </Sparkles>
          <h1 className="text-indigo-700 font-light font-poppins text-3xl text-center">
            Or at least what i view as nice
          </h1>
        </motion.div>
      </div>
    </>
  );
};

export default Banner;
