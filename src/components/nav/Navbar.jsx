import "./Navbar.css";
import React from "react";
import { User } from "lucide-react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState("/store");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav>
      <Link to="/" onClick={() => handleLinkClick("/store")}>
        <img
          src="/assets/websitelogo.png"
          alt="website-logo"
          className="logo"
        />
      </Link>
      <div
        className={`menu-icon ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
      </div>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li
          className={activeLink === "/" ? "active-link" : ""}
          onClick={() => handleLinkClick("/")}
        >
          Home
        </li>
        <Link to="/journey">
          <li
            className={activeLink === "/journey" ? "active-link" : ""}
            onClick={() => handleLinkClick("/journey")}
          >
            The Journey
          </li>
        </Link>
        <Link to="/team">
          <li
            className={activeLink === "/team" ? "active-link" : ""}
            onClick={() => handleLinkClick("/team")}
          >
            Team
          </li>
        </Link>
        <Link to="/">
          <li
            className={activeLink === "/store" ? "active-link" : ""}
            onClick={() => handleLinkClick("/store")}
          >
            Store
          </li>
        </Link>
        <Link to="/contact">
          <li
            className={activeLink === "/contact" ? "active-link" : ""}
            onClick={() => handleLinkClick("/contact")}
          >
            Contact
          </li>
        </Link>
      </ul>
      <div className="userAcc">
        <User />
        <p>Anwar</p>
      </div>
    </nav>
  );
}
