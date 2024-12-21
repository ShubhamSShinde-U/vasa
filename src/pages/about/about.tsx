import { useState } from "react";
import Clients from "../../components/home-page/clients/clients";
import WhyUs from "../../components/why-us/why-us";
import "./about.scss";
import ContactForm from "../../components/contact-form/contact-form";
import ModalMessage from "../../components/contact-form/disaplay-message/modal-message";
function About() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [msgModalData, setMsgModalData] = useState({
    type: "",
    title: "",
    subTitle: "",
  });
  return (
    <div className="about-wrapper">
      <div className="about-hero">
        <div className="about-hero-title ">
          <div className="primary-title">What we do?</div>
          <div className="secondary-title">
            "We are helping businesses redefine scooter design by blending
            innovation with engineering excellence and creating custom
            two-wheeler solutions that inspire."
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
        <div className="about-img-container">
          <img src="images/about-hero.png" alt="" />
        </div>
      </div>
      <div className="about-vision">
        <div className="vision-icon-text">
          {/* <img src="assets/vision.svg" width={90} alt="" /> */}
          <div className="primary-title">
            Our <span className="primary-span">Vision</span>
          </div>
        </div>
        <div className="vision-desc primary-sub-title">
          To be a one-stop solution provider for all the global ‘Design &
          Engineering’ needs and to promote innovations with collaborative
          engagements and maintaining highest quality standards.
        </div>
      </div>
      <WhyUs />
      <Clients />
      {isContactModalOpen && (
        <ContactForm
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
            // setShowModalMsg(true);
            setShowSuccessMsg(true);
          }}
        />
      )}
      {showSuccessMsg && (
        <ModalMessage
          title={msgModalData.title}
          type={msgModalData.type}
          subTitle={msgModalData.subTitle}
          onClose={() => {
            setShowSuccessMsg(false);
          }}
        />
      )}
    </div>
  );
}

export default About;
