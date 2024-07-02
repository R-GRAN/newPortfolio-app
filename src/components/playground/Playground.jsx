import "@/components/playground/Playground.scss";

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
              Prenez en main l&apos;application et interagissez directement avec,
              tout se passe en en local.
            </p>
            <p className="description">Connectez vous et ajouter des projets !</p>
            <p className="description">AUCUNE INSCRIPTION NECESSAIRE, AUCUNE DONNÉE ENREGISTRÉE.</p>
            <button className="cta-button">
              Jouez avec l&apos;application
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Playground;
