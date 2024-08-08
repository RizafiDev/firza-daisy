import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/vector.png";
import App from "./App.jsx";
import Navbar from "./Navbar.jsx";
import "./index.css";
import Hero from "./Hero.jsx";
import Profile from "./Profile.jsx";
import Project from "./Project.jsx";
import Horizontal from "./Horizontal.jsx";
import Skill from "./Skill.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Horizontal />
    <Profile />
    <Horizontal />
    <Project />
    <Horizontal />
    <Skill />
  </React.StrictMode>
);
