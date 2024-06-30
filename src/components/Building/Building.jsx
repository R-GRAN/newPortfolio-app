import { Link } from "react-router-dom";
import { GrUserWorker } from "react-icons/gr";

function Building() {
  return (
    <div className="hero">
      <div className="container">
        <div>
          <GrUserWorker color="orange" size={250} />
        </div>
        <p className="highlight warning">
          EN CONSTRUCTION !
        </p>
        <h1 className="title warning" size={35}>🏗️</h1>
        <p className="highlight warning">Page en construction</p>
        <div className="sub-title-container">
          <p className="sub-title">
            Coming soon !
          </p>
        </div>
        <p className="description">
          Je travaille dessus !
        </p>
        <Link to="/home">
          <button className="button warningBackground">
            Retourner à l&apos;accueil
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Building;
