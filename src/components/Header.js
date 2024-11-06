import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/CSS">CSS</NavLink>
        <NavLink to="/HTML">HTML</NavLink>
      </nav>
    </header>
  );
};

export default Header;