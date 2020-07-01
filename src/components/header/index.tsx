import React from "react";

import { DEFAULT_LOGO as logo } from "../../constants";

import "./style.css";

const Header = (): React.ReactElement => (
  <div id="header">
    <div className="nav-container">
      <div id="logo" className="pull-left">
        <a href="#main">
          <img src={logo} alt="logo :)" />
        </a>
      </div>

      <nav id="nav-menu-container">
        <ul className="nav-menu">
          <li className="menu-active">
            <a href="#main">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
