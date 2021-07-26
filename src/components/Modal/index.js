import PropTypes from "prop-types";
import React from 'react'
import { AiOutlineClose } from 'react-icons/all';
import { NavLink } from "react-router-dom";
import './style.scss'
import ReactModal from 'react-modal';

const Modal = ({ isOpen, onClose }) => {
    return (
        <div>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={onClose}
                className="modal"
                overlayClassName="overlay"
                contentLabel="onRequestClose Example"
            >
                <div className="modal-content">
                    <div className="modal-content-left">
                        <div className="modal-content-left-icon-wrapper">
                            <AiOutlineClose className="modal-content-left-icon-wrapper-icon-close" onClick={onClose} size={15} />
                        </div>

                        <p className="modal-content-left-first-paragraph">Become Schooln.ng</p>
                        <h2 className="modal-content-left-second-paragraph">Student <br /> ambassador program.</h2>
                        <p className="modal-content-left-third-paragraph ">Applications Starts From 1St Of June To The 30Th of June </p>

                        <NavLink className="modal-content-left-apply-button" to="/ambassadors">Apply Here</NavLink>
                    </div>
                    <div className="modal-content-right"></div>
                </div>
            </ReactModal>
        </div>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

export default Modal
