import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.scss';
import Ambassador from '../../assets/img/ambassador.png';

const Ambassadors = () => {
  let history = useHistory();
  const handleClick = () => {
    history.push('/ambassadors')
  }
  return (<div className="ambassadorsSectionWrapper">
    <div className="left">
      <h1>School.ng <br /> Student <span>Ambassordor</span></h1>
      <p>This are representatives from selected institutions that are <br />Schooln.ng Ambassadors in their various institutions, this program is <br />for the duration of six months</p>
      <button onClick={handleClick}>Meet the Ambassadors</button>
    </div>
    <div className="right">
      <img src={Ambassador} alt="Ambassador" />
    </div>
  </div>)
}

export default Ambassadors;