import './footer.scss'
function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-above">
            Services
        |
            <img src="assets/linkedin.svg" alt="" width={25}/>
      </div>
      <div className="footer-below">Copyright © 2024 VASA Extreme Engineering Ltd. All rights reserved.</div>
    </div>
  );
}

export default Footer