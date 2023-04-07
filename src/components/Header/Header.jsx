import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/grandpa">Grandpa Balance</Link>
      </nav>
    </div>
  );
};

export default Header;
