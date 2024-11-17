import { useState } from "react";
import "./appHeader.scss";
import Contact from "../contact/contact";

const AppHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="app-header">
      <div className="header-left">
        <div className="logo-container">
          {/* <img src="/path-to-your-logo.png" alt="VASA logo" className="logo" > */}
          <span className="company-name">VASA</span>
        </div>

        {/* Hamburger Button */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={menuOpen ? "bar open" : "bar"}></div>
          <div className={menuOpen ? "bar open" : "bar"}></div>
          <div className={menuOpen ? "bar open" : "bar"}></div>
        </div>
      </div>

      {/* Conditional rendering for the menu */}
      <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>
        <div className="menu-item ">Home</div>
        <div className="menu-item ">Services</div>
        <div className="menu-item">About</div>
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="primary-button"
        >
          Request Design Demo
        </button>
      </nav>

      {isModalOpen && (
        <Contact
          onClose={() => {
            setIsModalOpen(false);
          }}
        />
      )}
    </header>
  );
};

export default AppHeader;
