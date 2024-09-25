import emoji from "@/assets/images/emoji.webp";
import "./Presentation.scss";

function Presentation() {
  return (
    <div className="presentation-div">
        <h2 >Présentation</h2>
      <div className="presentation-details">
        <img
          className="presentation-img"
          src={emoji}
          alt="dessin représentant Rémy"
        />
        <div className="presentation-text">

          <p className="presentation-p">
          Je m&apos;appelle Rémy, et je suis développeur web, animé par une réelle passion pour les technologies et la résolution de problèmes. Curieux de nature, je prends plaisir à explorer de nouvelles approches et à continuellement apprendre pour améliorer mes compétences.
          </p>
          <p className="presentation-p">
          Depuis mes débuts, je me suis formé à l&apos;ensemble du processus de création d&apos;une application : de l&apos;analyse des besoins clients, à la conception, jusqu&apos;à la maintenance. Mon objectif est de fournir des solutions efficaces, durables et adaptées aux besoins de chaque projet.
          </p>
          <p className="presentation-p">

          Je suis motivé par l&apos;idée de contribuer à des projets innovants tout en assurant une expérience utilisateur fluide et de qualité.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Presentation;
