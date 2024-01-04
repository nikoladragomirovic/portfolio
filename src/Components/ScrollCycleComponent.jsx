import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RentASound from "./RentASound";
import Trenirai from "./Trenirai";
import Cokolada from "./Cokolada";

const components = [RentASound, Trenirai, Cokolada];
const cooldownTime = 1500;

const ScrollCycleComponent = () => {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const [lastScrollTime, setLastScrollTime] = useState(0);
  const [keyIndex, setKeyIndex] = useState(0);

  const handleScroll = (event) => {
    const currentTime = new Date().getTime();
    const deltaY = event.deltaY;

    if (currentTime - lastScrollTime > cooldownTime) {
      if (deltaY > 0) {
        setCurrentComponentIndex(
          (prevIndex) => (prevIndex + 1) % components.length
        );
      } else {
        setCurrentComponentIndex(
          (prevIndex) => (prevIndex - 1 + components.length) % components.length
        );
      }

      setLastScrollTime(currentTime);
      setKeyIndex(keyIndex + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [lastScrollTime]);

  const ComponentToRender = components[currentComponentIndex];

  return (
    <AnimatePresence mode="wait" className="w-full h-full">
      <motion.div
        className="w-full h-[80vh]"
        key={keyIndex}
        initial={{
          y: "-100%",
        }}
        animate={{
          y: "0%",
        }}
        exit={{
          y: "100%",
        }}
        transition={{ duration: 0.4 }}
      >
        <ComponentToRender />
      </motion.div>
    </AnimatePresence>
  );
};

export default ScrollCycleComponent;
