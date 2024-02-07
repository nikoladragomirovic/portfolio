import React from "react";
import { Canvas } from "@react-three/fiber";
import { Text3D, Center, Float } from "@react-three/drei";
import fontFace from "../Rescources/Poppins.json";
import { Color } from "three";
import { PiArrowArcRightLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";

const Showcase = ({ name, imgSrc, description, link }) => {
  return (
    <>
      <div className="w-full h-[80vh] absolute -mt-[12%]">
        <Canvas>
          <ambientLight intensity={1} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={7}
            color={new Color("#818cf8")}
          />
          <Center scale={[1, 1, 1]} position={[0, 0, 0]}>
            <Float speed={4}>
              <Text3D
                font={fontFace}
                position={[0, 0, 0]}
                scale={[1, 1, 0.6]}
                bevelEnabled
                bevelSize={0.06}
                bevelThickness={0.2}
                letterSpacing={0.1}
              >
                {name}
                <meshStandardMaterial color="#818cf8" />
              </Text3D>
            </Float>
          </Center>
        </Canvas>
      </div>
      <div className="px-36 pt-[10%] w-full h-full flex flex-row items-center justify-between font-poppins">
        <Link
          to={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative hover:rotate-[4deg] duration-500 p-8 rounded-2xl bg-indigo-300 bg-opacity-30 outline-indigo-200 outline outline-1"
        >
          <img
            className="max-w-[30rem] rounded-xl outline outline-indigo-50 outline-1 group-hover:rotate-[-10deg] duration-500 group-hover:-translate-x-6 group-hover:scale-105 group-hover:-translate-y-2"
            src={imgSrc}
            alt={name}
          ></img>
          <div className="flex flex-row items-center font-extralight absolute text-2xl text-indigo-500 bottom-3 right-4 opacity-0 group-hover:opacity-100 duration-500">
            open
            <PiArrowArcRightLight />
          </div>
        </Link>
        <div className="w-full flex flex-col items-start ml-10 py-6 px-8 bg-indigo-300 bg-opacity-30 rounded-xl outline outline-1 outline-indigo-200 z-50">
          <div className="flex flex-row w-full items-center justify-start animate-fade-up animate-duration-1000 animate-delay-[1500ms]">
            <span className={`text-xl text-indigo-400`}>
              <TfiAngleUp className="animate-jump animate-duration-1000 animate-delay-200 animate-infinite duration-300" />
              <TfiAngleUp
                className={
                  "animate-jump animate-infinite animate-duration-1000 duration-[400ms] -mt-2"
                }
              />
            </span>
            <p className="text-indigo-400 ml-5 font-light text-sm">
              Use arrow keys to cycle projects
            </p>
          </div>
          <p className="text-md h-full font-light text-indigo-700 my-[10%]">
            {description}
          </p>
          <div className="flex flex-row w-full items-center justify-start animate-fade-down animate-duration-1000 animate-delay-[1500ms]">
            <span className={`text-xl text-indigo-400`}>
              <TfiAngleDown className="animate-jump animate-duration-1000 animate-infinite -mb-2 duration-300" />
              <TfiAngleDown
                className={
                  "animate-jump animate-infinite animate-duration-1000 animate-delay-200 duration-[400ms]"
                }
              />
            </span>
            <p className="text-indigo-400 ml-5 font-light text-sm">
              Use arrow keys to cycle projects
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showcase;
