import Clients from "../../components/home-page/clients/clients";
import WhyUs from "../../components/why-us/why-us";
import "./about-page.scss";

import HeroSection from "../../components/hero-section/hero-section";
import AccordianRepresentation from "../landing-page/accordian-representation/accordian-representation";
function About() {
  return (
    <div className="about-wrapper">
      <div className="about-hero-container">
        <HeroSection
          title={"What we"}
          span={"do?"}
          heroImage={"images/about-hero.png"}
          info={` "We are helping businesses redefine scooter design by blending
            innovation with engineering excellence and creating custom
            two-wheeler solutions that inspire."`}
        />
      </div>
      <div className="about-client-conainer">
        <Clients />
      </div>

      <div className="about-vision-mission-container">
        <div className="vision-mission">
          <div className="vision">
            <div className="vision-title">
              Our <span>Vision</span>
            </div>
            <div className="vision-desc">
              To be a one-stop solution provider for all the global ‘Design &
              Engineering’ needs and to promote innovations with collaborative
              engagements and maintaining highest quality standards.
            </div>
          </div>
          <div className="mission">
            <div className="mission-title">
              Our <span>Mission</span>
            </div>
            <div className="mission-desc">
              To constantly enhance and maintain our potential in providing time
              bound cost effective & right quality Engineering support to our
              customers
            </div>
          </div>
        </div>
      </div>
      <div className="about-whyus-container">
        <WhyUs />
      </div>
      <div className="about-accordian-representation-container">
        {" "}
        <AccordianRepresentation />
      </div>
    </div>
  );
}

export default About;
