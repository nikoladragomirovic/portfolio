import React, { useState, useEffect } from "react";
import Window from "./Components/Window";
import Stream from "./Components/Stream";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowWidth < 1075) {
    return <Stream />;
  } else {
    return <Window />;
  }
};

export default App;
