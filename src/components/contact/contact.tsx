/* eslint-disable @typescript-eslint/no-explicit-any */
import Modal from '../../sharedCompenents/modal/modal';
import './contact.css'
function Contact({onClose}:any) {
  return (
    <Modal
      onClose={onClose}
    >
      <div className="contact-wrapper">
        <div className='contact-info'>
          Contact : <span>9922****23</span>
        </div>
        <div className='contact-info'>
          Email : <span>abc@gmail.com</span>
        </div>

        <div>Feel Free to Contact us via mail or phone call</div>
      </div>
    </Modal>
  );
}

export default Contact