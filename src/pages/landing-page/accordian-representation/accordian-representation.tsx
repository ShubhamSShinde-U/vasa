import Accordion from '../../../sharedCompenents/accordian/accordian';
import { accordianData } from '../../../constant/constant';
import './accordian-representation.scss'
function AccordianRepresentation() {
  return (
    <div className="all-accordian-wrapper">
      <div className="title secondary-title">Frequently Asked Questions</div>
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
  );
}

export default AccordianRepresentation;