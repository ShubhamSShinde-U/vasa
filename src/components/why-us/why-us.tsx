import Card from "./card/card";
import "./why-us.scss";

function WhyUs() {
  const cardData: any = [
    {
      icon: "assets/vision.svg",
      title: "Bespoke Designs",
      desc: "Every scooter is a reflection of individuality. We specialize in crafting designs tailored to your unique style and requirements.",
    },

    {
      icon: "assets/vision.svg",
      title: " Engineering Excellence",
      desc: "Combining artistry with precision, our designs are engineered for optimal performance and stunning aesthetics.",
    },
    {
      icon: "assets/vision.svg",
      title: "Future-Ready Innovations",
      desc: " We integrate cutting-edge trends to ensure your scooter design stands out in the modern world.",
    },
    {
      icon: "assets/vision.svg",
      title: "Sustainable Creativity",
      desc: "Embracing green practices, we design with materials and concepts that prioritize sustainability and eco-friendliness.",
    },
    {
      icon: "assets/vision.svg",
      title: "Experienced Professionals",
      desc: "Our team of seasoned designers ensures every project is executed with meticulous attention to detail and expertise.",
    },
    {
      icon: "assets/vision.svg",
      title: " Collaborative Approach",
      desc: "Your vision is at the heart of our process. We work closely with you to turn your ideas into reality.",
    },
  ];
  return (
    <div className="why-us-wrapper">
        <div className="why-choose-us-title">WHY CHOOSE US?</div>
      <div className="all-card-container">
        {cardData.map((card: any) => {
          return <Card cardData={card} />;
        })}
      </div>
    </div>
  );
}

export default WhyUs;
