import "./Project.scss";

function Project({ project }) {
  return (
    <article className="project">
      <div className="project-img-container">
        <img
          className="project-img"
          src={project.imageUrl}
          alt={`visuel du projet "${project.title}"`}
        />
      </div>
      <div className="project-block">
        <h3>{project.title}</h3>
        <h4>{project.category}</h4>

        <p>{project.description}</p>
      </div>
    </article>
  );
}

export default Project;
