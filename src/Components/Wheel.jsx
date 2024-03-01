import React from "react";
import cokolada from "/Cokolada.webp";
import flowmodoro from "/Flowmodoro.webp";
import rentasound from "/Rent a Sound.webp";
import toolstack from "/ToolStack.webp";
import trenirai from "/Trenirai.webp";
import { Link } from "react-router-dom";

const projects = [
  {
    image: cokolada,
    title: "Ćokolada",
    link: "https://github.com/nikoladragomirovic/cokolada",
  },
  {
    image: flowmodoro,
    title: "Flowmodoro",
    link: "https://github.com/nikoladragomirovic/flowmodoro",
  },
  {
    image: rentasound,
    title: "zvucnici.com",
    link: "https://zvucnici.com",
  },
  {
    image: toolstack,
    title: "Tool Stack",
    link: "https://tool-stack.vercel.app",
  },
  {
    image: trenirai,
    title: "Trenirai",
    link: "https://github.com/nikoladragomirovic/trenir-ai",
  },
];

const Wheel = () => {
  return (
    <div className="my-36 min-w-full overflow-x-scroll flex flex-row snap-x">
      {projects.map((project, index) => (
        <Link
          key={project.title}
          to={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-start min-w-full sm:px-40 px-14 py-5 snap-center"
        >
          <p className="mb-10 font-poppins font-bold text-4xl text-indigo-400">
            {project.title}
          </p>
          <img
            src={project.image}
            className={`rounded-3xl border-2 border-indigo-200 animate-pulse animate-duration-[3000ms] animate-delay-${
              index * 100
            }`}
            alt={project.title}
          />
        </Link>
      ))}
    </div>
  );
};

export default Wheel;
