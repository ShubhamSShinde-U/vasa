import { useState } from "react";
import "./appHeader.scss";
// import Contact from "../contact/contact";
import { useLocation, useNavigate } from "react-router-dom";
import ContactForm from "../contact-form/contact-form";
import SuccessMessage from "../contact-form/success-message/success-message";

const AppHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Define navigation items with paths
  const navItems = [
    { name: "Home", path: "/home", value: "/home" },
    { name: "Services", path: "/services", value: "/services" },
    { name: "About", path: "/about", value: "/about" },
  ];
  const navigate = useNavigate();

  return (
    <header className="app-header">
      <div className="header-left">
        <div className="logo-container">
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
        {navItems.map((item) => (
          <div
            key={item.path}
            onClick={() => {
              toggleMenu();
              navigate(item.path);
            }}
            className={`menu-item ${
              location.pathname === item.value ? "current-active-tab" : ""
            }`}
          >
            {item.name}
          </div>
        ))}
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
        <ContactForm
          onClose={() => {
            setIsModalOpen(false);
          }}
          onSuccess={() => {
            setIsModalOpen(false);
            setShowSuccessMsg(true);
          }}
        />
      )}
      {showSuccessMsg && (
        <SuccessMessage
          onClose={() => {
            setShowSuccessMsg(false);
          }}
        />
      )}
    </header>
  );
};

export default AppHeader;
