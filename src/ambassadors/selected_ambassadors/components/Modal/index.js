import React from 'react';
import './styles.scss';


const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={props?.onCancel}>&times;</span>
        <div className="modal-body">
          {props?.children}
        </div>
      </div>
    </div>)
}

export default Modal;