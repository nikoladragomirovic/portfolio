import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Window from "./Components/Window";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Window />
    </HashRouter>
  </React.StrictMode>
);
