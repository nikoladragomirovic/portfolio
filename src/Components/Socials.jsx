import React from "react";
import "animate.css";
import { ImGithub } from "react-icons/im";
import { RiLinkedinLine } from "react-icons/ri";
import { RxInstagramLogo } from "react-icons/rx";
import { FiArrowUpRight } from "react-icons/fi";
import { BiSolidSend } from "react-icons/bi";
import { Canvas } from "@react-three/fiber";
import { Text3D, Center, Float } from "@react-three/drei";
import fontFace from "../Poppins.json";
import { Color } from "three";
import mail from "/Mail.webp";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <p className="font-rubikMaps text-4xl text-indigo-400">Socials</p>
      <div className="flex flex-row w-full justify-evenly items-center px-10 mt-10 mb-32">
        <div className="animate__animated animate__zoomInDown animate-delay-[1400ms] flex">
          <Link
            to="https://github.com/nikoladragomirovic"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 rounded-lg hover:rotate-[23deg] relative duration-300 hover:translate-y-1 bg-indigo-300 bg-opacity-30 outline outline-1 outline-indigo-200"
          >
            <ImGithub className="text-2xl text-indigo-400 group-hover:text-indigo-500 group-hover:-translate-x-5 group-hover:-rotate-[32deg] duration-300" />
            <FiArrowUpRight className="absolute top-0 right-0 opacity-0 text-indigo-500 text-xs duration-300 group-hover:opacity-100 group-hover:scale-150 group-hover:-translate-x-1 group-hover:translate-y-1" />
          </Link>
        </div>
        <div className="animate__animated animate__zoomInDown animate-delay-[1600ms] flex">
          <Link
            to="https://www.linkedin.com/in/nikola-dragomirović-374343299/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 rounded-lg hover:rotate-[23deg] mx-10 duration-300 hover:translate-y-1 bg-indigo-300 bg-opacity-30 outline outline-1 outline-indigo-200"
          >
            <RiLinkedinLine className="text-2xl text-indigo-400 group-hover:text-indigo-500 group-hover:-translate-x-5 group-hover:-rotate-[32deg] duration-300" />
            <FiArrowUpRight className="absolute top-0 right-0 opacity-0 text-indigo-500 text-xs duration-300 group-hover:opacity-100 group-hover:scale-150 group-hover:-translate-x-1 group-hover:translate-y-1" />
          </Link>
        </div>
        <div className="animate__animated animate__zoomInDown animate-delay-[1800ms] flex">
          <Link
            to="https://www.instagram.com/niledragomirovic/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 rounded-lg hover:rotate-[23deg] duration-300 hover:translate-y-1 bg-indigo-300 bg-opacity-30 outline outline-1 outline-indigo-200"
          >
            <RxInstagramLogo className="text-2xl text-indigo-400 group-hover:text-indigo-500 group-hover:-translate-x-5 group-hover:-rotate-[32deg] duration-300" />
            <FiArrowUpRight className="absolute top-0 right-0 opacity-0 text-indigo-500 text-xs duration-300 group-hover:opacity-100 group-hover:scale-150 group-hover:-translate-x-1 group-hover:translate-y-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Socials;
