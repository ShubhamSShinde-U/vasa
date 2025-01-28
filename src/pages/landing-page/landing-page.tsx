import { useLocation } from "react-router-dom";
import Services from "../../components/all-services/allServices";
import HeroSection from "../../components/hero-section/hero-section";
import Clients from "../../components/home-page/clients/clients";
import AccordianRepresentation from "./accordian-representation/accordian-representation";
import "./landing-page.scss";
import { useEffect } from "react";

function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  
  return (
    <div className="landing-page-wrapper">
      <div className="landing-hero-container">
        <HeroSection
          title={"Enhance Your Riding Experience with"}
          span={"Custom Scooter Designs"}
          heroImage={"assets/lets.png"}
          info={`Explore innovative designs crafted for unmatched performance and
          style. From custom body kits to advanced accessories, we provide
          everything you need to elevate your ride. Turn your two-wheeler into a
          true masterpiece with our expert solutions.`}
        />
      </div>
      <div className="landing-services-container" id="services1">
        <Services />
      </div>
      <div className="landing-clients-container">
        {" "}
        <Clients />
      </div>
      <div className="landing-accordian-representation-container">
        {" "}
        <AccordianRepresentation />
      </div>
    </div>
  );
}

export default LandingPage;
