import emoji from "@/assets/images/emoji.webp";
import "./Presentation.scss";

function Presentation() {
  return (
    <section>
      <h3>Qui suis-je ?</h3>
      <div className="presentation-details">
        <img
          className="presentation-img"
          src={emoji}
          alt="dessin représentant Rémy"
        />
        <div className="presentation-text">
          <h4>Pourquoi ce métier ?</h4>
          <p className="presentation-p">
            J&apos;ai choisi le développement web par passion pour la
            technologie et la logique à mettre en place. J&apos;aime apprendre
            et résoudre des problèmes complexes, et le développement
            m&apos;offre l&apos;opportunité de faire tout ça au quotidien.
          </p>{" "}
          <p className="presentation-p">
            Bon j&apos;admets aussi que le haut salaire 💸 que l&apos;on
            m&apos;a fait miroiter ainsi le sentiment de liberté que l&apos;on
            m&apos;a promis avec le télétravail 🏝️ sont aussi de belles sources
            de motivation !
          </p>
          <p className="presentation-p">
            Depuis mon premier &quot;Hello World&quot;, j&apos;ai toujours
            cherché à me perfectionner et offrir le meilleur de mes compétences.
            Et aujourd&apos;hui, je suis capable de concevoir un projet en
            commencant par la partie analyse du besoin client puis passer à la
            conception de l&apos;application, jusqu&apos;à terminer par sa
            maintenance, un point bien trop souvent negligé.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Presentation;
