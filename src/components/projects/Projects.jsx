import { useContext } from "react";
import Project from "@/components/project/Project";
import AddProject from "@/components/addProject/AddProject.jsx";
import { Link } from "react-router-dom";
import { ProjectsContext } from "@/assets/utils/context/ProjectsContext.jsx";
import { TokensContext } from "@/assets/utils/context/TokensContext.jsx";

function Projets() {
  const { projects, setProject } = useContext(ProjectsContext);
  const { token, fakeToken } = useContext(TokensContext);
  const reverseProjects = [...projects].reverse();

  return (
    <>
      <section className="portfolio" id="portfolio">
        <h2>Mes réalisations</h2>
        {projects.length === 0 && token && <p>Va bosser mon grand !</p>}
        {projects.length === 0 && (
          <p>Il faudrait penser à alimenter ce portfolio !</p>
        )}
        {/* projects */reverseProjects.map((project) => (
          <Link
            key={project._id}
            to={"/projects/" + project._id}
            onClick={() => setProject(project)}
          >
            <Project project={project} />
          </Link>
        ))}
        {(fakeToken || token) && <AddProject />}
      </section>
    </>
  );
}
export default Projets;
