import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useContext,
} from "react";

import { DEFAULT_LOGO as logo } from "../../constants";

import "./style.css";
import { AppContext } from "../../context/app";

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
  const { hash } = useContext(AppContext);
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
              <MenuItem
                key={item.name}
                name={item.name}
                hash={item.hash}
                active={(!hash && index === 0) || hash === item.hash}
              />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

const MenuItem = ({
  active,
  hash,
  name,
}: {
  active: boolean;
  hash: string;
  name: string;
}): React.ReactElement => (
  <li key={name} className={active ? "menu-active" : ""}>
    <a href={hash}>{name}</a>
  </li>
);

export default Header;
