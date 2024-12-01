import "./card.scss";
function Card({ cardData }: any) {
  console.log(cardData);

  return (
    <div className="card-wrapper">
      <div className="card-img">
        <img src={cardData.icon} alt="" width={50}/>
      </div>
      <div className="card-info">
        <div className="card-title">{cardData.title}</div>
        <div className="card-sub-title"> {cardData.desc}</div>{" "}
      </div>
    </div>
  );
}

export default Card;
