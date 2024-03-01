import React from "react";
import { Canvas } from "@react-three/fiber";
import { Text3D, Center, Float } from "@react-three/drei";
import fontFace from "../Poppins.json";
import { Color } from "three";
import { PiArrowArcRightLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const Showcase = ({ name, imgSrc, description, link, icons }) => {
  return (
    <>
      <div className="w-full h-[80vh] absolute -mt-[16%]">
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
      <div className="px-36 pt-[10%] w-full h-full flex flex-row items-center justify-around font-poppins">
        <Link
          to={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative hover:rotate-[4deg] duration-500 p-8 rounded-2xl bg-indigo-300 bg-opacity-30 outline-indigo-200 outline outline-1"
        >
          <img
            className="max-w-[25rem] min-w-[25rem] min-h-[15rem] rounded-xl outline outline-indigo-50 outline-1 group-hover:rotate-[-10deg] duration-500 group-hover:-translate-x-6 group-hover:scale-105 group-hover:-translate-y-2"
            src={imgSrc}
            alt={name}
          ></img>
          <div className="flex flex-row items-center font-extralight absolute text-2xl text-indigo-500 bottom-3 right-4 opacity-0 group-hover:opacity-100 duration-500">
            open
            <PiArrowArcRightLight />
          </div>
        </Link>
        <div className="w-full flex flex-col items-start ml-10 px-8 bg-indigo-300 bg-opacity-30 rounded-xl outline outline-1 outline-indigo-200 z-50">
          <p className="text-md h-full font-light text-indigo-700 mt-8">
            {description}
          </p>
          <div className="flex items-center mb-8 mt-6">
            {icons.map((Icon, index) => (
              <div
                key={index}
                className="mr-2 p-2 bg-indigo-400 rounded-lg text-indigo-500 bg-opacity-15 border border-indigo-100 border-opacity-70"
              >
                <Icon size={24} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Showcase;
