import "./ContactForm.scss";
function ContactForm() {
  return (
    <section className="contact" id="contact">
      <h3> Besoin de me contacter ?</h3>
      <h4 className="contact-text">
        Vous pouvez me joindre en remplissant ce formulaire ci-dessous ou par
        email en cliquant sur le lien un peu plus bas.
      </h4>
      <div className="form-container">
        <form className="form" id="contact-form">
          <div className="patronyme">
            <label htmlFor="nom">Nom</label>
            <div className="inputBox">
              <input
                type="text"
                id="nom"
                name="user_lastName"
                placeholder="Votre nom"
                required
              />
            </div>
            <label htmlFor="prenom">Prénom</label>
            <div className="inputBox">
              <input
                type="text"
                id="prenom"
                name="user_firstName"
                placeholder="Votre prénom"
                required
              />
            </div>
          </div>

          <label htmlFor="email">Email</label>
          <div className="inputBox">
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="Votre email"
              required
            />
          </div>

          <label htmlFor="message">Message</label>
          <div className="inputBox">
            <textarea
              id="message"
              name="message"
              required
              placeholder="Votre message"
            ></textarea>
          </div>

          <input type="submit" value="Envoyer" className="button" />
        </form>
      </div>
    </section>
  );
}
export default ContactForm;
