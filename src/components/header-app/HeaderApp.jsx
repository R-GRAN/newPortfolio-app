import "./HeaderApp.scss";
import laptop from "@/assets/images/laptop.svg";
import {
  BsPersonFill,
  BsPersonFillCheck,
  BsPersonFillLock,
} from "react-icons/bs";
import { ImExit } from "react-icons/im";
import { useContext, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { TokensContext } from "@/assets/utils/context/TokensContext";

function HeaderApp({ children }) {
  const [navIsOpen, setNav] = useState(false);
  const { token, fakeToken } = useContext(TokensContext);

  function handleNav() {
    setNav(!navIsOpen);
  }
  return (
    <>
      <header>
        <div className="header-nav">

       
        <Link to="/home">
          <img src={laptop} className="header-nav-logo" alt="Logo du portfolio" />
        </Link>
        <nav>
          <ul className="desktop-menu">
            <li>
              <NavLink
                to={"/home"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Accueil
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/project"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Projets
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/skills"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Compétences
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/login"}
                className={token || fakeToken ? "connected" : ""}
              >
                {fakeToken ? (
                  <BsPersonFillLock size={25} />
                ) : token ? (
                  <BsPersonFillCheck size={25} />
                ) : (
                  <BsPersonFill size={25} />
                )}
              </NavLink>
            </li>
          </ul>
          <div onClick={handleNav} className="menu-icon">
            {navIsOpen ? (
              <AiOutlineClose size={25} />
            ) : (
              <AiOutlineMenu size={25} />
            )}
          </div>
        </nav>
        <ul className={navIsOpen ? "mobile-menu open" : "mobile-menu"}>
          <div className="menu-div-title-log-indicator">
            <h1>Portfolio</h1>
            <span>
              {fakeToken ? (
                <BsPersonFillLock size={25} className="connected" />
              ) : token ? (
                <BsPersonFillCheck size={25} className="connected" />
              ) : (
                ""
              )}
            </span>
          </div>
          <li>
            <NavLink
              to={"/home"}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleNav}
            >
              Accueil
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/project"}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleNav}
            >
              Projets
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/skills"}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleNav}
            >
              Compétences
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/project/add"}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleNav}
            >
              Jouer avec l&apos;appli
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleNav}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/login"}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleNav}
            >
              {token || fakeToken ? "Se déconnecter" : "Se connecter"}
            </NavLink>
          </li>
          <li className="bottom-nav">
            <Link to={"/"} >
              Quitter l&apos;app <ImExit size={25} className="bottom-nav-icon"/>
            </Link>
          </li>
        </ul>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}

export default HeaderApp;
