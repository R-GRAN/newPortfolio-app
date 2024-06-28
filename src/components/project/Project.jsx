import "./Project.scss";

function Project({ project, index, }) {
  return (
    <article className={index % 2 === 0 ? "project" : "project light-reverse"}>
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
  );
}

export default Project;