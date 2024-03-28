import React, { useState } from "react";

const Modal = ({ onClose }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <button onClick={handleClose}>איקס</button>
        </div>
        <div className="modal-body">
          <h2>האיזור האישי</h2>
          <p>
            להתחברות או הרשמה, אנא הכנס סיסמה:
          </p>
          <input type="password" />
          <div className="buttons">
            <button>התחברות</button>
            <button>הרשמה</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
