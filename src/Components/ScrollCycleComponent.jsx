// ScrollCycleComponent.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";

const components = [Component1, Component2, Component3];
const cooldownTime = 1500;

const ScrollCycleComponent = () => {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const [lastScrollTime, setLastScrollTime] = useState(0);
  const [keyIndex, setKeyIndex] = useState(0);

  const handleScroll = () => {
    const currentTime = new Date().getTime();
    if (currentTime - lastScrollTime > cooldownTime) {
      setCurrentComponentIndex(
        (prevIndex) => (prevIndex + 1) % components.length
      );
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
        className="w-full"
        key={keyIndex}
        initial={{
          opacity: 0,
          y: "-100%",
        }}
        animate={{ opacity: 1, y: "0%" }}
        exit={{ opacity: 0, y: "100%" }}
        transition={{ duration: 0.4 }}
      >
        <ComponentToRender />
      </motion.div>
    </AnimatePresence>
  );
};

export default ScrollCycleComponent;
