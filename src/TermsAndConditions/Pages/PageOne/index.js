import React from 'react';
import './styles.scss';
import { useHistory } from 'react-router-dom';

const PageOne = () => {
  const history = useHistory();

  const handleNext = () => {
    history.push(`/terms-and-conditions?page=${'2'}`);
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="pageOneWrapper" id="page">
      <div className="contentWrapper">
        <span>1</span>
        <div className="rightContent">
          <h1>Overview</h1>
          <div className="content">
            <p>1.1 Thank you for using our Application. To govern the relationship established by your use of the Schooln.ng Application (“the Application”), these Terms of Use (“Terms”) constitute a legally binding agreement made between you, either in your capacity as an individual or on behalf of an organization or entity you legally represent (“you,” “your”, “yours”), and Schooln.ng, a business enterprise duly registered in accordance with the laws of the Nigeria, and its registered address at No 19 Nwosu Chuma Street Cooperatives Villa Estate, Lagos, Nigeria hereinafter referred to as (“Schooln.ng”, “us”, “our”); which expression shall, where the context so admits, include its successors-in-title, assigns, legal representatives, and agents). These Terms apply to all users of the Application, including without limitation to peers, vendors, customers, and/or contributors of content.</p>
            <p>1.2 You understand that Schooln.ng or any of its affiliates reserves the right to limit or discontinue your use of the social media application and its services if you do not abide by these Terms or at the sole discretion of Schooln.ng.</p>
            <p>1.3 By accessing or using any part of the Application, you agree that you have read, understand and agree to be bound by these Terms, as well as additional available guidelines, policies, or rules as applicable to the Application, including, without limitation, the Schooln.ng Privacy Policy. Those policies and guidelines are incorporated herein by reference into these Terms. If you do not agree to be bound by these Terms and to follow all applicable laws, guidelines and policies, do not access or use the Application.</p>
          </div>
        </div>
      </div>

      <div className="contentWrapper">
        <span>2</span>
        <div className="rightContent">
          <h1>NATURE OF THE CONTENT ON THE APPLICATION</h1>
          <div className="content">
            <h1>2. NATURE OF THE CONTENT ON THE APPLICATION</h1>
            <p>2.1 Schooln.ng is a social media application for students and alumni, across various higher institutions within the country. It offers most of the services other social media applications offer and allows users communicate with one another and share information in the form of texts, videos, images and documents in a way that harmonizes and eases the educational experience of students. It also connects entrepreneurial users with intending customers thereby facilitating access to educational materials.</p>

            <p>2.2 Our Services may include text, videos, images, documents (in pdf format alone), or other content (collectively, “Content”) created by us or the users, for other users who are willing to use them.</p>

          </div>
        </div>
      </div>

      <div className="contentWrapper">
        <span>3</span>
        <div className="rightContent">
          <h1>OUR SERVICES</h1>
          <div className="content">
            <p>3.1 Connectivity Solution: Schooln.ng connects students and alumni, across various higher institutions within a country on one singular platform <br />(i.e. the Application) and allows them share information easily and seamlessly with one another. It offers most of the services all other social media applications offer. Below is the list of services we offer:</p>
            <p>3.1 (i) Account creation with email and password. There is also the social login where we collect their name, image (If any available), and email address only.</p>
            <p>3.1 (ii) Users provide information about their institution, faculty, and department.</p>
            <p>3.1 (iii) Users are either undergraduates or graduates (hence alumni).</p>
            <p>3.1 (iv) Users post gist at their own will. These gist could include, text, images, and videos. 3.1 (v) The word “Gist” replaces “Post” on Schooln.ng.</p>
            <p>3. 2 (vi) Users have the ability to view and see gist and trends from other institutions not limited to theirs only.</p>
            <p>3.2 Entrepreneurial Solution: Users who are entrepreneurs can create new businesses or promote an existing business on the Application. The creation of a new business involves providing the name of the business, the contact information of the business, details or information about the nature of the business, the display image of the business, etc. Users with verified and approved contents can make money on the Application.</p>
            <p>3.3 Publicity Solution: Schooln.ng allows users to create paid campaigns that allows their activities on the application to be visible in schools outside theirs. Otherwise, by default, activities of a business page are only visible to the users who are subscribed to such pages.</p>
            <p>3.4 Access Solution: Users can share materials (in pdf or other formats) such as past questions, lecture notes, seminars, project materials, etc. for other users who are willing to use them.</p>
            <p>3.5 Verification Solution: Schooln.ng ensures that Materials that are sold pass through a verification process to ascertain the validity of that material resource to prevent fraudulent misrepresentation and false advertising.</p>
            <p>3.6 Other features of the Schooln.ng App</p>
            <p> 3.6 (i) Some of the materials could have a price tag and as such users who want to access such materials would have to pay the required costs directly to the vendors.</p>
            <p>3.6 (ii) Payments for materials are made directly to the users who upload the resources.</p>
            <p>3.6 (iii) Users judge via ratings on materials and also by the number of stars the user who uploaded such materials have.</p>
            <p>3.6 (iv) Users can engage in direct one to one chat messages with other users. Although the individuals would have to be peers on the platform for that to happen.</p>
            <p>3.6 (v) Schooln.ng uses the word Peers for Friends.</p>
            <p>3.6 (vi) Users can create groups among themselves. These groups can comprise of users from different or the same institutions.</p>
            <p>3.6 (vii) The conversation in the groups are purely messages that could include text, images, videos, and documents.</p>
          </div>
        </div>
      </div>

      <div className="contentWrapper">
        <span>4</span>
        <div className="rightContent">
          <h1>CONTENT</h1>
          <div className="content">
            <p>4.1 Our Services allow users access gists, videos, images and other forums where various users can share information, opinions, ratings and other Content. We generally do not pre-screen or monitor submitted Content. You should understand that the contents expressed on the Application largely are of those who provide same, and does not reflect the opinions of Schooln.ng, and does not in any way constitute or imply our endorsement or recommendation thereof. Thus, Schooln.ng shall not assume any liability for any shared information. Further, you should bear in mind that such information is subject to errors and biases that are common in anecdotal first- hand accounts, and should not to be presumed to be reliable or error-free. </p>
            <p> 4.2 Any Content that you obtain or receive from Schooln.ng, its user, vendors, advertisers, licensors or otherwise through the Services, is for informational and communication purposes only and does not constitute professional advice. If you rely on any Content, including reviews, you do so solely at your own risk. We encourage you to independently confirm any content relevant to you with other sources.</p>
            <p>4.3 Prohibited and Inappropriate Activities Schooln.ng app is very easy to use and is available for anyone in the student or graduate category. However, there are some activities classified as inappropriate and have certain consequences. Some of such activities include the following:</p>
            <p>
              4.3 (i) Users cannot create multiple accounts with the same username or email address. Schooln.ng checks to ensure that all users are identified by one unique email address also two users might have the same first name and last name but they would never have the same username.
            </p>
            <p>
              4.3 (ii) Users have to the option to flag a gist posted by a user as inappropriate, When such flags is raised by multiple users, Schooln.ng will remove such app and send a message to the person who posted such gist to tell them about the removal.
            </p>
            <p>4.3 (iii) In cases where a user content is continuously flagged by a lot of users, Schooln.ng might have to block the account of such users preventing them from accessing the platform. In such cases, such users could be marked as spam. 4.3 (iv) Users can block certain users from sending them messages. In a case where multiple users block the same users, Schooln.ng will take that user to be a scam and take necessary measures to ensure that the account is blocked.</p>
            <p>4.3 (v) Users who feel that they have been blocked unjustly from accessing their Schooln.ng account, can send a mail to the company support mail pouring out their issues. Steps would be taken to ensure that such cases are treated appropriately.</p>
            <p> 4.3 (vi) Users that have been blocked by Schooln.ng will also have all their data such as pages (if any), materials (if any) to be inaccessible by other users on the platform.</p>
            <p>4.3 (vii) while Schooln.ng permits free sharing of information and content, obscene, abusive and pornographic content is strictly prohibited and any user involved in acts considered to be inappropriate in this regard may blocked and disconnected by schooln.ng</p>
            <p>4.3 (viii) The Schooln.ng prohibits any form of harassment, and abuse and immediately block any user found to engage in any form of abuse, whatsoever.</p>

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