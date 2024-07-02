import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleProject() {
  const { id } = useParams();
  const [project, setProject] = useState([]);

   useEffect(() => {
  async function fetchProject() {
    try {
      const res = await fetch(
        `https://portfolio-backend-seven-henna.vercel.app/api/projects/${id}`
      );
      if (!res.ok) {
        throw new Error("Erreur lors de la récupération des données");
      }
      const data = await res.json();
      setProject(data);
    } catch (error) {
      console.error("Erreur fetch:", error);
    }
  }
    fetchProject();
  }, [project]); 


  return (
    <section>
      <article className="project">
        <div className="project-img-container">
          <img
            className="project-img"
            src={project.imageUrl}
            alt={`visuel du projet "${project.title}"`}
          />
        </div>
        <div className="project-block">
          <h4>{project.title}</h4>
          <h5>{project.category}</h5>

          <p>{project.description}</p>
        </div>
      </article>
    </section>
  );
}
export default SingleProject;
