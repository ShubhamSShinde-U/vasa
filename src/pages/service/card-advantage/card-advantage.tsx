import './card-advantage.scss'
function CardAdvantage(props:any) {
  return (
    <div className="card-advantage-wrapper">
      <div className="circle"></div>
      <div className="cardAdvantageInfo">
        <div className='cardAdvantage-title'>{props.title}</div>
        <div className='cardAdvantage-subTitle'>
          {props.info}
        </div>
      </div>
    </div>
  );
}

export default CardAdvantage