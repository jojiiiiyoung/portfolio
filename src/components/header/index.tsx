import React, { useState, useRef, useEffect, useCallback } from "react";

import { DEFAULT_LOGO as logo } from "../../constants";

import "./style.css";

const menu: IMenuItem[] = [
  { name: "Home", hash: "#main" },
  { name: "About", hash: "#about" },
  { name: "Portfolio", hash: "#portfolio" },
  { name: "Contact me", hash: "#contact" },
];

interface IMenuItem {
  name: string;
  hash: string;
}

const Header = (): React.ReactElement => {
  const [isSticky, setSticky] = useState<boolean>(false);
  const divEl = useRef<HTMLDivElement | null>(null);
  const handleScroll = useCallback((): void => {
    if (divEl.current) {
      setSticky(window.scrollY > divEl.current.getBoundingClientRect().bottom);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return (): void => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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
            {menu.map((item, index) => (
              <li
                key={item.name}
                className={
                  !window.location.hash && index === 0
                    ? "menu-active"
                    : window.location.hash === item.hash
                    ? "menu-active"
                    : ""
                }
              >
                <a href={item.hash}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
