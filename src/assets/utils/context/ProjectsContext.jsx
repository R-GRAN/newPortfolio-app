import { createContext, useState,useEffect } from "react";

export const ProjectsContext = createContext();

export function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(
          "https://portfolio-backend-seven-henna.vercel.app/api/projects"
        );
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
  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
}
