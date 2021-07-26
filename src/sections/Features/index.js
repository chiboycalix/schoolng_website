import React from 'react';
import './styles.scss';
import FeaturesPhone from '../../assets/img/features-phone-one.png';
import { useIsVisible } from "react-is-visible";
import DownloadFeatures from '../../components/DownloadFeatures'


const Features = () => {
  const leftContentRef = React.useRef();
  const rightContentRef = React.useRef();
  const leftContentVisible = useIsVisible(leftContentRef);
  const rightContentVisible = useIsVisible(rightContentRef);

  return (
    <div className="featuresWrapper">
      <div className="featuresHeader">
        <h1>App features</h1>
        <p>Schooln.ng brings all of your different social media apps together on a single platform. Providing you with the best and more focused way of performing your regular social media activities.</p>
      </div>
      <div className="featuresContent">

        <div ref={leftContentRef} className={`featuresContentLeft ${leftContentVisible ? 'scrollInLeft' : ''}`}>
          <div className="featuresCard">
            <span>1</span>
            <p>Schooln.ng allows its user share information/gist from their school and personal life with others on the platform.</p>
          </div>
          <div className="featuresCard">
            <span>3</span>
            <p>Schooln.ng empower students to build and grow businesses around and beyond their schools while while providing them with a platform to advertise within their school and beyond.</p>
          </div>
        </div>

        <div className="featuresContentCenter">
          <img src={FeaturesPhone} alt="FeaturesPhone" />
        </div>
        <div ref={rightContentRef} className={`featuresContentRight ${rightContentVisible ? 'scrollInRight' : ''}`}>
          <div className="featuresCard">
            <span>2</span>
            <p>Schooln.ng connects you with peers within same institution as well as across other institutions on the app by sending peer request, like, share and comment on gist, flag down false information.</p>
          </div>
          <div className="featuresCard">
            <span>4</span>
            <p>Schooln.ng promotes community creation and connectivity among students and their alumni by allowing them form groups of students or alumni with similar interest.</p>
          </div>
        </div>
      </div>
      <DownloadFeatures />
    </div >
  )
}

export default Features;