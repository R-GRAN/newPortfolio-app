import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "@/assets/styles/main.scss";
import HeaderApp from "./components/header-app/HeaderApp";
import Home from "./pages/Home/Index";
import Contact from "./pages/Contact/Index";
import Projets from "./pages/Projets/Index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <HeaderApp/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projets />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
