import React from 'react'
import './styles.scss'
import ambassadorCenter from '../../assets/img/ambassador-center.png'
import singleLeft from '../../assets/img/single-left.png'
import peopleLeft from '../../assets/img/people-left.png'
import singleRight from '../../assets/img/single-right.png'
import peopleRight from '../../assets/img/people-right.png'
import { useIsVisible } from 'react-is-visible'

const About = () => {
    const leftContentRef = React.useRef();
    const rightContentRef = React.useRef();
    const leftContentVisible = useIsVisible(leftContentRef);
    const rightContentVisible = useIsVisible(rightContentRef);
    return (
        <div className="aboutAmbassador">
            <h1 className="aboutAmbassadorHeader">Student <br /> Ambassador Program.</h1>
            <p>This programme is put together to select representatives from selected institutions that </p>
            <p>would become Schooln.ng Ambassadors in their various institutions</p>
            <h1 className="aboutAmbassadorHeaderDeadline">
                Application
                Started From 1St of June to the 30Th of June, 
                however, applicants who register late and are able to get good engagements on their uploaded videos can also qualify</h1>

            <div className="aboutAmbassadorImageSection">
                <div ref={leftContentRef} className={`aboutAmbassadorImageSectionLeft  ${leftContentVisible ? 'scrollInLeft' : ''}`}>
                    <div className="aboutAmbassadorImageSectionLeftFirst">
                        <img src={peopleLeft} alt="peopleLeft" />
                    </div>
                    <div className="aboutAmbassadorImageSectionLeftSecond">
                        <img src={singleLeft} alt="singleLeft" />
                    </div>
                </div>
                <div className="aboutAmbassadorImageSectionCenter">
                    <img src={ambassadorCenter} alt="ambassador-center.png" />
                </div>
                <div ref={rightContentRef} className={`aboutAmbassadorImageSectionRight  ${rightContentVisible ? 'scrollInRight' : ''}`}>
                    <div className="aboutAmbassadorImageSectionRightFirst">
                        <img src={peopleRight} alt="peopleRight" />
                    </div>
                    <div className="aboutAmbassadorImageSectionRightSecond">
                        <img src={singleRight} alt="singleRight" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
