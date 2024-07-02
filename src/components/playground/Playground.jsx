import "@/components/playground/Playground.scss";
import { Link } from "react-router-dom";
function Playground() {
  return (
    <>
      <div className="playground-section">
        <div className="playground-container">
          <div className="playground-content">
            <p className="highlight-text">Faites comme chez vous</p>
            <h1 className="main-heading">
              Interagissez directement avec l&apos;application
            </h1>
            <p className="description">
              Prenez en main l&apos;application et interagissez directement
              avec, tout se passe en local.
            </p>
            <p className="description">
              Connectez vous et ajoutez des projets !
            </p>
            <p className="description">
              AUCUNE INSCRIPTION NECESSAIRE, AUCUNE DONNÉE ENREGISTRÉE.
            </p>
            <Link to="/project/add">
              <button className="cta-button">
                Jouez avec l&apos;application
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Playground;
