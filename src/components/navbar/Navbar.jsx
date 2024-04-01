import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-icons">
        <img src="/images/hamburger.svg" className="show-on-mobile" alt="menu" />
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className="nav-icons dont-show-on-mobile" >
        <img src="/images/search.svg" alt="search" />
        <img src="/images/hamburger.svg" alt="menu" />
      </div>
    </nav>
  );
};

export default Navbar;
