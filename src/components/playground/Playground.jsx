import "@/components/playground/Playground.scss";
import { Link } from "react-router-dom";
function Playground() {
  return (
    <>
      <div className="playground-section" id="playground">
        <div className="playground-container">
          <div className="playground-content">
            <h2 className="highlight-text">Faites comme chez vous</h2>
            <h3 className="main-heading">
              Interagissez directement avec l&apos;application
            </h3>
            <p className="description">
              Prenez en main l&apos;application et interagissez directement
              avec, tout se passe en local.
            </p>
            <p className="description">
              Connectez vous et ajoutez ou supprimer des projets !
            </p>
            <p className="description">
              AUCUNE INSCRIPTION NECESSAIRE, AUCUNE DONNÉE ENREGISTRÉE.
            </p>
            <Link to="/project/add">
              <button className="cta-button">Gérer les projets</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Playground;
