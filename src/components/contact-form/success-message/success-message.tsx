import Modal from "../../../sharedCompenents/modal/modal"
import './success-message.scss'
function SuccessMessage({onClose}:any) {
  return (
    <Modal onClose={onClose}>
      <div className="success-msg-wrapper">
        <img src="assets/success.svg" alt="" width={100} />
        <div   className="success-msg-info">
          <div className="title">Thank You</div>
          <div className="sub-title">Our Team will contact you soon</div>
        </div>
      </div>
    </Modal>
  );
}

export default SuccessMessage