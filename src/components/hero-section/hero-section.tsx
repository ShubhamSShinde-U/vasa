import { useState } from "react";
import "./hero-section.scss";
import ContactForm from "../contact-form/contact-form";
import ModalMessage from "../contact-form/disaplay-message/modal-message";
function HeroSection({title,info,span,showBtn = true,heroImage}:any) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [showModalMsg, setShowModalMsg] = useState(false);
  const [msgModalData, setMsgModalData] = useState({
    type: "",
    title: "",
    subTitle: "",
  });
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <div className="primary-title">
          {title} <span className="primary-span">{span}</span>
        </div>
        <div className="primary-sub-title">
          {/* Excellence in engineering and design tailored to your unique vision. */}
          {info}
        </div>
        {showBtn && (
          <button
            onClick={() => {
              setIsContactModalOpen(true);
            }}
            className="primary-button"
          >
            Request Design Demo
          </button>
        )}
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Custom Scooter" />
      </div>
      {isContactModalOpen && (
        <ContactForm
          setMsgModalData={setMsgModalData}
          onClose={() => {
            setIsContactModalOpen(false);
          }}
          onApiCall={(type: any, subTitle: any, title: any) => {
            setIsContactModalOpen(false);
            setMsgModalData({
              title: title,
              type: type,
              subTitle: subTitle,
            });
            setShowModalMsg(true);
            // setShowSuccessMsg(true);
          }}
        />
      )}
      {showModalMsg && (
        <ModalMessage
          title={msgModalData.title}
          type={msgModalData.type}
          subTitle={msgModalData.subTitle}
          onClose={() => {
            setShowModalMsg(false);
          }}
        />
      )}
    </div>
  );
}

export default HeroSection;
