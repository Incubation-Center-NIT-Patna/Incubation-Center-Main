import React, { useEffect, useState } from 'react';
import { ic_logo, nitp_logo, tinkering_lab, nitp_main } from '../../constants/const';
import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.scrollY > 0;
  });
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarStyle = {
    padding: scrolled ? "6px 25px 4px" : "10px 9% 6px",
    background: scrolled ? "rgba(0, 0, 0, 0.45)" : "transparent",
    backdropFilter: scrolled ? "blur(4px)" : "blur(0)",
    transition: "all 0.3s ease",
  };

  const headerStyle = {
    top: "0px",
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveMobileMenu("");
  };

  const toggleMobileMenu = (menuName) => {
    setActiveMobileMenu((currentMenu) =>
      currentMenu === menuName ? "" : menuName
    );
  };

  return (
    <div
      className={`headerContainer ${scrolled ? "scrolled" : ""}`}
      style={headerStyle}
    >
      <header className="header" style={navbarStyle}>
        <a href={nitp_main} className="logo1"><img src={ nitp_logo } alt="NITP_logo" /></a>
        <nav className="navbar">
          <div className="link">
            <Link to="/#home">Home</Link>
          </div>

          <div className="link">
            <Link to="/#about">About Us</Link>
            <div className="tabInner">
              <Link to="/#vision">Our Vision</Link>
              <Link to="/#support">Our Support</Link>
            </div>
          </div>

          <div className="link">
            <Link to="/#incubations">Incubations</Link>
            <div className="tabInner">
              <Link to="/#darki">Directors</Link>
              <Link to="/#talks">Talks about us!</Link>
            </div>
          </div>

          <Link to="/#events" className="link">Events</Link>
          <Link to="/#gallery" className="link">Gallery</Link>

          <div className="link">
            <Link to="/professor">Team</Link>
            <div className="tabInner">
              <Link to="/professor">Professors</Link>
              <Link to="/student">Students</Link>
              <Link to="/admin">Admin</Link>
            </div>
          </div> 
          <a href={tinkering_lab} className='link' download="Tinkering Lab">Tinkering lab</a>
        </nav>

        {!isOpen && (
          <button
            className="menu"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        )}

        {isOpen && (
          <div className="mobileMenuContainer">
            <div className="mobileMenu">
              <Link className="mobileMenuLink" onClick={closeMobileMenu} to="/#home">Home</Link>

              <div className="mobileMenuGroup">
                <div className={`mobileMenuToggle ${activeMobileMenu === "about" ? "active" : ""}`}>
                  <Link onClick={closeMobileMenu} to="/#about">About Us</Link>
                  <button
                    onClick={() => toggleMobileMenu("about")}
                    type="button"
                    aria-label="Open About Us links"
                  >
                    ⌄
                  </button>
                </div>
                <div className={`mobileSubMenu ${activeMobileMenu === "about" ? "open" : ""}`}>
                  <Link onClick={closeMobileMenu} to="/#vision">Our Vision</Link>
                  <Link onClick={closeMobileMenu} to="/#support">Our Support</Link>
                </div>
              </div>

              <div className="mobileMenuGroup">
                <div className={`mobileMenuToggle ${activeMobileMenu === "incubations" ? "active" : ""}`}>
                  <Link onClick={closeMobileMenu} to="/#incubations">Incubations</Link>
                  <button
                    onClick={() => toggleMobileMenu("incubations")}
                    type="button"
                    aria-label="Open Incubations links"
                  >
                    ⌄
                  </button>
                </div>
                <div className={`mobileSubMenu ${activeMobileMenu === "incubations" ? "open" : ""}`}>
                  <Link onClick={closeMobileMenu} to="/#darki">Directors</Link>
                  <Link onClick={closeMobileMenu} to="/#talks">Talks about us!</Link>
                </div>
              </div>

              <Link className="mobileMenuLink" onClick={closeMobileMenu} to="/#events">Events</Link>
              <Link className="mobileMenuLink" onClick={closeMobileMenu} to="/#gallery">Gallery</Link>

              <div className="mobileMenuGroup">
                <button
                  className={`mobileMenuToggle ${activeMobileMenu === "team" ? "active" : ""}`}
                  onClick={() => toggleMobileMenu("team")}
                  type="button"
                >
                  Team <span>⌄</span>
                </button>
                <div className={`mobileSubMenu ${activeMobileMenu === "team" ? "open" : ""}`}>
                  <Link onClick={closeMobileMenu} to="/professor">Professors</Link>
                  <Link onClick={closeMobileMenu} to="/student">Students</Link>
                  <Link onClick={closeMobileMenu} to="/admin">Admin</Link>
                </div>
              </div>

              <a
                className="mobileMenuLink"
                href={tinkering_lab}
                target="_blank"
                rel="noreferrer"
                onClick={closeMobileMenu}
              >
                Tinkering lab
              </a>
            </div>

            <button
              onClick={closeMobileMenu}
              className="crossBtn"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
        )}

        <a className="logo2" href="/">
          <img src={ ic_logo } alt="Incubation Centre logo" />
        </a>
      </header>
    </div>
  );
};

export default Navbar;