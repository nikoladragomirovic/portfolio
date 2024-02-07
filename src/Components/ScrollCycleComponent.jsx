import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Showcase from "./Showcase";
import cokolada from "../Rescources/Cokolada.jpeg";
import rentasound from "../Rescources/Rent A Sound.jpeg";
import trenirai from "../Rescources/Trenirai.jpeg";
import flowmodoro from "../Rescources/Flowmodoro.jpg";
import ArrowIndicator from "./ArrowIndicator";

const showcasesData = [
  {
    name: "COKOLADA",
    imgSrc: cokolada,
    description:
      "Web portal made for a 48h hackaton challenge, backend written in Node.js, frontend done using React & TailwindCSS.",
    link: "https://github.com/nikoladragomirovic/cokolada",
  },
  {
    name: "RENT A SOUND",
    imgSrc: rentasound,
    description:
      "Web portal made for a small speaker rental business covering Novi Sad & Belgrade, you can view the catalogue with realtime information about taken speakers, and order.",
    link: "https://nikoladragomirovic.github.io/rent-a-sound/",
  },
  {
    name: "TRENIRAI",
    imgSrc: trenirai,
    description:
      "Web frontend concept application for an AI workout plan assisant, made using vanilla javascript, html, css.",
    link: "https://github.com/nikoladragomirovic/trenir-ai",
  },
  {
    name: "FLOWMODORO",
    imgSrc: flowmodoro,
    description:
      "Electron pomodoro timer application that respects the flow state (adjusts rest based on time spent working).",
    link: "https://github.com/nikoladragomirovic/flowmodoro",
  },
];

const ScrollCycleComponent = () => {
  const [currentShowcaseIndex, setCurrentShowcaseIndex] = useState(0);
  const [keyIndex, setKeyIndex] = useState(0);

  const handleKeyDown = (event) => {
    if (event.code === "ArrowDown") {
      setCurrentShowcaseIndex(
        (prevIndex) => (prevIndex + 1) % showcasesData.length
      );
    } else if (event.code === "ArrowUp") {
      setCurrentShowcaseIndex(
        (prevIndex) =>
          (prevIndex - 1 + showcasesData.length) % showcasesData.length
      );
    }

    setKeyIndex(currentShowcaseIndex);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentShowcaseIndex]);

  const currentShowcase = showcasesData[currentShowcaseIndex];

  return (
    <AnimatePresence mode="wait" className="w-full h-[84vh]">
      <motion.div
        className="w-full h-[82vh] flex items-center flex-col justify-start"
        key={keyIndex}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 100,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{ duration: 0.4 }}
      >
        <Showcase
          name={currentShowcase.name}
          imgSrc={currentShowcase.imgSrc}
          description={currentShowcase.description}
          link={currentShowcase.link}
        />
        <ArrowIndicator />
      </motion.div>
    </AnimatePresence>
  );
};

export default ScrollCycleComponent;
