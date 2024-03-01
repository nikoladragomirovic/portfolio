import React, { useRef } from "react";
import cokolada from "/Cokolada.webp";
import flowmodoro from "/Flowmodoro.webp";
import rentasound from "/Rent a Sound.webp";
import toolstack from "/ToolStack.webp";
import trenirai from "/Trenirai.webp";
import { Link } from "react-router-dom";
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
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const projects = [
  {
    image: cokolada,
    title: "Ćokolada",
    link: "https://github.com/nikoladragomirovic/cokolada",
    description:
      "Web portal made for a 48h hackaton challenge, backend written in Node.js, frontend done using React & TailwindCSS.",
    tech: [FaReact, FaNodeJs, SiTailwindcss],
  },
  {
    image: flowmodoro,
    title: "Flowmodoro",
    link: "https://github.com/nikoladragomirovic/flowmodoro",
    description:
      "Electron pomodoro timer application that respects the flow state (adjusts rest based on time spent working).",
    tech: [, IoLogoElectron, FaHtml5, FaCss3Alt],
  },
  {
    image: rentasound,
    title: "zvucnici.com",
    link: "https://zvucnici.com",
    description:
      "Web portal made for a small speaker rental business covering Novi Sad & Belgrade, you can view the catalogue with realtime information about taken speakers, and order.",
    tech: [FaReact, FaPython, SiTailwindcss],
  },
  {
    image: toolstack,
    title: "Tool Stack",
    link: "https://tool-stack.vercel.app",
    description:
      "Web developer toolbox app that supports stacking outputs and advanced drag and drop",
    tech: [FaReact, IoLogoFirebase, SiTailwindcss],
  },
  {
    image: trenirai,
    title: "Trenirai",
    link: "https://github.com/nikoladragomirovic/trenir-ai",
    description:
      "Web frontend concept application for an AI workout plan assistant, made using vanilla javascript, html, css.",
    tech: [IoLogoJavascript, FaHtml5, FaCss3Alt],
  },
];

const Wheel = ({ windowWidth }) => {
  const containerRef = useRef(null);

  const scrollTo = (scrollOffset) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div className="flex flex-row my-36 relative">
      <BiSolidLeftArrow
        className="absolute top-1/3 left-2 text-indigo-400 z-20 size-7 sm:left-10 sm:size-12 cursor-pointer"
        onClick={() => scrollTo(-windowWidth)}
      />
      <div
        ref={containerRef}
        className="min-w-full overflow-x-scroll z-10 flex flex-row snap-x scroll-smooth"
      >
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col text-center items-center justify-start min-w-full sm:px-40 px-14 py-5 snap-center"
          >
            <p className="mb-10 font-poppins font-bold text-4xl text-indigo-400">
              {project.title}
            </p>
            <Link to={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                className="rounded-3xl border-2 border-indigo-200"
                alt={project.title}
              />
            </Link>

            <div className="w-full flex flex-row mt-10 items-center justify-evenly">
              {project.tech.map((Icon, index) => (
                <div
                  key={index}
                  className="mr-4 text-indigo-400 text-2xl p-2 rounded-lg bg-indigo-300 bg-opacity-30 outline outline-1 outline-indigo-200"
                >
                  <Icon />
                </div>
              ))}
            </div>
            <p className="mt-10 text-center font-poppins font-light text-base text-indigo-500">
              {project.description}
            </p>
          </div>
        ))}
      </div>
      <BiSolidRightArrow
        className="shrink-0 absolute top-1/3 right-2 z-10 text-indigo-400 size-7 sm:right-10 sm:size-12 cursor-pointer"
        onClick={() => scrollTo(windowWidth)}
      />
    </div>
  );
};

export default Wheel;
