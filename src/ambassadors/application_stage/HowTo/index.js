import './styles.scss';
import studentAmbassador from '../../assets/img/students-ambassador.png';

const HowTo = () => {
  return (
    <>
      <div className="howToWrapper">
        <h1 className="howToWrapperTitle">How To Become A Schooln.ng Ambassador</h1>
        <div className="howToWrapperContent">
          <div className="howToWrapperLeft">
            <img src={studentAmbassador} alt="studentAmbassador" />
          </div>
          <div className="howToWrapperRight">
            <div className="howToWrapperRight">
              <div className="howToWrapperRightContent">
                <div className="serialNumberWrapper">
                  <p>01</p>
                  <div className="verticalLine"></div>
                </div>
                <div className="howToText">
                  <p>Fill the schooln.ng Ambassador Form to register your participation</p>
                </div>
              </div>
            </div>
            <div className="howToWrapperRight">
              <div className="howToWrapperRightContent">
                <div className="serialNumberWrapper">
                  <p>02</p>
                  <div className="verticalLine"></div>
                </div>
                <div className="howToText">
                  <p>Upload a short video to a gist on the schooln.ng app. The post describes how beneficial schooln.ng can be to your school and why you should be the schooln.ng ambassador for your school.</p>
                </div>
              </div>
            </div>
            <div className="howToWrapperRight">
              <div className="howToWrapperRightContent">
                <div className="serialNumberWrapper">
                  <p>03</p>
                  <div className="verticalLine"></div>
                </div>
                <div className="howToText">
                  <p>Share and drag a lot of engagements from users in your school to your post. </p>
                </div>
              </div>
            </div>
            <div className="howToWrapperRight">
              <div className="howToWrapperRightContent">
                <div className="serialNumberWrapper">
                  <p>04</p>
                  {/* <div className="verticalLine"></div> */}
                </div>
                <div className="howToText">
                  <p>Users with the highest engagements (likes, comments and re-gist)  from other users on their post, will be selected as the schooln.ng Ambassadors </p>
                </div>
              </div>
            </div>
            <div className="howToText note">
              <p><strong>Note:</strong> The only engagements from your gist that will be recorded, are those that comes from users in your school only.</p>
            </div>
            <div className="howToWrapperApplyButtonWrapper">
                <a className="howToWrapperApplyButton" href="https://forms.gle/qe5MpND1AbeeTSMu8" target="_blank" rel="noreferrer">Apply</a>
              </div>
            {/* <div className="howToWrapperRightContent">
              <div className="howToText">
                <p>Fill the schooln.ng Ambassador Form <a href="https://forms.gle/qe5MpND1AbeeTSMu8" target="_blank" rel="noreferrer">here</a> to register your participation.</p>
              </div>
              <div className="howToText">
                <p>Upload a short video to a gist on the schooln.ng app. The post describes how beneficial schooln.ng can be to your school and why you should be the schooln.ng ambassador for your school.</p>
              </div>
              <div className="howToText">
                <p>Share and drag a lot of engagements from users in your school to your post.</p>
              </div>
              <div className="howToText">
                <p>Fill the schooln.ng Ambassador Form <a href="https://forms.gle/qe5MpND1AbeeTSMu8" target="_blank" rel="noreferrer">here</a> to register your Users with the highest engagements (likes, comments and re- gist) from other users on their post, will be selected as the schooln.ng Ambassadors.</p>
              </div>
              <div className="howToText">
                <p><strong>Note:</strong> The only engagements from your gist that will be recorded, are those that comes from users in your school only.</p>
              </div>


              <div className="howToWrapperApplyButtonWrapper">
                <a className="howToWrapperApplyButton" href="https://forms.gle/qe5MpND1AbeeTSMu8" target="_blank" rel="noreferrer">Apply</a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default HowTo;