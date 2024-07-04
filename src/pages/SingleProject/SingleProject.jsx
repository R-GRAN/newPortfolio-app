import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProjectsContext } from "@/assets/utils/context/ProjectsContext";
import Project from "@/components/project/Project";

function SingleProject() {
  const { id } = useParams();
  const { projects } = useContext(ProjectsContext);
  let foundProject = projects.find((project) => project._id === id);

  return (
    <>
      <section>
        <Project project={foundProject} />
      </section>
    </>
  );
}
export default SingleProject;
