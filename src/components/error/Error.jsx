import { Link } from "react-router-dom";
import { AiFillWarning } from "react-icons/ai";
import "./Error.scss";

function Error() {
  return (
    <div className="hero">
      <div className="container">
        <div>
          <AiFillWarning color="orange" size={250} />
        </div>
        <p className="highlight warning">
          OUPS, QUELQUECHOSE C&apos;EST MAL PASSÉ !
        </p>
        <h1 className="title warning">404</h1>
        <p className="highlight warning">Page non trouvée</p>
        <div className="sub-title-container">
          <p className="sub-title">
            J&apos;ai tout fouillé, je n&apos;ai rien trouvé
          </p>
        </div>
        <p className="description">
          Ne perdons pas espoir, ca doit être autre part !
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
export default Error;
