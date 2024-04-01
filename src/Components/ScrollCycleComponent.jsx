import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Showcase from "./Showcase";
import cokolada from "/Cokolada.webp";
import rentasound from "/Rent a Sound.webp";
import trenirai from "/Trenirai.webp";
import flowmodoro from "/Flowmodoro.webp";
import ArrowIndicator from "./ArrowIndicator";
import toolstack from "/ToolStack.webp";
import delivery from "/Delivery Detective.webp";
import { BiLogoMongodb } from "react-icons/bi";

import {
  FaNodeJs,
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoElectron, IoLogoFirebase } from "react-icons/io5";

const showcasesData = [
  {
    name: "ZVUCNICI.COM",
    imgSrc: rentasound,
    description:
      "Web portal made for a small speaker rental business covering Novi Sad & Belgrade, you can view the catalogue with realtime information about taken speakers, and order.",
    link: "https://zvucnici.com",
    tech: [FaReact, FaPython, SiTailwindcss],
  },
  {
    name: "DELIVERY DETECTIVE",
    imgSrc: delivery,
    description:
      "A web app that compares prices of the most popular delivery services in Novi Sad using their API, with user authentication",
    link: "https://github.com/nikoladragomirovic/delivery_detective",
    tech: [FaReact, FaPython, BiLogoMongodb],
  },
  {
    name: "TOOL STACK",
    imgSrc: toolstack,
    description:
      "Web developer toolbox app that supports stacking outputs and advanced drag and drop",
    link: "https://tool-stack.vercel.app",
    tech: [FaReact, IoLogoFirebase, SiTailwindcss],
  },
  {
    name: "ĆOKOLADA",
    imgSrc: cokolada,
    description:
      "Web portal made for a 48h hackaton challenge, backend written in Node.js, frontend done using React & TailwindCSS.",
    link: "https://github.com/nikoladragomirovic/cokolada",
    tech: [FaReact, FaNodeJs, SiTailwindcss],
  },
  {
    name: "FLOWMODORO",
    imgSrc: flowmodoro,
    description:
      "Electron pomodoro timer application that respects the flow state (adjusts rest based on time spent working).",
    link: "https://github.com/nikoladragomirovic/flowmodoro",
    tech: [IoLogoElectron, FaHtml5, FaCss3Alt],
  },
  {
    name: "TRENIRAI",
    imgSrc: trenirai,
    description:
      "Web frontend concept application for an AI workout plan assisant, made using vanilla javascript, html, css.",
    link: "https://github.com/nikoladragomirovic/trenir-ai",
    tech: [IoLogoJavascript, FaHtml5, FaCss3Alt],
  },
];

const ScrollCycleComponent = () => {
  const [currentShowcaseIndex, setCurrentShowcaseIndex] = useState(0);
  const [keyIndex, setKeyIndex] = useState(1);
  const [direction, setDirection] = useState(0);

  const handleKeyDown = (event) => {
    if (event.code === "ArrowDown") {
      setDirection(0);
      setTimeout(() => {
        setCurrentShowcaseIndex(
          (prevIndex) => (prevIndex + 1) % showcasesData.length
        );
        setKeyIndex(currentShowcaseIndex);
      }, 0);
    } else if (event.code === "ArrowUp") {
      setDirection(1);
      setTimeout(() => {
        setCurrentShowcaseIndex(
          (prevIndex) =>
            (prevIndex - 1 + showcasesData.length) % showcasesData.length
        );
        setKeyIndex(currentShowcaseIndex);
      }, 0);
    }
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
          y: direction ? "100%" : "-100%",
        }}
        animate={{
          y: 0,
        }}
        exit={{
          y: direction ? "-100%" : "100%",
        }}
        transition={{ duration: 0.5 }}
      >
        <Showcase
          name={currentShowcase.name}
          imgSrc={currentShowcase.imgSrc}
          description={currentShowcase.description}
          link={currentShowcase.link}
          icons={currentShowcase.tech}
        />
        <ArrowIndicator />
      </motion.div>
    </AnimatePresence>
  );
};

export default ScrollCycleComponent;
