import React from 'react';
import { useIsVisible } from 'react-is-visible';
import SmileImg from '../../assets/img/benefits-image.png';
import './styles.scss';

const Benefits = () => {
    const leftContentRef = React.useRef();
    const rightContentRef = React.useRef();
    const leftContentVisible = useIsVisible(leftContentRef);
    const rightContentVisible = useIsVisible(rightContentRef);
    return (
        <div className="schoolngBenefitsWrapper">
            <div ref={leftContentRef} className={`schoolngBenefitsWrapperLeft  ${leftContentVisible ? 'scrollInLeft' : ''}`}>
                <img src={SmileImg} alt="smileImg" />
            </div>
            <div ref={rightContentRef} className={`schoolngBenefitsWrapperRight ${rightContentVisible ? 'scrollInRight' : ''}`}>
                <h1 className="schoolngBenefitsWrapperRightTitle">Benefits Of the Schooln.ng Ambassador:</h1>
                <p className="schoolngBenefitsWrapperRightSubTitle">Ambassadors who perform well in their various monthly tasks and reach the various target set out for them by the Schooln.ng Team are rewarded with the following</p>
                <div className="schoolngBenefitsWrapperRightContentRow">
                    <div className="schoolngBenefitsWrapperRightContentRowDotWrapper">
                        <div className="dot" />
                    </div>
                    <div className="schoolngBenefitsText"><p>₦5,000 Monthly data subscription fee (<span>All Selected Ambassadors</span>)</p></div>
                </div>
                <div className="schoolngBenefitsWrapperRightContentRow">
                    <div className="schoolngBenefitsWrapperRightContentRowDotWrapper">
                        <div className="dot" />
                    </div>
                    <div className="schoolngBenefitsText"><p>Branded Schooln.ng Items (<span>All Selected Ambassadors</span>)</p></div>
                </div>
                <div className="schoolngBenefitsWrapperRightContentRow">
                    <div className="schoolngBenefitsWrapperRightContentRowDotWrapper">
                        <div className="dot" />
                    </div>
                    <div className="schoolngBenefitsText">
                        <p>Brand new Laptops (<span>Top Ambassadors</span>)</p>
                    </div>
                </div>
                <div className="schoolngBenefitsWrapperRightContentRow">
                    <div className="schoolngBenefitsWrapperRightContentRowDotWrapper">
                        <div className="dot" />
                    </div>
                    <div className="schoolngBenefitsText"><p>Be a part of the schooln.ng School tour which include traveling to different institutions in different states in the country (<span>Outstanding Ambassadors</span>)</p></div>
                </div>
                <div className="schoolngBenefitsWrapperRightContentRow">
                    <div className="schoolngBenefitsWrapperRightContentRowDotWrapper">
                        <div className="dot" />
                    </div>
                    <div className="schoolngBenefitsText"><p>Bonus (<span>Outstanding Ambassadors</span>) <br />
                    Because you are directly exposed to our talent development channel, you stand a greater chance of securing a full-time job role upon graduation.
                    </p></div>
                </div>
                <div className="schoolngBenefitsButtonWrapper">
                    <a className="schoolngBenefitsButton" href="https://forms.gle/qe5MpND1AbeeTSMu8" target="_blank" rel="noreferrer">Apply</a>
                </div>
            </div>

        </div>
    )
}

export default Benefits;