/* eslint-disable @typescript-eslint/no-explicit-any */
import { caeServices, services } from "../appConstant";
import ServiceCard from "./service-card/service-card";
import "./services.css";
function Services() {
  return (
    <div className="services-wrapper">
      <div className="services-all-cards-wrapper">
        <div className="service-section-title"> Our Services</div>

        <div className="services-all-cards">
          {services.map((data: any, index: number) => {
            return <ServiceCard key={index} data={data} />;
          })}
          <hr />
          {caeServices.map((data: any, index: number) => {
            return <ServiceCard key={index} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
