import { useState } from "react";
import Services from "../all-services/services";
import "./home-page.css"; // Create a CSS file for the styles
import Contact from "../contact/contact";
import Clients from "./clients/clients";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="hero-banner">
        <div className="hero-content">
          <h1>
            Enhance Your Riding Experience with  <br></br>
            <span>Custom Scooter Designs</span>
          </h1>
          <p>
            Excellence in engineering and design tailored to your unique vision.
          </p>
          <button
            onClick={() => {
              setIsModalOpen(true);
            }}
            className="cta-button"
          >
            Request Design Demo
          </button>
        </div>
        <div className="hero-image">
          <img src="assets/lets.png" alt="Custom Scooter" />
        </div>
      </header>
      {/* clients  */}
      <Clients />
      {/* services  */}
      <Services />
      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Us? </h2>
        <div className="features">
          <div className="feature">
            <i className="icon-gear"></i>
            <h3>Unparalleled Engineering</h3>
            <p>
              Advanced engineering techniques for performance and durability.
            </p>
          </div>
          <div className="feature-gap"></div>
          <div className="feature">
            <i className="icon-paintbrush"></i>
            <h3>Tailored Designs</h3>
            <p>Design every detail, from frame to finish.</p>
          </div>
          <div className="feature-gap"></div>

          <div className="feature">
            <i className="icon-leaf"></i>
            <h3>Eco-Friendly Options</h3>
            <p>Choose from sustainable materials and electric power.</p>
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Have a Vision? Let's Make It Happen!</h2>
        <p>Book a consultation with our design team today.</p>
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="cta-button"
        >
          Start Your Design Journey
        </button>
      </section>
      {/* Footer Section */}
      <footer className="footer">
        <ul>
          <li>About</li>
          <li>Custom Designs</li>
          <li>Engineering</li>
          <li>Contact Us</li>
        </ul>
        <div className="social-media">
          {/* Add your social media icons here */}
        </div>
        <p>Contact: email@example.com | +123 456 7890</p>
      </footer>

      {isModalOpen && (
        <Contact
          onClose={() => {
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default HomePage;
