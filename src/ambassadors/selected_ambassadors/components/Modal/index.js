import React from 'react';
import './styles.scss';


const Modal = (props) => {
  return (
    <div className="modalA">
      <div className="modal-contentA">
        <span className="closeA" onClick={props?.onCancel}>&times;</span>
        <div className="modal-bodyA">
          {props?.children}
        </div>
      </div>
    </div>)
}

export default Modal;