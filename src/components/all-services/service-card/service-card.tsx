/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import './service-card.scss'

function ServiceCard({data}:any) {
  const navigate = useNavigate()
  return (
    <div className="services-card" onClick={()=>{navigate(data?.redirectUrl)}}>
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