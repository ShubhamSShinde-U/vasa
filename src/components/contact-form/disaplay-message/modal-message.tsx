import Modal from "../../../sharedCompenents/modal/modal";
import "./modal-message.scss";
function ModalMessage({ onClose, type, title, subTitle }: any) {
  return (
    <Modal onClose={onClose}>
      <div className="success-msg-wrapper">
        <img
          src={
            type === "success" ? "assets/success.svg" : "assets/cancel-icon.svg"
          }
          alt=""
          width={100}
        />
        <div className="success-msg-info">
          <div className="title">{title}</div>
          <div className="sub-title">{subTitle}</div>
        </div>
      </div>
    </Modal>
  );
}
//

export default ModalMessage;
