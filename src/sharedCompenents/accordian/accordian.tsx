import React, { useEffect, useState } from "react";
import "./accordian.scss";

interface AccordionProps {
  title: string;
  content: string;
  key?: any;
  index?: number;
}

const Accordion: React.FC<AccordionProps> = ({ title, content, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (index == 0) {
      setIsOpen(true);
    }
  }, []);

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2 className="accordion-title">{title}</h2>
        <img
          src="assets/up.svg"
          alt=""
          width={20}
          className={!isOpen ? "closed" : ""}
        />
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
