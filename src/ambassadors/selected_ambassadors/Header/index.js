import React from 'react';
import './styles.scss';
import CirclesPrimary from '../components/CirclesPrimary';
import CirclesSecondary from '../components/CirclesSecondary';
import AmbassadorImg from '../../../assets/img/becomeA.png'


const Header = () => {
  return (
    <div className="headersWrapper">
      <div className="headersLeft">
        <h1>School.ng <br /> Student <span>Ambassador</span></h1>
        <p>This are representatives from selected institutions that are <br /> Schooln.ng Ambassadors in their <br /> various institutions, this program is for the duration of six months</p>

        <div className="circlesWrapper">
          <CirclesPrimary />
        </div>
      </div>
      <div className="headersRight">
        <img src={AmbassadorImg} alt="ambassordor" />
      </div>
    </div>
  )
}

export default Header;