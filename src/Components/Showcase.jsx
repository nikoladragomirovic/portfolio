import React from "react";
import { Canvas } from "@react-three/fiber";
import { Text3D, Center, Float } from "@react-three/drei";
import fontFace from "../Rescources/Poppins.json";
import { Color } from "three";
import { PiArrowArcRightLight } from "react-icons/pi";

const Showcase = ({ name, imgSrc, description }) => {
  return (
    <>
      <div className="w-full h-full">
        <Canvas>
          <ambientLight intensity={1} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={7}
            color={new Color("#818cf8")}
          />
          <Center scale={[0.8, 0.8, 1]} position={[0, 2, 0]}>
            <Float speed={4}>
              <Text3D
                font={fontFace}
                position={[0, 0, 0]}
                scale={[0.9, 0.9, 0.3]}
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
      <div className="xl:top-[26%] top-[40%] px-36 absolute flex flex-row items-center justify-between font-poppins">
        <span className="group relative hover:rotate-[4deg] duration-500 w-[80%] p-10 rounded-2xl bg-indigo-300 bg-opacity-30 backdrop-blur-sm outline-indigo-200 outline outline-1">
          <img
            className="w-full rounded-xl outline outline-indigo-50 outline-1 group-hover:rotate-[-10deg] duration-500 group-hover:-translate-x-6 group-hover:scale-105 group-hover:-translate-y-2"
            src={imgSrc}
            alt={name}
          ></img>
          <div className="flex flex-row items-center font-extralight absolute text-4xl text-indigo-500 bottom-4 right-5 opacity-0 group-hover:opacity-100 duration-500">
            open
            <PiArrowArcRightLight />
          </div>
        </span>
        <p className="text-lg w-1/2 font-light text-indigo-700 p-6">
          {description}
        </p>
      </div>
    </>
  );
};

export default Showcase;
