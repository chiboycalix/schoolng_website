import React from 'react';
import GooglePlay from '../../assets/img/google-play.svg';
import { AiFillApple } from 'react-icons/all';
import './styles.scss';

const Download = () => {
  return (<div className="appDownloadWrapper">
    <a className="btnGooglePlay" href="https://play.google.com/store/apps/details?id=com.android_app.schooln.ng" target="_blank" rel="noreferrer">
      <img src={GooglePlay} alt="GooglePlay" />
      <div className="textWrapper">
        <p>ANDROID APP ON</p>
        <span>
          Gooogle Play
    </span>
      </div>
    </a>
    <a className="btnAppleStore" href="https://apple.com">
      <AiFillApple />
      <span>
        Coming Soon
    </span>
    </a>
  </div>)
}

export default Download