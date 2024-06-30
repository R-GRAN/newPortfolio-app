import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@/assets/styles/main.scss";
import Home from "@/pages/Home/index.jsx";
import Contact from "@/pages/Contact/index.jsx";
import AllProjects from "@/pages/AllProjects/index";
import SingleProject from "@/pages/SingleProject/SingleProject";
import Landing from "@/pages/Landing";
import Error from "@/components/error/Error";
import HeaderWrapper from "./components/headerWrapper/HeaderWrapper";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/" element={<HeaderWrapper />}>
          <Route path="/home" element={<Home />} />
          <Route path="/project">
            <Route path="" element={<AllProjects />} />
            <Route path=":id" element={<SingleProject />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
