import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import "./HeroLanding.scss";
import { Link } from "react-router-dom";

function HeroLanding() {
  return (
    <div className="hero">
      <div className="container">
        <p className="highlight">BIENVENUE SUR MON PORTFOLIO</p>
        <h1 className="title">Rémy GRANGENOIS </h1>
        <div className="sub-title-container">
          <p className="sub-title">Développeur web</p>
        </div>
        <p className="description">
          Venez découvrir mes compétences et mon expérience à travers des
          projets concrets.
        </p>{" "}
        <h2 className="description-logos">
          <FaReact />
          <FaNodeJs />
          <SiMongodb />
        </h2>
        <Link to="/home">
          <button className="button">Cliquez ici !</button>
        </Link>
      </div>
    </div>
  );
}

export default HeroLanding;
