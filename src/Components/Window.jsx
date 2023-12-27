import React from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { useLocation, Routes, Route, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Banner from "./Banner";
import Contact from "./Contact";

const Window = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const navigate = useNavigate();
  const [direction, setDirection] = useState(null);
  const [animateLeftArrow, setAnimateLeftArrow] = useState(false);
  const [animateRightArrow, setAnimateRightArrow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
        className={`font-light w-full h-screen flex items-center justify-center text-indigo-800 bg-indigo-50 ${
          windowWidth < 1075 ? "" : "hidden"
        } px-10`}
      >
        Increase screen width to get the full experience &#128513;
      </motion.div>
    );

  return (
    <div className="w-full h-screen flex flex-row justify-between items-center px-2 py-10 bg-indigo-50">
      <BiSolidLeftArrow
        className={`text-6xl text-indigo-400 bg-gradient-to-r from-transparent to-indigo-300 mr-4 rounded-r-md p-2 hover:text-7xl hover:mr-6 duration-300 ${
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
        className={`w-full h-full overflow-hidden rounded-lg relative flex items-center duration-300 justify-center p-8 pt-16 outline outline-2 outline-indigo-200`}
      >
        <div className="bg-[url('https://cdn.dribbble.com/users/5520917/screenshots/15604939/media/777c7c72d99b1335909d6f7d6e2a974c.gif')] blur-3xl scale-125 opacity-75 w-full h-full bg-cover absolute"></div>
        <div className="w-full h-full bg-indigo-100 rounded-lg relative outline outline-2 outline-indigo-200 overflow-auto">
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
                          ? "100%"
                          : "-100%",
                      y: direction == null ? "100%" : "0%",
                    }}
                    animate={{ opacity: 1, x: "0%", y: "0%" }}
                    exit={{ opacity: 0, x: direction === 0 ? "-100%" : "100%" }}
                    transition={{ duration: 0.4 }}
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
                          ? "100%"
                          : "-100%",
                      y: direction == null ? "100%" : "0%",
                    }}
                    animate={{ opacity: 1, x: "0%", y: "0%" }}
                    exit={{ opacity: 0, x: direction === 0 ? "-100%" : "100%" }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="w-full h-full flex items-center justify-center text-black">
                      PROJECTS
                    </p>
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
                          ? "100%"
                          : "-100%",
                      y: direction == null ? "100%" : "0%",
                    }}
                    animate={{ opacity: 1, x: "0%", y: "0%" }}
                    exit={{ opacity: 0, x: direction === 0 ? "-100%" : "100%" }}
                    transition={{ duration: 0.4 }}
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
        className={`text-6xl text-indigo-400 bg-gradient-to-l from-transparent to-indigo-300 ml-4 rounded-l-md p-2 hover:text-7xl hover:scale-x-125 hover:ml-6 duration-300 ${
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
