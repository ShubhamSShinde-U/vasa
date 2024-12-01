/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createPortal } from "react-dom";
import "./modal.css";
import { useEffect } from "react";
function Modal({ onClose, children }: any) {
  useEffect(()=>{
    document.body.style.overflow = 'hidden'
    return ()=>{
          document.body.style.overflow = "auto";

    }
  })
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
