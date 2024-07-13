import { useState, useRef, useContext } from "react";
import { TokensContext } from "@/assets/utils/context/TokensContext";
import { ProjectsContext } from "@/assets/utils/context/ProjectsContext";
import "@/components/addProject/AddProject.scss";
import { useNavigate, useParams } from "react-router-dom";
import { FaSyncAlt } from "react-icons/fa";

function AddProject() {
  const formRef = useRef(null);
  const [file, setFile] = useState(null);
  const { token, fakeToken, setFakeToken } = useContext(TokensContext);
  const { projects, setProjects, project, setProject } =
    useContext(ProjectsContext);
  const navigate = useNavigate();
  const { id } = useParams();

  function getUserId() {
    if (token != null) {
      const parsedToken = JSON.parse(token);
      return parsedToken.userId;
    } else if (fakeToken != null) {
      return fakeToken;
    }
  }

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

  async function addproject() {
    const parsedToken = JSON.parse(sessionStorage.getItem("token"));

    const bodyFormData = new FormData();
    bodyFormData.append("project", JSON.stringify(project));
    bodyFormData.append("image", file);

    try {
      const response = await fetch(
        `${"https://portfolio-backend-seven-henna.vercel.app/api/projects"}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${parsedToken.token}`,
          },
          body: bodyFormData,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        alert(`Projet "${project.title}" créé !`);
        setProject({
          userId: getUserId(),
          _id: Date.now().toString(),
          title: "",
          category: "",
          description: "",
          imageUrl: "",
          githubUrl: "https://github.com/R-GRAN/",
          techniques: [],
          technos: [],
        });
        fetchProjects();
        return await response.json();
      }
    } catch (err) {
      console.error(err);
      return { error: true, message: err.message };
    }
  }

  function handleClick() {
    if (
      confirm(
        "Vous êtes sur le point de supprimer le token 🪙, vous en avez besoin pour gérer les projets. Cliquez sur OK pour le supprimer ou Annuler pour continuer ?"
      )
    ) {
      sessionStorage.removeItem("fakeToken");
      setFakeToken(null);
      alert(
        "Vous avez supprimé le token 🪙 ! Vous pouvez vous identifier à nouveau pour en récuperer un autre !"
      );
      navigate("/home");
    } else {
      alert("Vous pouvez continuer sereinement");
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setProject({ ...project, [name]: value });
  }
  function handleChangeImg(evt) {
    const { name, files } = evt.target;
    setFile(evt.target.files[0]);

    const imageUrl = URL.createObjectURL(files[0]);
    setProject({ ...project, [name]: imageUrl });
  }
  function handleChangeIntoArray(evt) {
    const { name, value } = evt.target;
    const array = value.split("-");
    setProject({ ...project, [name]: array });
  }

  async function handleSubmitAddProject(evt) {
    evt.preventDefault();

    formRef.current.reset();

    if (fakeToken) {
      setProjects([...projects, project]);
      alert(
        `Félicitations ! Vous venez de de poster le projet "${project.title}" !`
      );
      navigate(`/projects/${project._id}`);
    } else if (token) {
      addproject();
    }
  }

  function handleSubmitUpdate(evt) {
    evt.preventDefault();

    if (fakeToken) {
      const foundIndexProject = projects.findIndex(
        (project) => project._id === id
      );
      const shallowProjects = [...projects];
      if (
        confirm(
          `Vous êtes sur le point de modifier le projet "${shallowProjects[foundIndexProject].title}". Pour continuer, cliquez sur "OK" ?`
        )
      ) {
        shallowProjects[foundIndexProject] = {
          ...project,
          _id: shallowProjects[foundIndexProject]._id,
        };
        setProjects(shallowProjects);
        alert("Projet modifié avec succès");
        setProject(shallowProjects[foundIndexProject]);
        return;
      } else {
        alert("La demande de modification a été annulée");
        return;
      }
    }
    alert("Not yet");
  }

  return (
    <section className="addProject">
      <h3>Remplir le formulaire </h3>
      <form
        ref={formRef}
        id="addProject-project-form"
        className="addProject-project-form"
        action=""
        method="get"
        onSubmit={(evt) => {
          if (id == null) handleSubmitAddProject(evt);
          else {
            handleSubmitUpdate(evt);
          }
        }}
      >
        <div className="addProject-project-form-block">
          <label htmlFor="title">Nom du projet</label>
          <input
            type="text"
            name="title"
            id="title"
            value={project.title}
            placeholder="Ex : Un nouveau projet"
            required
            onChange={(evt) => handleChange(evt)}
          />

          <label htmlFor="category">Catégorie</label>
          <select
            name="category"
            id="category"
            value={project.category}
            required
            onChange={(evt) => handleChange(evt)}
          >
            <option value=""></option>
            <option value="Front end">Front end</option>
            <option value="Back end">Back end</option>
            <option value="Fullstack">Fullstack</option>
          </select>

          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={project.description}
            cols="30"
            rows="10"
            placeholder="Description du projet"
            maxLength={380}
            required
            onChange={(evt) => handleChange(evt)}
          ></textarea>
        </div>
        <div className="addProject-project-form-image">
          <label htmlFor="imageUrl">Image</label>
          <input
            className="inputFiles"
            type="file"
            name="imageUrl"
            id="imageUrl"
            accept="image/*"
            required
            onChange={(evt) => handleChangeImg(evt)}
          />

          <label htmlFor="githubUrl">Lien Github</label>
          <input
            type="text"
            name="githubUrl"
            id="githubUrl"
            value={project.githubUrl}
            placeholder="https://github.com/R-GRAN/"
            required
            onChange={(evt) => handleChange(evt)}
          />
          <label htmlFor="techniques">Techniques développées</label>
          <input
            type="text"
            name="techniques"
            id="techniques"
            value={project.techniques.join("-")}
            placeholder="Format : Réaliser le découpage d'une maquette - Intégrer une librairie externe - Mettre en œuvre des opérations CRUD"
            onChange={(evt) => handleChangeIntoArray(evt)}
          />
          <label htmlFor="technos">Technos utillisées</label>
          <input
            type="text"
            name="technos"
            id="technos"
            value={project.technos.join("-")}
            placeholder="Format : React - Yarn - MongoDB"
            onChange={(evt) => handleChangeIntoArray(evt)}
          />
          {id === null || id === undefined ? (
            <input
              type="submit"
              value="Ajouter un projet"
              className="btn-class green"
            />
          ) : (
            <input
              type="submit"
              value="Modifier un projet"
              className="btn-class biolet"
            />
          )}
        </div>
      </form>
      {fakeToken && (
        <button onClick={handleClick} className="orange">
          Supprimer le Token 🪙
        </button>
      )}
      {fakeToken && projects.length === 0 && (
        <button onClick={fetchProjects}>
          Réinitialiser les projets <FaSyncAlt className="spinArrow" />
        </button>
      )}
    </section>
  );
}
export default AddProject;
