import React from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { useLocation, Routes, Route, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import frame from "/Window.gif";
import ScrollCycleComponent from "./ScrollCycleComponent";

const Window = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const navigate = useNavigate();
  const [direction, setDirection] = useState(null);
  const [animateLeftArrow, setAnimateLeftArrow] = useState(false);
  const [animateRightArrow, setAnimateRightArrow] = useState(false);
  const [deviceType, setDeviceType] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      )
    ) {
      setDeviceType("mobile");
    } else {
      setDeviceType("desktop");
    }
  }, []);

  const pageWheel = {
    "left/": "/contact",
    "left/projects": "/",
    "left/contact": "/projects",
    "right/": "/projects",
    "right/projects": "/contact",
    "right/contact": "/",
  };

  if (windowWidth < 1075)
    return (
      <motion.div
        key="tip"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className={`font-light w-full h-screen flex items-center justify-center text-indigo-600 bg-indigo-50 ${
          windowWidth < 1075 ? "" : "hidden"
        } px-10`}
      >
        {`${
          deviceType === "desktop"
            ? "Increase screen width to get the full experience 😁"
            : "Mobile version coming soon, for now visit the portfolio on desktop 😁"
        }`}
      </motion.div>
    );

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
