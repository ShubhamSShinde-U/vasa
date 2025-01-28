import { useNavigate } from "react-router-dom";
import "./no-data.scss";

function NoData({ title }: any) {
  const navigate = useNavigate();
  return (
    <div className="no-data">
      <div className="no-image">
        <img src="assets/ic_no_data.svg" width={40} height={40} />
      </div>
      <div className="no-title">{title}</div>
      <div
        className="redirect"
        onClick={() => {
          navigate("/#services1");
        }}
      >
        Go Back
      </div>
    </div>
  );
}

export default NoData;
