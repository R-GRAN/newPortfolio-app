import React from "react";
import ReactDOM from "react-dom/client";
import { TokensProvider } from "@/assets/utils/context/TokensContext";
import { ProjectsProvider } from "@/assets/utils/context/ProjectsContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@/assets/styles/main.scss";

import AllProjects from "@/pages/AllProjects/index";
import SingleProject from "@/pages/SingleProject/SingleProject";
import Landing from "@/pages/Landing";
import Error from "@/components/error/Error";
import HeaderWrapper from "@/components/headerWrapper/HeaderWrapper";
import LoginFormAuth from "@/components/loginFormAuth/LoginFormAuth";
import AddProjectPage from "@/pages/AddProjectPage/AddProjectPage";
import Home from "./pages/Home/Index";
import ContactForm from "@/components/contactForm/ContactForm.jsx"
import FakeTokenForm from "@/components/fakeTokenForm/FakeTokenForm.jsx"
import Skills from "@/components/skills/Skills";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TokensProvider>
      <ProjectsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/" element={<HeaderWrapper />}>
              <Route path="/home" element={<Home />} />
              <Route path="/projects">
                <Route path="" element={<AllProjects />} />
                <Route path="add" element={<AddProjectPage />} />
                <Route path=":id" element={<SingleProject />} />
              </Route>
              <Route path="/fakeTokenForm" element={<FakeTokenForm/>}/>
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<ContactForm/>} />
              <Route path="/login" element={<LoginFormAuth />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </Router>
      </ProjectsProvider>
    </TokensProvider>
  </React.StrictMode>
);
