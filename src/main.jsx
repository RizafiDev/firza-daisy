import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/vector.png";
import App from "./App.jsx";
import Navbar from "./Navbar.jsx";
import "./index.css";
import Hero from "./Hero.jsx";
import Profile from "./Profile.jsx";
import Project from "./Project.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Profile />
    <Project />
  </React.StrictMode>
);
