import { useState } from "react";
import "./hero-section.scss";
import ContactForm from "../contact-form/contact-form";
import SuccessMessage from "../contact-form/success-message/success-message";
function HeroSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <div className="primary-title">
          Enhance Your Riding Experience with <br></br>
          <span className="primary-span">Custom Scooter Designs</span>
        </div>
        <div className="primary-sub-title">
          Excellence in engineering and design tailored to your unique vision.
        </div>
        <button
          onClick={() => {
            setIsContactModalOpen(true);
          }}
          className="primary-button"
        >
          Request Design Demo
        </button>
      </div>
      <div className="hero-image">
        <img src="assets/lets.png" alt="Custom Scooter" />
      </div>
      {isContactModalOpen && (
        <ContactForm
          onClose={() => {
            setIsContactModalOpen(false);
          }}
          onSuccess={() => {
            setIsContactModalOpen(false)
            setShowSuccessMsg(true)
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
    </div>
  );
}

export default HeroSection;
