import React from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { useLocation, Routes, Route, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import frame from "/Window.webp";
import ScrollCycleComponent from "./ScrollCycleComponent";

const Window = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [direction, setDirection] = useState(null);
  const [animateLeftArrow, setAnimateLeftArrow] = useState(false);
  const [animateRightArrow, setAnimateRightArrow] = useState(false);
  const [deviceType, setDeviceType] = useState(null);

  const pageWheel = {
    "left/": "/contact",
    "left/projects": "/",
    "left/contact": "/projects",
    "right/": "/projects",
    "right/projects": "/contact",
    "right/contact": "/",
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 37) {
        setDirection(0);
        setTimeout(() => {
          navigate(pageWheel["right" + location.pathname]);
        }, 0);
      } else if (event.keyCode === 39) {
        setDirection(1);
        setTimeout(() => {
          navigate(pageWheel["left" + location.pathname]);
        }, 0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [location.pathname]);

  return (
    <div className="w-full h-screen flex flex-row justify-between items-center px-3 py-6 bg-indigo-50">
      <BiSolidLeftArrow
        className={`text-6xl text-indigo-300 mr-3 p-2 duration-300 ${
          animateLeftArrow ? "animate-jump" : ""
        }`}
        onClick={() => {
          setDirection(0);
          setAnimateLeftArrow(false);
          setTimeout(() => {
            setAnimateLeftArrow(true);
          });
          setTimeout(() => {
            navigate(pageWheel["left" + location.pathname]);
          }, 0);
        }}
      />
      <div
        className={`w-full h-full overflow-hidden rounded-xl relative flex items-center justify-center p-8 pt-16 outline outline-1 outline-white`}
      >
        <div
          className={`blur-3xl opacity-60 w-full h-full bg-cover absolute`}
          style={{
            backgroundImage: `url(${frame})`,
            transform: "translate3d(0,0,0) scale(1.25)",
          }}
        ></div>
        <div className="w-full h-full bg-indigo-100 rounded-lg relative outline outline-1 outline-white overflow-auto">
          <Routes>
            <Route
              path="/"
              element={
                <AnimatePresence mode="wait" className="w-full h-full">
                  <motion.div
                    className="w-full h-full"
                    key="hero"
                    initial={{
                      opacity: 0,
                      x:
                        direction == null
                          ? "0%"
                          : direction === 0
                          ? "-100%"
                          : "100%",
                      y: direction == null ? "100%" : "0%",
                    }}
                    animate={{ opacity: 1, x: "0%", y: "0%" }}
                    exit={{ opacity: 0, x: direction === 0 ? "100%" : "-100%" }}
                    transition={{ duration: 0.6 }}
                  >
                    <Banner />
                  </motion.div>
                </AnimatePresence>
              }
            />
            <Route
              path="/projects"
              element={
                <AnimatePresence mode="wait" className="w-full h-full">
                  <motion.div
                    className="w-full h-full"
                    key="projects"
                    initial={{
                      opacity: 0,
                      x:
                        direction == null
                          ? "0%"
                          : direction === 0
                          ? "-100%"
                          : "100%",
                      y: direction == null ? "100%" : "0%",
                    }}
                    animate={{ opacity: 1, x: "0%", y: "0%" }}
                    exit={{ opacity: 0, x: direction === 0 ? "100%" : "-100%" }}
                    transition={{ duration: 0.6 }}
                  >
                    <ScrollCycleComponent />
                  </motion.div>
                </AnimatePresence>
              }
            />
            <Route
              path="/contact"
              element={
                <AnimatePresence mode="wait" className="w-full">
                  <motion.div
                    className="w-full"
                    key="contact"
                    initial={{
                      opacity: 0,
                      x:
                        direction == null
                          ? "0%"
                          : direction === 0
                          ? "-100%"
                          : "100%",
                      y: direction == null ? "100%" : "0%",
                    }}
                    animate={{ opacity: 1, x: "0%", y: "0%" }}
                    exit={{ opacity: 0, x: direction === 0 ? "100%" : "-100%" }}
                    transition={{ duration: 0.6 }}
                  >
                    <Contact />
                  </motion.div>
                </AnimatePresence>
              }
            />
          </Routes>
        </div>
      </div>
      <BiSolidRightArrow
        className={`text-6xl text-indigo-300 ml-3 p-2 duration-300 ${
          animateRightArrow ? "animate-jump" : ""
        }`}
        onClick={() => {
          setDirection(1);
          setAnimateRightArrow(false);
          setTimeout(() => {
            setAnimateRightArrow(true);
          });
          setTimeout(() => {
            navigate(pageWheel["right" + location.pathname]);
          }, 0);
        }}
      />
    </div>
  );
};

export default Window;
