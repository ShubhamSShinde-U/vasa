import { useSearchParams } from "react-router-dom";
import HeroSection from "../../components/hero-section/hero-section";
import AccordianRepresentation from "../landing-page/accordian-representation/accordian-representation";
import CardAdvantage from "./card-advantage/card-advantage";
import "./services-page.scss";
import { useEffect, useState } from "react";
import { Loader } from "../../sharedCompenents/loader/loader";
import NoData from "../../sharedCompenents/no-data/no-data";
function Services() {
  //Access the ID from the query parametersj
  const [searchParams] = useSearchParams();
  const [data, setData] = useState<any>(null);

  const name = searchParams.get("name");

  const [isLoading, setIsLoading] = useState(false);
  const dataToDisplay: any = {
    "end-to-end-engineering": {
      id: 1,
      titlle: "End-to-End Engineering Solutions",
      data: "The company provides comprehensive end-to-end engineering solutions for the design and development of two-wheelers. Its expertise spans the entire product lifecycle, from concept design and prototyping to testing and manufacturing support. Specializing in electric two-wheeler solutions, it focuses on creating innovative, sustainable, and energy-efficient vehicles. By leveraging advanced technologies and industry-leading methodologies, the company delivers high-quality, cost-effective engineering services. It is committed to driving innovation and helping clients excel in the",
    },
    "battery-design-expertise": {
      id: 2,
      titlle: "Battery Design Expertise",
      data: "Specialization in NMC and LFP cell-based battery design. Optimized for efficiency and safety.",
    },
    "durable-structural-design": {
      id: 3,
      titlle: "Durable Structural Design",
      data: "Extensive experience in designing durable components like frames and chassis. Expertise in swingarm design and load-bearing structures.",
    },
    "manufacturing-process-design": {
      id: 4,
      titlle: "Durable Structural Design",
      data: "Sheet metal forming Welding MachiningTube bending Casting Forging",
    },
    "plastic-design": {
      id: 5,
      titlle: "Plastic Design",
      data: "Expertise in injection molding and blow molding for plastic components.",
    },
    "benchmarking-reverse-engineering": {
      id: 6,
      titlle: "Benchmarking & Reverse Engineering",
      data: "Expertise in reverse engineering and competitor product benchmarking to improve performance.",
    },
    "static-load-analysis": {
      id: 7,
      titlle: "Static Load Analysis",
      data: "Evaluate structural strength and stiffness under various loads.",
    },
    "modal-harmonic-analysis": {
      id: 8,
      titlle: "Modal & Harmonic Analysis",
      data: "Identify potential vibration issues and analyze failure modes based on frequency response.",
    },
    "durability-analysis": {
      id: 9,
      titlle: "Durability Analysis (MBD)",
      data: "Perform durability validation through MBD to assess potential fatigue failures.",
    },
    "CFD-Analysis": {
      id: 10,
      titlle: "CFD Analysis",
      data: "Simulate fluid dynamics for cooling systems, optimizing air flow for electric components.",
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);

    if (name) {
      setData(dataToDisplay[name] || null);
    } else {
      setData(dataToDisplay["end-to-end-engineering"]);
    }
    setIsLoading(false);
  }, []);
  const features = [
    {
      id: 1,
      title: "Lightweight & sustainable ",
      icon: "assets/ic_lightweight.svg",
    },
    {
      id: 2,
      title: "Modular & customizable ",
      icon: "assets/ic_modular.svg",
    },
    {
      id: 3,
      title: "Manufacturing friendly ",
      icon: "assets/ic_manufacturing_friendly.png",
    },
  ];

  const advantages = [
    {
      title: "Agility and Speed",
      info: "Faster decision-making, quick design iterations, and the ability to adapt to market trends or client feedback rapidly",
    },
    {
      title: "Focused Innovation",
      info: " Explore bold, creative ideas and specialize in niche areas like modular designs, sustainable materials, or advanced ergonomics",
    },
    {
      title: "Market Responsiveness",
      info: "ensuring relevance and capturing opportunities faster than larger competitors",
    },
  ];

  if (isLoading) {
    return (
      <div className="page-loader">
        <Loader />
      </div>
    );
  }

  if(!isLoading && !data){
    return <NoData title={"Something went Wrong"}/>
  }
  return (
    <div className="services-page-wrapper">
      <div className="service-hero-container">
        <HeroSection
          title={data.titlle}
          span={""}
          showBtn={false}
          heroImage={"images/battery_design.jpeg"}
          info={data.data}
        />
      </div>

      <div className="service-benifits-container">
        <div className="benifits">
          <div className="secondary-sub-title each-benifit">Experience +</div>
          <div className="secondary-sub-title each-benifit">
            Engineering Excellence +
          </div>
          <div className="secondary-sub-title each-benifit">Creativity +</div>
        </div>
      </div>
      <div className="service-all-features-container">
        <div className="all-features">
          <div className="title">Benifits of VASA</div>
          <div className="sub-title">
            Delivering Value, Every Step of the Way
          </div>
          <div className="feature-wrapper">
            {features.map((feature: any) => {
              return (
                <div className="feature" key={feature.id}>
                  <img src={feature.icon} alt="" width={70} />
                  <div className="featuretitle">{feature.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="service-advantages-container">
        <div className="advantages">
          <div className="header">Advantages of Choosing Us!</div>
          <div className="all-adv">
            {advantages?.map((each: any, index: number) => {
              return (
                <CardAdvantage
                  key={index}
                  title={each.title}
                  info={each.info}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="service-accordian-representation-container">
        <AccordianRepresentation />
      </div>
    </div>
  );
}

export default Services;
