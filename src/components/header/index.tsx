import React, { useState, useRef, useEffect } from "react";

import { DEFAULT_LOGO as logo } from "../../constants";

import "./style.css";

const Header = (): React.ReactElement => {
  const [isSticky, setSticky] = useState<boolean>(false);
  const divEl = useRef<HTMLDivElement | null>(null);
  const handleScroll = (): void => {
    if (divEl.current) {
      setSticky(divEl.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return (): void => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <div id="header" className={isSticky ? "is-sticky" : ""} ref={divEl}>
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
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
