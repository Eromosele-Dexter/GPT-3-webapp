import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { links } from "../../data";
import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowWidth());
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowWidth());
    }
    if (windowSize >= 1028) {
      setShow(true);
    } else {
      setShow(false);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  function getWindowWidth() {
    const { innerWidth } = window;
    return innerWidth;
  }

  return (
    <div className="Navbar">
      <div className="container">
        <img src={logo} alt="logo" className="logo" />

        {(show || toggleMenu) && (
          <div className="menu scale-up-center">
            <RiCloseLine
              onClick={() => setToggleMenu(false)}
              className="close"
            />
            <nav>
              <ul>
                {links.map((link) => {
                  return (
                    <li key={link.id}>
                      <a href={link.url}>{link.text}</a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="button-container">
              <button type="button" className="sign-in">
                Sign in
              </button>
              <button type="button" className="sign-up">
                Sign up
              </button>
            </div>
          </div>
        )}

        {!toggleMenu && <RiMenu3Line onClick={() => setToggleMenu(true)} />}
      </div>
    </div>
  );
};

export default Navbar;
