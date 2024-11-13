import "./hero-section.scss";
function HeroSection() {
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
            // setIsModalOpen(true);
          }}
          className="primary-button"
        >
          Request Design Demo
        </button>
      </div>
      <div className="hero-image">
        <img src="assets/lets.png" alt="Custom Scooter" />
      </div>
    </div>
  );
}

export default HeroSection;
