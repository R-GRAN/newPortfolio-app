import "./HeaderApp.scss";
import laptop from "@/assets/images/laptop.svg";

import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

function HeaderApp({ children }) {
  const [navIsOpen, setNav] = useState(false);

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
          <h1>Portfolio</h1>
          <li>
            <NavLink
              to={"/"}
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
        </ul>
      </header>
      <main>{children}</main>
    </>
  );
}

export default HeaderApp;
