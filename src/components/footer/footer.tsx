import { useNavigate } from "react-router-dom";
import "./footer.scss";
function Footer() {
  const navigate = useNavigate();
  const handleClick=()=>{
      window.open(
        "https://www.linkedin.com/company/vasa-extreme-engineering",
        "_blank",
        "noopener,noreferrer"
      );

  }
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="footer-above">
          <div
            onClick={() => {
              navigate("/services");
            }}
          >
            Services
          </div>{" "}
          |
          <img
            src="assets/linkedin.svg"
            alt=""
            width={25}
            onClick={() => {
              handleClick();
            }}
          />
        </div>
        <div className="footer-below">
          Copyright © 2024 VASA Extreme Engineering Ltd. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
