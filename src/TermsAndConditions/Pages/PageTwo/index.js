import React from 'react';
import './styles.scss';
import { useHistory } from 'react-router-dom';

const PageTwo = () => {
  const history = useHistory();

  const handleNext = () => {
    history.push(`/terms-and-conditions?page=${'3'}`);
  }

  const handlePrevious = () => {
    history.push(`/terms-and-conditions?page=${'1'}`);
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className="pageOneWrapper">
      <div className="contentWrapper">
        <span>5</span>
        <div className="rightContent">
          <h1>PRIVACY AND SECURITY POLICY</h1>
          <div className="content">
            <p>5.1 Schooln.ng and its affiliates consider the privacy of your personal information to be one of the most important elements in our relationship with you. Our responsibility to maintain the confidentiality of your personal information is one that we take very seriously. We are required by law to maintain the privacy and security of your protected information. We will let you know promptly if a breach occurs that may have compromised the privacy or security of your information. We will not use or share your person information other than as described here. You are the owner of the data and you share it when you need, through our Application. For an outlook of our detailed privacy policy, please click here.</p>

            <p>5.2 To further protect the confidentiality, integrity and availability of the information housed and shared on Schooln.ng, as well as the stability of our Services, you agree to the following additional safeguards. You agree that you will not, nor will you attempt to:</p>

            <p>5.2.1 Access, use or disseminate our Services, nor any information or files accessible via our Application, in a manner that violates any applicable law or regulation or the rights of any individual or entity;</p>

            <p>5.2.2 Sell or transfer any information included in our Application or use such information to market any product or service – including by sending, or facilitating the sending of, unsolicited emails or SPAM;</p>

            <p>5.2.3 Probe, scan or test the vulnerability of our Application, or of the system or network supporting our Services, or circumvent any security or authentication measures;</p>

            <p>5.2.4 Disable, bypass, defeat, avoid, remove, deactivate or otherwise circumvent any technical measures we have implemented to safeguard the stability of our Application, or the confidentiality, integrity or availability of any information, Content or data hosted or housed on our Application;</p>

            <p>5.2.5 Introduce to our Application any software, code or other device that in any way (i) permits unauthorized access to our systems or any software, hardware, files or data located thereon, (ii) disables or damages or otherwise interferes with or adversely affects the operation of our systems or any software, hardware, files or data located thereon, or (iii) overburdens or interferes with the proper functioning of our Application:</p>

            <p>5.2.5.1 Disassemble, decompile or reverse engineer our Application;</p>

            <p>5.2.5.2 Harvest, retrieve, index or publish any portion of our Application unless you are a public search engine engaging in public search services;</p>

            <p>5.2.5.3 Disable or circumvent our API usage safeguards, including safeguards designed to regulate the nature or amount of data you are permitted to extract from our Application, or the frequency of which you may access such data; or make calls to our API other than those authorized in our API documentation;
            </p>
            <p>5.2.5.4 Remove any copyright, trademark or other proprietary rights notices contained in or on our Application; or</p>
            <p>5.2.5.5 Engage in any activity other than those expressly permitted in these Terms and your User Agreement.</p>
          </div>
        </div>
      </div>

      <div className="contentWrapper">
        <span>6</span>
        <div className="rightContent">
          <h1>COMPLIANCE</h1>
          <div className="content">
            <p>You must comply with these Terms, any policies referred to on the Application and any laws, regulations, rules, License or Restrictions approved by Schooln.ng.</p>

          </div>
        </div>
      </div>

      <div className="contentWrapper">
        <span>7</span>
        <div className="rightContent">
          <h1>LICENSE</h1>
          <div className="content">
            <p>7.1 Subject to these Terms, you are hereby granted a limited, revocable, non-exclusive right to use the Services, Content and materials on the Application in the normal course of your use of the Application. You may not use any third party’s intellectual property without the express written permission of such third party.</p>
            <p>7.2 Schooln.ng will retain ownership of its intellectual property rights and you may not obtain any rights therein by virtue of these Terms or otherwise, except as expressly set forth in these Terms. You will have no right to use, copy, display, perform, create derivative works from, distribute, have distributed, transmit or sublicense from materials or Content available on the Application, and you shall not use the name, logo or trademarked content of the application for any other reasons aside those stated herein and as may be reasonably necessary to use the emblems, logos, trademarked content and Services for their intended purpose and except as expressly set forth in these Terms.</p>
          </div>
        </div>
      </div>

      <div className="contentWrapper">
        <span>8</span>
        <div className="rightContent">
          <h1>USER REGISTRATION</h1>
          <div className="content">
            <p>8.1 To visit and access the Application and its Services, you will need to register with Schooln.ng and create a user account through the online registration process on the Application. Your User Account gives you access to the Services and functionality that we may establish and maintain from time to time and in our sole discretion. When creating a User Account, you must provide Schooln.ng with accurate and complete registration information, as prompted in the registration form. You must promptly notify Schooln.ng and update your account if any of this information changes.</p>
            <p>8.2 Users cannot create multiple accounts with the same username or email address. Schooln.ng checks to ensure that all users are identified by one unique email address. However, two users might have the same first name and last name but they would never have the same username and login details.</p>
            <p>8.3 You agree that Schooln.ng can contact you by text message, telephone call and email on the phone numbers and email addresses you provide at user registrations, including for marketing purposes.</p>
          </div>
        </div>
      </div>


      <div className="contentWrapper">
        <span>9</span>
        <div className="rightContent">
          <h1>ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</h1>
          <div className="content">
            <p>9.1 We are not responsible if information made available on this Application is not accurate, complete or current. The material on this Application is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this Application is at your own risk. </p>
            <p>9.2 This Application may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only.</p>
          </div>
        </div>
      </div>


      <div className="contentWrapper">
        <span>10</span>
        <div className="rightContent">
          <h1>MODIFICATIONS TO OUR SERVICES</h1>
          <div className="content">
            <p>We reserve the right to modify the contents of this Application at any time, but we have no obligation to update any information on our Application. You agree that it is your responsibility to monitor changes to our Application. We shall not be liable to you or any third party for any modification, suspension or discontinuance of any Services.</p>
          </div>
        </div>
      </div>

      <div className="contentWrapper">
        <span>11</span>
        <div className="rightContent">
          <h1>OPTIONAL TOOLS</h1>
          <div className="content">
            <p>11.1 We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.</p>
            <p>11.2 You acknowledge and agree that we provide access to such tools “as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.</p>
            <p>11.3 Any use by you of optional tools offered through the Application is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s). </p>
            <p>11.4 We may also, in the future, offer new Services and/or features through the Application (including, the release of new tools and resources). Such new features and/or Services shall also be subject to these Terms.</p>
          </div>
        </div>
      </div>

      <div className="contentWrapper">
        <span>12</span>
        <div className="rightContent">
          <h1>THIRD-PARTY LINKS</h1>
          <div className="content">
            <p>12.1 Certain Content, products and Services available via our Application may include materials from third parties. Third-party links on this Application may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the Content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or Applications, or for any other materials, products, or services of third-parties.</p>
            <p>12.2 We are not liable for any harm or damages related to the use of Services, resources, Content, or any other transactions made in connection with any third-party Applications. Please review carefully the third-party’s policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.</p>
          </div>
        </div>
      </div>
      <div className="navigationSection">
        <p onClick={handlePrevious}>Previous</p>
        <p onClick={handleNext}>Next</p>
      </div>
    </div>
  )
}

export default PageTwo