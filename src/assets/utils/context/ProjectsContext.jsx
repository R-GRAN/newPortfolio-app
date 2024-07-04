import { createContext, useState,useEffect,useContext } from "react";
import { TokensContext } from "@/assets/utils/context/TokensContext.jsx";

export const ProjectsContext = createContext();


export function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const {setToken, setFakeToken } =
  useContext(TokensContext);
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

    useEffect(() => {
    function checkTokens() {
      if (sessionStorage.getItem("token")) {
        setToken(sessionStorage.getItem("token"));
      }
      if (sessionStorage.getItem("fakeToken")) {
        setFakeToken(sessionStorage.getItem("fakeToken"));
      }
    }
    checkTokens()
  },[]); 
  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
}
