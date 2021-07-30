import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import Ambassador from '../../assets/img/ambassador.png';

const Ambassadors = () => {
  return (
    <div className="ambassadorsSectionWrapper">
      <div className="left">
        <h1>School.ng</h1>
        <h1>Student <span>Ambassordor</span></h1>
        <p>This are representatives from selected institutions that are</p>
        <p>Schooln.ng Ambassadors in their various institutions, this program is </p>
        <p className="last">for the duration of six months</p>
        <Link to="/ambassadors">Meet the Ambassadors</Link>
      </div>
      <div className="right">
        <img src={Ambassador} alt="Ambassador" />
      </div>
    </div>
  )
}

export default Ambassadors;