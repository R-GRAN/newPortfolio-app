import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "@/assets/styles/main.scss";
import HeaderApp from "./components/header-app/HeaderApp";
import Home from "./pages/Home/index";
import Contact from "./pages/Contact/index";
import Projets from "./pages/Projets";
import SingleProject from "./pages/SingleProject/SingleProject";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <HeaderApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project">
          <Route path="" element={<Projets />} />
          <Route path=":id" element={<SingleProject />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
