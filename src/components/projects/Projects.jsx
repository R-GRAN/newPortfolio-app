import { useContext, useEffect } from "react";
import Project from "@/components/project/Project";
import AddProject from "@/components/addProject/AddProject.jsx";
import { Link } from "react-router-dom";
import { ProjectsContext } from "@/assets/utils/context/ProjectsContext.jsx";
import { TokensContext } from "@/assets/utils/context/TokensContext.jsx";

function Projets() {
  const { projects, setProjects } = useContext(ProjectsContext);
  const { token, fakeToken, setToken, setFakeToken } =
    useContext(TokensContext);

  useEffect(() => {
    function searchTokens() {
      if (sessionStorage.getItem("token")) {
        setToken(sessionStorage.getItem("token"));
      }
      if (sessionStorage.getItem("fakeToken")) {
        setFakeToken(sessionStorage.getItem("fakeToken"));
      }
    }
    searchTokens()
  },[]);

  function handleAddProject(project) {
    setProjects([...projects, project]);
  }

  async function handleDeleteProject(id) {
    // Vérifier si l'ID du projet est fourni
    if (id) {
      // Créer une copie des projets
      const updatedProjects = [...projects];

      // Trouver l'index grace à l'ID

      const index = updatedProjects.findIndex((key) => key._id === id); // Recherche l'objet ayant l'ID
      const projectTitle = updatedProjects[index].title;
      const check = prompt(
        `Tu es sur le point de supprimer le projet "${projectTitle}". Pour continuer, tape : Delete .`
      );

      if (check === "Delete") {
        if (fakeToken) {
          //Retirer le projet
          updatedProjects.splice(index, 1);

          //Modifier l'état de projects
          setProjects(updatedProjects);
          alert(
            `Félicitations 🎊🥳🎉 ! Tu viens de supprimer le projet "${projectTitle}"..pratiquement.. comme je le fais ! ( sauf que moi c'est pour de bon 😉 )`
          );
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
              }
            });
          } catch (error) {
            console.log("error", error);
          }
        }
      } else if (check !== "Delete") {
        alert(
          `Tu sembles hésiter.. ou tu as raté quelque chose.. Essaie de nouveau, si tu veux vraiment supprimer ce projet.`
        );
        return;
      }
    }
  }

  return (
    <>
      <section className="portfolio" id="portfolio">
        <h3>Mes réalisations</h3>
        {projects.length === 0 && token && <p>Va bosser mon grand !</p>}
        {projects.length === 0 && (
          <p>Il faudrait penser à alimenter ce portfolio !</p>
        )}
        {projects.map((project, index) => (
          <Link key={project._id} to={"/project/" + project._id}>
            <Project
              project={project}
              index={index}
              faketoken={fakeToken}
              token={token}
              handleDeleteProject={handleDeleteProject}
            />
          </Link>
        ))}
        {(fakeToken || token) && (
          <AddProject handleAddProject={handleAddProject} />
        )}
      </section>
    </>
  );
}
export default Projets;
