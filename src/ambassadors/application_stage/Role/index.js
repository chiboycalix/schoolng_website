import './styles.scss';
import SmileImg from '../../assets/img/roles-image.png';
import React from 'react';
import { useIsVisible } from 'react-is-visible';

const Role = () => {
    const leftContentRef = React.useRef();
    const rightContentRef = React.useRef();
    const leftContentVisible = useIsVisible(leftContentRef);
    const rightContentVisible = useIsVisible(rightContentRef);
    return (
        <div className="schoolngRoleWrapper">
            <div ref={leftContentRef} className={`schoolngRoleWrapperLeft  ${leftContentVisible ? 'scrollInLeft' : ''}`}>
                <h1 className="schoolngRoleWrapperLeftTitle">Roles of a Schooln.ng Ambassador:</h1>
                <div className="schoolngRoleWrapperLeftContentRow">
                    <div className="schoolngRoleWrapperLeftContentRowDotWrapper">
                        <div className="dot" />
                    </div>
                    <div className="schoolngRoleText"><p>Help promote the Schooln.ng Brand in their various Institutions</p></div>
                </div>
                <div className="schoolngRoleWrapperLeftContentRow">
                    <div className="schoolngRoleWrapperLeftContentRowDotWrapper">
                        <div className="dot" />
                    </div>
                    <div className="schoolngRoleText"><p>Perform tasks given by the schooln.ng team</p></div>
                </div>
                <div className="schoolngRoleWrapperLeftContentRow">
                    <div className="schoolngRoleWrapperLeftContentRowDotWrapper">
                        <div className="dot" />
                    </div>
                    <div className="schoolngRoleText">
                        <p>Help Schooln.ng organise it’s various publicity programmes and events in their various Institutions</p>
                    </div>
                </div>
                <div className="schoolngRoleWrapperLeftContentRow">
                    <div className="schoolngRoleWrapperLeftContentRowDotWrapper">
                        <div className="dot" />
                    </div>
                    <div className="schoolngRoleText"><p>Be the Face Of Schooln.ng in their various institutions</p></div>
                </div>
                <div className="schoolngRoleWrapperLeftContentRow">
                    <div className="schoolngRoleWrapperLeftContentRowDotWrapper">
                        <div className="dot" />
                    </div>
                    <div className="schoolngRoleText"><p>Promote content that generates high engagements from users</p></div>
                </div>
                <div className="schoolngRoleWrapperLeftContentRow">
                    <div className="schoolngRoleWrapperLeftContentRowDotWrapper">
                        <div className="dot" />
                    </div>
                    <div className="schoolngRoleText"><p>Bring more users from their various institutions on the schooln.ng platform</p></div>
                </div>
                <div className="schoolngRoleButtonWrapper">
                    <a className="schoolngRoleButton" href="https://forms.gle/qe5MpND1AbeeTSMu8" target="_blank" rel="noreferrer">Apply</a>
                </div>
            </div>
            <div ref={rightContentRef} className={`schoolngRoleWrapperRight  ${rightContentVisible ? 'scrollInRight' : ''}`}>
                <img src={SmileImg} alt="smileImg" />
            </div>
        </div>
    )
}

export default Role;