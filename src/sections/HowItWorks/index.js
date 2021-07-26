import React from 'react';
import './styles.scss';
import PhonesImg from '../../assets/img/howitworks.png'
import { useIsVisible } from "react-is-visible";

const HowItWorks = () => {
  const leftContentRef = React.useRef();
  const rightContentRef = React.useRef();
  const leftContentVisible = useIsVisible(leftContentRef);
  const rightContentVisible = useIsVisible(rightContentRef);
  return (
    <div className="howItWorksWrapper" id="howitworks">
      <div className="howItWorksHeader">
        <h1>How it Works</h1>
        <p>Schooln.ng is on a mission to empower students to explore the beauty of schooling while connecting and growing together</p>
      </div>
      <div className="howItWorksContent">
        <div ref={leftContentRef} className={`howItWorksContentLeft ${leftContentVisible ? 'scrollInLeft' : ''}`}>
          <img src={PhonesImg} alt="PhonesImg" />
        </div>
        <div ref={rightContentRef} className={`howItWorksContentRight ${rightContentVisible ? 'scrollInRight' : ''}`}>
          <div className="howItWorksContentRow">
            <div className="howItWorksContentColumn">
              <span>1</span>
              <h3>Stay Informed</h3>
              <p>Follow trends, news and discussions from your school and other schools around you.</p>
            </div>

            <div className="howItWorksContentColumn">
              <span>2</span>
              <h3>Find meet and connect with students and alumni</h3>
              <p>This is one of the easiest and most effective way to connect with students and alumni from your institution and other institutions. You just decide where you want them from.</p>
            </div>
          </div>

          <div className="howItWorksContentRow">
            <div className="howItWorksContentColumn">
              <span>3</span>
              <h3>Grow your brand/business</h3>
              <p>We help you build, grow and advertise your dream student business and brand</p>
            </div>

            <div className="howItWorksContentColumn">
              <span>4</span>
              <h3>Get School Resource</h3>
              <p>Get Materials for your various school engagements and help other students with useful materials</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks