import { useState, useContext } from "react";
import { TokensContext } from "@/assets/utils/context/TokensContext.jsx";
import "@/components/fakeTokenForm/FakeTokenForm.scss";
import { useNavigate } from "react-router-dom";

function FakeTokenForm() {
  const { token, fakeToken, setFakeToken } = useContext(TokensContext);
  const [identifiant, setIdentifiant] = useState("azerty");
  const [password, setPassword] = useState("password1234");
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();
    if (identifiant === "azerty" && password === "password1234") {
      if (token) alert("Ne soyez pas gourmand, un Token 🪙 à la fois ");
      else if (!fakeToken) {
        alert(
          "Vous venez d'être gratifié d'un Token 🪙 dans votre session storage, profitez en !"
        );
        sessionStorage.setItem("fakeToken", "🪙");
        setFakeToken(sessionStorage.getItem("fakeToken"));
        navigate("/home");
      }
    } else {
      alert("Tout est déjà rempli, il faut juste vous identifier ! 💻");
      setIdentifiant("azerty");
      setPassword("password1234");
    }
  }

  return (
    <div className="formToken">
      <form
        action=""
        method="get"
        className="addProject-login-form"
        onSubmit={(evt) => handleSubmit(evt)}
      >
        <h2>Gerer les projets</h2>
        <label htmlFor="identifiant">Identifiant</label>
        <input
          type="text"
          name="identifiant"
          id="identifiant"
          placeholder="azerty"
          value={identifiant}
          onChange={(evt) => setIdentifiant(evt.target.value)}
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password1234"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
        />
        <button>S&apos;identifier</button>
      </form>
    </div>
  );
}

export default FakeTokenForm;
