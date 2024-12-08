import Services from "../components/all-services/services";
import HeroSection from "../components/hero-section/hero-section";
import Clients from "../components/home-page/clients/clients";
import { accordianData } from "../constant/constant";
import Accordion from "../sharedCompenents/accordian/accordian";
import "./landing-page.scss";

function LandingPage() {
  return (
    <div className="landing-page-wrapper">
      <HeroSection />
      <Clients />
      <Services />

      <div className="all-accordian-wrapper">
        <div className="title secondary-title">Frequently Asked Questions</div>
        {accordianData.map((data, index) => {
          return (
            <Accordion key={index} index={index} title={data.title} content={data.content} />
          );
        })}
      </div>
    </div>
  );
}

export default LandingPage;
