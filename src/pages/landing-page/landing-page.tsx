import Services from "../../components/all-services/allServices";
import HeroSection from "../../components/hero-section/hero-section";
import Clients from "../../components/home-page/clients/clients";
import AccordianRepresentation from "./accordian-representation/accordian-representation";
import "./landing-page.scss";

function LandingPage() {
  
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
      <div className="landing-services-container">
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
