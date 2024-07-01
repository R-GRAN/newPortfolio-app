import "./HeaderApp.scss";
import laptop from "@/assets/images/laptop.svg";
import {
  BsPersonFill,
  BsPersonFillCheck,
  BsPersonFillLock,
} from "react-icons/bs";
import { useContext, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { TokenContext } from "@/assets/utils/context/TokenContext";
import { FakeTokenContext } from "@/assets/utils/context/FakeTokenContext";

function HeaderApp({ children }) {
  const [navIsOpen, setNav] = useState(false);
  const { token } = useContext(TokenContext);
  const { fakeToken } = useContext(FakeTokenContext);

  function handleNav() {
    setNav(!navIsOpen);
  }
  return (
    <>
      <header className="header">
        <Link to="/home">
          <img src={laptop} className="header-logo" alt="Logo du portfolio" />
        </Link>
        <nav>
          <ul className="desktop-menu">
            <li>
              <NavLink
                to={"/home"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
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
              <Link to={"/login"}>
                {token ? (
                  <BsPersonFillCheck size={25} />
                ) : (
                  <BsPersonFill size={25} />
                )}
              </Link>
            </li>
          </ul>
          <div onClick={handleNav} className="menu-icon">
            {navIsOpen ? (
              <AiOutlineClose size={20} />
            ) : (
              <AiOutlineMenu size={20} />
            )}
          </div>
        </nav>
        <ul className={navIsOpen ? "mobile-menu open" : "mobile-menu"}>
          <div className="menu-div-title-log-indicator">
            <h1>Portfolio</h1>
            <span>{fakeToken ? <BsPersonFillLock size={25} /> : ""}</span>
          </div>
          <li>
            <NavLink
              to={"/home"}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleNav}
            >
              Home
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
          {fakeToken && (
            <li>
              <NavLink
                to={"/project/add"}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleNav}
              >
                Ajouter un projet
              </NavLink>
            </li>
          )}

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
              {token ? "Logout" : "Login"}
            </NavLink>
          </li>
        </ul>
      </header>
      <main>{children}</main>
    </>
  );
}

export default HeaderApp;
