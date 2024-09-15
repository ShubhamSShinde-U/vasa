/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createPortal } from "react-dom";
import "./modal.css";
function Modal({ onClose, children }: any) {
  return createPortal(
    <>
      <div
        className="modal-container"
        onClick={onClose}
        style={{ zIndex: 999 }}
      ></div>
      <div className="modal-child" style={{ zIndex: 1000 }}>
        <div className="modal-close" onClick={onClose}>
          <img src="assets/close-line-icon.svg" alt="" />
        </div>
        {children}
      </div>
    </>,
    document.body
  );
}

export default Modal;
