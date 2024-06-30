import { FaReact, FaAngular, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import "./HeroLanding.scss";
import { Link } from "react-router-dom";

function HeroLanding() {
  return (
    <div className="hero">
      <div className="container">
        <p className="highlight">CONSTRUISONS VOTRE FUTUR ENSEMBLE</p>
        <h1 className="title">Développeur web</h1>

        <div className="sub-title-container">
          <p className="sub-title">Rapidité, efficacité, maintenabilité</p>
        </div>
        <p className="description">
          Nous créons et déployons des sites web performants et modernes qui
          répondent à vos besoins.
          <h2>
            <FaReact />
            <FaAngular />
            <FaNodeJs />
            <SiMongodb />
          </h2>
        </p>
        <Link to="/home">
          <button className="button">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default HeroLanding;
