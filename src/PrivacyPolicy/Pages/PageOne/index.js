import React from 'react';
import './styles.scss';
import { useHistory } from 'react-router-dom';

const PageOne = () => {
  const history = useHistory();

  const handleNext = () => {
    history.push(`/privacy-policy?page=${'2'}`);
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="privacyWrapper">
      <div className="privacyContent">
        <span>0</span>
        <div className="privacyRightContent">
          <h1>Overview</h1>
          <div className="privacyBody">
            <p>Thank you for using Schooln.ng. Your trust is important to us and we are committed to protecting the privacy and security of your personal information. The information you share with us helps us to provide a great experience for you. This Privacy Policy describes our privacy practices for all services we offer and how we collect, use, disclose and safeguard your information when you visit our mobile application (the “application”). The term “Schooln.ng”, “us” or “we” refer to Schooln.ng and the term “User(s)”, “you”, “yours” refer to yourself as the User of Schooln.ng Services. This Privacy Policy, together with the applicable Terms and Conditions, set forth the general rules and policies governing your use of the Application. Depending on your activities when visiting our application, you may be required to agree to additional terms and conditions.</p>
          </div>
        </div>
      </div>

      <div className="privacyContent">
        <span>1</span>
        <div className="privacyRightContent">
          <h1>YOUR CONSENT</h1>
          <div className="privacyBody">
            <p>1.1. By using our Application, you consent to our Privacy Policy. (IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT ACCESS THE APPLICATION). </p>
            <p> 1.2. We reserve the right to make changes to this Privacy Policy occasionally to meet legal requirements and standards. Therefore, you are encouraged to frequently visit these sections to remain updated with the changes on the Application. Modifications will be effective on the day they are posted. You will be deemed to have been made aware of, be subject to, and be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Application after the modifications are posted.</p>
          </div>
        </div>
      </div>

      <div className="privacyContent">
        <span>2</span>
        <div className="privacyRightContent">
          <h1>INFORMATION WE COLLECT</h1>
          <div className="privacyBody">
            <p>2.1. Schooln.ng is committed to maintaining privacy protections for its Users. When you register on the Application, we collect demographic and other personally identifiable information about the user, such as names, email and image (if available), academic information, business information (where applicable). These are voluntarily given to us for the user profile to enable participation in the various activities related to the application. </p>
            <p>2.2 If you choose to share data about yourself via your profile, gist groups or other interactive areas of the Application, including text, images, videos and documents, be advised that all data you disclose in these areas is public and your data will be accessible to anyone who accesses the Application.</p>
            <p> 2.3 By means of derivative data, our servers automatically collect information when you access the Application, such as your native actions that are integral to the Application, as well as other interactions with the Application and other users, via server log files.</p>
            <p>2.4 We may request access or permission to track location-based information from your mobile device, either continuously or while you are using the Application, to provide location-based services. If you wish to change our access or permissions, you may do so in your device’s settings.</p>
            <p>2.5 We may request access or permission to certain features from your mobile device, including your mobile device’s bluetooth, calendar, camera, contacts, microphone, reminders, sensors, SMS messages, social media accounts, storage and other features. If you wish to change our access or permissions, you may do so in your device’s settings.</p>
            <p>2.6 Financial Information such as data related to any payment or payment method e.g. valid credit card number, card brand, expiration date will not be collected from any user by Schooln.ng. Payment for materials sold by entrepreneurial users are made directly to the users who upload the resources. We may collect your purchase, order, or request information about our services from the Application. Otherwise, all financial information is stored by the payment processors, e.g. Paystack Flutterwave, Vogue Pay, Interswitch etc. You are encouraged to review their privacy policy and contact them directly for responses to your questions.</p>
            <p>2.7 You may deactivate and delete your profile on the Application at any time hence, no new information will be accessible from you.</p>
            <p>2.9 Your username, identification code, password and any other details provided to you by the Application, as part of our access security measures, should be treated with confidentiality.</p>
          </div>
        </div>
      </div>

      <div className="privacyContent">
        <span>3</span>
        <div className="privacyRightContent">
          <h1>PROTECTING YOUR INFORMATION</h1>
          <div className="privacyBody">
            <p> 3.1. We strive to protect your information using international protection standards and implement a variety of security measures to maintain the safety of your personal information when you operate the Application, relate with peers and share information.</p>
            <p>3.2. We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be wholly guaranteed against any interception or other type of misuse. Any information disclosed online is vulnerable to interception and misuse by unauthorized parties. Therefore, we cannot guarantee complete security if you provide personal information.</p>
          </div>
        </div>
      </div>

      <div className="privacyContent">
        <span>4</span>
        <div className="privacyRightContent">
          <h1>DISCLOSURE OF YOUR INFORMATION</h1>
          <div className="privacyBody">
            <p>4.1 We may share information we have collected about you in certain situations. Your information may be disclosed if we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation. This includes exchanging information with other entities for fraud protection and credit risk reduction. </p>

            <p>4.2 We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance. With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.</p>

            <p>4.3 If you interact with other users of the Application, those users may see your name, profile photo, and descriptions of your activity, including sending invitations to other users, chatting with other users, liking posts, following trends.</p>

            <p>4.4 When you post comments, contributions or other content to the Applications, your posts may be viewed by all users and may be publicly distributed outside the Application in perpetuity.</p>

            <p> 4.5 We may use third-party advertising companies to serve ads when you visit the Application. These companies may use information about your visits to the Application and other websites that are contained in web cookies in order to provide advertisements about goods and services of interest to you.</p>
          </div>
        </div>
      </div>

      <div className="privacyContent">
        <span>5</span>
        <div className="privacyRightContent">
          <h1>NON-DISCLOSURE OF INFORMATION TO THIRD PARTIES</h1>
          <div className="privacyBody">
            <p>5.1. We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our Application, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, to enforce our Application’s policies, or protect our rights or others’ rights, property, or safety. However, non-personally identifiable visitor’s information may be provided to other parties for marketing, advertising, or other uses. </p>
            <p>5.2. All credit/debit cards detail and personally identifiable information will NOT be stored, sold, shared, rented or released to any third parties.</p>
          </div>
        </div>
      </div>

      <div className="privacyContent">
        <span>6</span>
        <div className="privacyRightContent">
          <h1>THIRD PARTY WEBSITES</h1>
          <div className="privacyBody">
            <p>The Application may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave the Application, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information. Before visiting and providing any information to any third-party websites, you should inform yourself of the privacy policies and practices (if any) of the third party responsible for that website, and should take those steps necessary to, in your discretion, protect the privacy of your information. We are not responsible for the content or privacy and security practices and policies of any third parties, including other sites, services or applications that may be linked to or from the Application.</p>
          </div>
        </div>
      </div>

      <div className="privacyContent">
        <span>7</span>
        <div className="privacyRightContent">
          <h1>COOKIES USAGE POLICY</h1>
          <div className="privacyBody">
            <p> 7.1 We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Application to help customize the Application and improve your experience. When you access the Application, your personal information is not collected through the use of tracking technology.</p>
            <p>7.2 Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such actions could affect the availability and functionality of the Application. You may not decline web beacons. However, they can be rendered ineffective by declining all cookies or by modifying your web browser’s settings to notify you each time a cookie is tendered, permitting you to accept or decline cookies on an individual basis.</p>
          </div>
        </div>
      </div>

      <div className="navigationSection">
        <p onClick={handleNext}>Next</p>
      </div>
    </div>
  )
}

export default PageOne