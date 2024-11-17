/* eslint-disable @typescript-eslint/no-explicit-any */
import './service-card.scss'

function ServiceCard({data}:any) {
  return (
    <div className="services-card">
      <div className='services-card-icon-container'>
        <img className="img-filter"src={data.icon} alt=""  />
      </div>
      <div className="services-info">
        <div className="services-title">{data.title}</div>
        <div className="services-desc">{data.description}</div>
      </div>
    </div>
  );
}

export default ServiceCard;