import { createContext, useState, useEffect, useContext } from "react";
import { TokensContext } from "@/assets/utils/context/TokensContext.jsx";

export const ProjectsContext = createContext();

export function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState([]);

  const [project, setProject] = useState({
    userId: "",
    _id: Date.now().toString(),
    title: "Un tout nouveau projet",
    category: "Front end",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga repellat unde doloribus placeat maxime debitis doloremque repudiandae veritatis ratione blanditiis porro enim voluptates commodi explicabo pariatur, dolorum vitae, laborum eveniet?",
    imageUrl: "",
    githubUrl: "https://github.com/R-GRAN/",
    techniques: [
      "Réaliser le découpage sur une maquette figma",
      "Déployer un site web",
      "Utiliser les design Pattern",
    ],
    technos: ["React", "MongoDB", "Sass", "HTML", "CSS", "Figma"],
  });

  const { setToken, setFakeToken } = useContext(TokensContext);
  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("https://portfolio-backend-seven-henna.vercel.app/api/projects");
        if (!res.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Erreur fetch:", error);
      }
    }

    fetchProjects();
  }, []);

  useEffect(() => {
    function checkTokens() {
      if (sessionStorage.getItem("token")) {
        setToken(sessionStorage.getItem("token"));
      }
      if (sessionStorage.getItem("fakeToken")) {
        setFakeToken(sessionStorage.getItem("fakeToken"));
      }
    }
    checkTokens();
  }, []);
  return (
    <ProjectsContext.Provider
      value={{ projects, setProjects, project, setProject }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}
