import React from 'react';
import './styles.scss';
import { useHistory } from 'react-router-dom';

const PageTwo = () => {
  const history = useHistory();

  const handlePrevious = () => {
    history.push(`/privacy-policy?page=${'1'}`);
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="privacyWrapper">
      <div className="privacyContent">
        <span>8</span>
        <div className="privacyRightContent">
          <h1>TERMS AND CONDITIONS</h1>
          <div className="privacyBody">
            <p>Please visit our Terms and Conditions section establishing the use, disclaimers, and limitations of liability governing the use of our Application.</p>
          </div>
        </div>
      </div>

      <div className="privacyContent">
        <span>9</span>
        <div className="privacyRightContent">
          <h1>YOUR LEGAL RIGHTS</h1>
          <div className="privacyBody">
            <p>You have the right to: </p>
            <p>9.1. Access and correct your personal information via the user profiles at any time. This enables us to consistently have up to date information about you. </p>
            <p>9.2. Request erasure of your personal information. This enables you to ask us to delete or remove personal information where there is no good reason for us continuing to process it. You also have the right to ask us to delete or remove your personal information and upon your request we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal requirements, which will be notified to you, if applicable, at the time of your request.</p>
            <p>9.3. Object to the access of your personal information where we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation which makes you want to object to access on this ground as you feel it impacts on your fundamental rights and freedoms. You also have the right to object where we are accessing your personal information for direct marketing purposes. In some cases, we may demonstrate that we have compelling legitimate grounds to access your information which override your rights and freedoms.</p>
            <p>9.4. Request restriction to your personal information on the Application. This enables you to ask us to suspend the access to your personal information in the following scenarios:</p>
            <p>9.4.1. If you want us to establish the information’s accuracy;</p>
            <p>9.4.2. Where our use of the information is unlawful but you do not want us to erase it;</p>
            <p>9.4.3. Where you need us to hold the information even if we no longer require it as you need it to establish, exercise or defend legal claims;</p>
            <p>9.4.4. You have objected to our use of your information but we need to verify whether we have overriding legitimate grounds to use it;</p>
            <p>9.4.5. Request the transfer of your personal information to you or to a third party. We will provide to you, or a third party you have chosen, your personal data in a structured, commonly used, machine-readable format. Note that this right only applies to automated information which you initially provided consent for us to use or where we used the information to perform a contract with you.</p>
            <p> 9.5. Withdraw consent at any time where we are relying on consent to access your personal information. However, this will not affect the lawfulness of any access gotten and exercised before you withdraw your consent. If you withdraw your consent, we may not be able to provide certain services to you. We will advise you if this is the case at the time you withdraw your consent.</p>
          </div>
        </div>
      </div>

      <div className="privacyContent">
        <span>10</span>
        <div className="privacyRightContent">
          <h1>INFORMATION RETENTION</h1>
          <div className="privacyBody">
            <p>We will retain your information for as long as is necessary, or to comply with legal or regulatory obligations. When your personal information is no longer needed for any of the above mentioned purposes, your personal information will be removed from the system.</p>
          </div>
        </div>
      </div>

      <div className="privacyContent">
        <span>11</span>
        <div className="privacyRightContent">
          <h1>GOVERNING LAW</h1>
          <div className="privacyBody">
            <p>This Privacy Policy is subject to the Nigeria Data Protection Regulation (2019) or any other relevant Nigerian laws, regulations or international conventions applicable to Nigeria. Where any provision of this Privacy Policy is deemed inconsistent with a law, regulation or convention, such provision shall be subject to the overriding law, regulation or convention.</p>
          </div>
        </div>
      </div>

      <div className="privacyContent">
        <span>12</span>
        <div className="privacyRightContent">
          <h1>CONTACT US</h1>
          <div className="privacyBody">
            <p>If there are any questions or comments regarding this Privacy Policy, please contact us at: </p>
            <p>Schooln.ng</p>
            <p>No 19 Nwosu Chuma Street, Cooperatives Villa Estate, Lagos Nigeria.</p>
            <p>+2348102548962 support@schooln.ng</p>
          </div>
        </div>
      </div>

      <div className="navigationSection">
        <p onClick={handlePrevious}>Previous</p>
      </div>
    </div>
  )
}

export default PageTwo