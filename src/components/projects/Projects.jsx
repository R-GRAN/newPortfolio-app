import { useContext } from "react";
import Project from "@/components/project/Project";
import AddProject from "@/components/addProject/AddProject.jsx";
import { Link } from "react-router-dom";
import { ProjectsContext } from "@/assets/utils/context/ProjectsContext.jsx";
import { TokensContext } from "@/assets/utils/context/TokensContext.jsx";

function Projets() {
  const { projects, setProjects } = useContext(ProjectsContext);
  const { token, fakeToken } = useContext(TokensContext);



  function handleAddProject(project) {
    setProjects([...projects, project]);
  }

  return (
    <>
      <section className="portfolio" id="portfolio">
        <h3>Mes réalisations</h3>
        {projects.length === 0 && token && <p>Va bosser mon grand !</p>}
        {projects.length === 0 && (
          <p>Il faudrait penser à alimenter ce portfolio !</p>
        )}
        {projects.map((project) => (
          <Link key={project._id} to={"/project/" + project._id}>
            <Project
              project={project}
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
