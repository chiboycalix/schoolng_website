import React from 'react';
import './styles.scss';

const Ambassador = (props) => {
  return (
    <div className="ambassador">
      <div className="ambassadorPhoto">
        <div className="overlay">
          <p onClick={props?.onOpen}>View Info</p>
        </div>
        <img src={props?.ambassador?.photo} alt="ambassadorPhoto" />
      </div>
      <div className="ambassadorDetails">
        <p className="username">@{props?.ambassador?.username}</p>
        <p className="fullname">{props?.ambassador?.fullname}</p>
        <p className="department">{props?.ambassador?.department}, {props?.ambassador?.university}</p>
      </div>
    </div>
  )
}
export default Ambassador;