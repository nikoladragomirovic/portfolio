import React, { useState } from "react";
import "animate.css";
import { ImGithub } from "react-icons/im";
import { RiLinkedinLine } from "react-icons/ri";
import { RxInstagramLogo } from "react-icons/rx";
import { FiArrowUpRight } from "react-icons/fi";
import { BiSolidSend } from "react-icons/bi";
import { Canvas } from "@react-three/fiber";
import { Text3D, Center, Float } from "@react-three/drei";
import fontFace from "../Rescources/Poppins.json";
import { Color } from "three";
import mail from "../Rescources/Mail.webp";
import { Link } from "react-router-dom";

const Contact = () => {
  const [animateSend, setAnimateSend] = useState(false);
  const [comebackKey, setComebackKey] = useState(1);

  return (
    <>
      <h1 className="w-full h-[84vh] absolute flex items-center justify-center">
        <Canvas>
          <ambientLight intensity={1} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={7}
            color={new Color("#818cf8")}
          />
          <Center scale={[1, 1, 1]} position={[0, 2.7, 0]}>
            <Float speed={4}>
              <Text3D
                font={fontFace}
                position={[0, 0, 0]}
                scale={[0.5, 0.5, 0.3]}
                bevelEnabled
                bevelSize={0.06}
                bevelThickness={0.2}
                letterSpacing={0.1}
              >
                SEND ME A MESSAGE
                <meshStandardMaterial color="#818cf8" />
              </Text3D>
            </Float>
          </Center>
        </Canvas>
      </h1>
      <div className="absolute w-full h-[80vh] translate-x-36 -rotate-12 flex items-center justify-start">
        <img className="max-w-72 animate-pulse" src={mail}></img>
      </div>
      <div className="w-full h-[84vh] mt-10 flex flex-col items-center justify-center">
        <div className="w-7/12 flex flex-row z-20 items-center justify-center">
          <input
            key={comebackKey}
            placeholder="Your e-mail address"
            className={`w-full py-4 rounded-xl z-30 bg-indigo-200 backdrop-blur-sm bg-opacity-45 duration-500 outline px-3 outline-1 outline-indigo-200 focus:bg-indigo-50 focus:bg-opacity-45 placeholder-indigo-300 font-poppins text-indigo-600  ${
              animateSend
                ? "animate__animated animate__bounceOutRight animate-delay-1000"
                : "animate__animated animate__bounceInLeft animate-delay-[600ms]"
            }`}
            readOnly={animateSend}
          ></input>
          <BiSolidSend
            onClick={() => {
              setAnimateSend(true);
              setTimeout(() => {
                setAnimateSend(false);
                setComebackKey(comebackKey + 1);
              }, 2200);
            }}
            className={`text-indigo-400 text-5xl animate__animated ml-4 mr-2 ${
              animateSend
                ? "animate__bounceOutRight animate-delay-1000"
                : "animate__animated animate__bounceInLeft animate-delay-[600ms]"
            }`}
          />
        </div>
        <p
          className={`text-indigo-500 duration-300 text-light font-light text-xl ${
            animateSend
              ? "opacity-100 delay-[1400ms] translate-y-36"
              : "opacity-0"
          }`}
        >
          Message Sent!
        </p>
        <textarea
          placeholder="Your message"
          key={comebackKey}
          readOnly={animateSend}
          className={`w-7/12 pb-64 duration-500 rounded-2xl outline z-10 p-3 resize-none outline-1 placeholder-indigo-300 outline-indigo-200 focus:bg-indigo-50 focus:bg-opacity-45 font-poppins text-indigo-500 animate__animated bg-indigo-200 bg-opacity-45 backdrop-blur-sm ${
            animateSend
              ? "animate__animated animate__zoomOutUp -mt-7 mb-7"
              : "animate__animated animate__zoomInDown animate-delay-[1000ms]"
          }`}
        ></textarea>
        <div className="flex w-full flex-row items-center justify-center mt-20">
          <h1 className="text-3xl font-poppins font-bold text-indigo-400 mx-20 animate__animated animate__zoomInDown animate-delay-[1200ms] tracking-wider">
            SOCIALS
          </h1>
          <div className="animate__animated animate__zoomInDown animate-delay-[1400ms] flex">
            <Link
              to="https://github.com/nikoladragomirovic"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-lg bg-indigo-200 hover:rotate-[23deg] relative duration-300 hover:translate-y-1"
            >
              <ImGithub className="text-4xl text-indigo-400 group-hover:text-indigo-500 group-hover:-translate-x-7 group-hover:-rotate-[32deg] duration-300" />
              <FiArrowUpRight className="absolute top-0 right-0 opacity-0 text-indigo-500 duration-300 group-hover:opacity-100 group-hover:scale-150 group-hover:-translate-x-2 group-hover:translate-y-2" />
            </Link>
          </div>
          <div className="animate__animated animate__zoomInDown animate-delay-[1600ms] flex">
            <Link
              to="https://www.linkedin.com/in/nikola-dragomirović-374343299/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-lg bg-indigo-200 hover:rotate-[23deg] duration-300 hover:translate-y-1 mx-36"
            >
              <RiLinkedinLine className="text-4xl text-indigo-400 group-hover:text-indigo-500 group-hover:-translate-x-7 group-hover:-rotate-[32deg] duration-300" />
              <FiArrowUpRight className="absolute top-0 right-0 opacity-0 text-indigo-500 duration-300 group-hover:opacity-100 group-hover:scale-150 group-hover:-translate-x-2 group-hover:translate-y-2" />
            </Link>
          </div>
          <div className="animate__animated animate__zoomInDown animate-delay-[1800ms] flex">
            <Link
              to="https://www.instagram.com/niledragomirovic/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-lg bg-indigo-200 hover:rotate-[23deg] duration-300 hover:translate-y-1"
            >
              <RxInstagramLogo className="text-4xl text-indigo-400 group-hover:text-indigo-500 group-hover:-translate-x-7 group-hover:-rotate-[32deg] duration-300" />
              <FiArrowUpRight className="absolute top-0 right-0 opacity-0 text-indigo-500 duration-300 group-hover:opacity-100 group-hover:scale-150 group-hover:-translate-x-2 group-hover:translate-y-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
