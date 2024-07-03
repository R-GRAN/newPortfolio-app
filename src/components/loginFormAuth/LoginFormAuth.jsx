import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "@/components/loginFormAuth/LoginFormAuth.scss";
import { TokensContext } from "@/assets/utils/context/TokensContext";

function FormAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, fakeToken, setToken, setFakeToken } =
    useContext(TokensContext);
  const navigate = useNavigate();

  //recupere les valeurs des champs email et mot de passe du formulaire
  const authentifiant = {
    email: email,
    password: password,
  };
  //formate les valeurs
  const chargeUtile = JSON.stringify(authentifiant);

  function fetchAuth(evt) {
    evt.preventDefault();

    try {
      fetch("https://portfolio-backend-seven-henna.vercel.app/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: chargeUtile,
      }).then((res) => {
        if (!res.ok) {
          alert("Mot de passe et/ou mail incorrect(s)");
        } else {
          // recupere la réponse et la formate
          res
            .json()
            //enregistre le token dans le sessionStorage
            .then((data) => {
              if (sessionStorage.getItem("fakeToken")) {
                sessionStorage.removeItem("fakeToken");
                setFakeToken(null);
              }
              sessionStorage.setItem("token", JSON.stringify(data));
              setToken(sessionStorage.getItem("token"));
              alert("Authentification réussie, bienvenue !");
              //redirige la page vers index.html
              navigate("/home");
            });
        }
      });
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <section>
      <form
        className="formAuth"
        action=""
        method="post"
        onSubmit={(evt) => {
          fetchAuth(evt);
        }}
      >
        {!token && (
          <>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(evt) => {
                setEmail(evt.target.value);
              }}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
              required
            />
            <input type="submit" value="connexion" />
          </>
        )}

        {(fakeToken || token) && (
          <>
            <hr className="bar"/>
            <Link
              to={"/"}
              onClick={(evt) => {
                evt.preventDefault();
                if (token) {
                  sessionStorage.removeItem("token");
                  setToken(null);
                  alert("Déconnexion réussie, à bientôt !");
                } else {
                  sessionStorage.removeItem("fakeToken");
                  setFakeToken(null);
                  alert("Vous avez quitté le mode invité ! Merci et à bientôt !");
                }

                navigate("/home");
              }}
            >
              <button className="orange">
                {fakeToken ? "Quitter le mode invité" : "Déconnexion"}
              </button>
            </Link>
          </>
        )}
        <Link to={"/home"}>Retourner à la page d&apos;accueil</Link>
      </form>
    </section>
  );
}

export default FormAuth;
