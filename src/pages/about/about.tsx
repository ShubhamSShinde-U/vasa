import "./about.scss";
function About() {
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
              // setIsContactModalOpen(true);
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

      {/* <div className="about-services-icons">
        <img src="assets/benchmark.svg" alt="" width={60} />
        <img src="assets/battery-li-ion.svg" alt="" width={60} />
        <img src="assets/settings-icon.svg" alt="" width={60} />
      </div> */}
    </div>
  );
}

export default About;
