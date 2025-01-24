import { accordianData } from "../../constant/constant";
import Accordion from "../../sharedCompenents/accordian/accordian";
import CardAdvantage from "./card-advantage/card-advantage";
import "./services.scss";
function Services() {
  const features = [
    {
      id: 1,
      title: "Lightweight & sustainable design",
      icon: "assets/ic_lightweight.svg",
    },
    {
      id: 2,
      title: "Modular & customizable design",
      icon: "assets/ic_modular.svg",
    },
    {
      id: 3,
      title: "Manufacturing friendly design",
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
  return (
    <div className="services-page-wrapper">
      <div className="hero-section">
        <div className="hero-section-info">
          <div className="title secondary-title">
            Battery Design <span>Expertise</span>
          </div>
          <div className="sub-title secondary-sub-title">
            we specialize in crafting innovative, high-performance battery
            solutions tailored to power the future of electric mobility and
            beyond. From concept to prototype, our expert team delivers
            cutting-edge designs that balance efficiency, durability, and
            sustainability
          </div>
        </div>
        <div className="hero-image">
          <img src="images/battery_design.jpeg" />
        </div>
      </div>
      <div className="benifits">
        <div className="secondary-sub-title each-benifit">Experience +</div>
        <div className="secondary-sub-title each-benifit">
          Engineering Excellence +
        </div>
        <div className="secondary-sub-title each-benifit">Creativity +</div>
      </div>
      <div className="all-features">
        <div className="title">Benifits of VASA</div>
        <div className="sub-title">Delivering Value, Every Step of the Way</div>
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
      <div className="advantages">
        <div className="header">Advantages of Choosing Us!</div>
        <div className="all-adv">
          {advantages?.map((each:any) => {
            return <CardAdvantage 
              title={each.title}
              info={each.info}
            />;
          })}
        </div>
      </div>
      <div className="accordian-data">
        <div className="accordian-title">Frequently Asked Questions</div>
        {accordianData.map((data, index) => {
          return (
            <Accordion
              key={index}
              index={index}
              title={data.title}
              content={data.content}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Services;
