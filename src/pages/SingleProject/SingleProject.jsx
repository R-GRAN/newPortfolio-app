import { useParams } from "react-router-dom";
import { useContext } from "react";
import { TokensContext } from "@/assets/utils/context/TokensContext";
import { ProjectsContext } from "@/assets/utils/context/ProjectsContext";
import HandleProjectMenu from "@/components/handleProjectMenu/HandleProjectMenu";
import "@/components/project/Project.scss";
import Project from "@/components/project/Project";
import AddProject from "@/components/addProject/AddProject.jsx";

function SingleProject() {
  const { id } = useParams();
  const { token, fakeToken } = useContext(TokensContext);
  const { projects } = useContext(ProjectsContext);

  let foundProject = projects.find((project) => project._id === id);
  return (
    <section>
      <Project project={foundProject} />

      <a
        className="github-link"
        href={foundProject.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Découvrir le repo GitHub</button>
      </a>
      {(token || fakeToken) && (
        <>
          <HandleProjectMenu id={id} />
          <AddProject />
        </>
      )}
    </section>
  );
}
export default SingleProject;
