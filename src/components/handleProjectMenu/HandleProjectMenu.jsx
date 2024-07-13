import { useContext } from "react";
import { TokensContext } from "@/assets/utils/context/TokensContext";
import { ProjectsContext } from "@/assets/utils/context/ProjectsContext";
import { useNavigate } from "react-router-dom";
import "@/components/handleProjectMenu/HandleProjectMenu.scss";

function HandleProjectMenu({ id }) {
  const { token, fakeToken } = useContext(TokensContext);
  const { projects, setProjects } = useContext(ProjectsContext);
  const navigate = useNavigate();
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

  async function handleDeleteProject(id) {
    // Vérifier si l'ID du projet est fourni
    if (id) {
      // Créer une copie des projets
      const updatedProjects = [...projects];

      // Trouver l'index grace à l'ID
      const index = updatedProjects.findIndex((project) => project._id === id);

      //const index = updatedProjects.findIndex((project) => {project._id === id}); // Recherche l'objet ayant l'ID

      const projectTitle = updatedProjects[index].title;
      const check = prompt(
        `Vous êtes sur le point de supprimer le projet "${projectTitle}". Pour continuer, tapez : Delete .`
      );

      if (check === "Delete") {
        if (fakeToken) {
          //Retirer le projet
          updatedProjects.splice(index, 1);

          //Modifier l'état de projects
          setProjects(updatedProjects);
          alert(
            `Félicitations ! Vous venez de supprimer le projet "${projectTitle}" !`
          );
          navigate("/home");
        } else if (token) {
          const ParsedToken = JSON.parse(token);

          try {
            fetch(
              `https://portfolio-backend-seven-henna.vercel.app/api/projects/${id}`,
              {
                method: "DELETE",
                headers: {
                  Authorization: `Bearer ${ParsedToken.token}`,
                },
              }
            ).then((res) => {
              if (!res.ok) {
                (error) => console.log("error", error);
              } else {
                fetchProjects();
                alert(`Projet "${projectTitle}" supprimé`);
                navigate("/home");
              }
            });
          } catch (error) {
            console.log("error", error);
          }
        }
      } else if (check !== "Delete") {
        alert(
          `Vous semblez hésiter.. ou avez raté quelque chose.. Essayez de nouveau, si vous voulez supprimer ce projet.`
        );
        return;
      }
    }
  }

  return (
    <div className="HandleProjectMenu">
      <button className="red" onClick={() => handleDeleteProject(id)}>
        Supprimer le projet
      </button>
    </div>
  );
}
export default HandleProjectMenu;
