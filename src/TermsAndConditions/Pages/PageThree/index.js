import React from 'react';
import './styles.scss';
import { useHistory } from 'react-router-dom';

const PageThree = () => {
  const history = useHistory();

  const handleNext = () => {
    history.push(`/terms-and-conditions?page=${'4'}`);
  }

  const handlePrevious = () => {
    history.push(`/terms-and-conditions?page=${'2'}`);
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="pageOneWrapper">
      <div className="contentWrapper">
        <span>13</span>
        <div className="rightContent">
          <h1>USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS</h1>
          <div className="content">
            <p>13.1 If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, ‘comments’), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments. </p>
            <p>13.2 We may, but have no obligation to, monitor, edit or remove Content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms. </p>
            <p>13.3 You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related Application. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.</p>
          </div>
        </div>
      </div>

      <div className="contentWrapper">
        <span>14</span>
        <div className="rightContent">
          <h1>ERRORS, INACCURACIES AND OMISSIONS</h1>
          <div className="content">
            <p>14.1 Occasionally there may be information on our Application that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information if any information on the Application is inaccurate at any time without prior notice. </p>
            <p>14.2 We undertake no obligation to update, amend or clarify information on our Application, including without limitation, pricing information, except as required by law.</p>

          </div>
        </div>
      </div>

      <div className="contentWrapper">
        <span>15</span>
        <div className="rightContent">
          <h1>PROHIBITED USES</h1>
          <div className="content">
            <p>7.1 Subject to these Terms, you are hereby granted a limited, revocable, non-exclusive right to use the Services, Content and materials on the Application in the normal course of your use of the Application. You may not use any third party’s intellectual property without the express written permission of such third party.</p>
            <p>7.2 Schooln.ng will retain ownership of its intellectual property rights and you may not obtain any rights therein by virtue of these Terms or otherwise, except as expressly set forth in these Terms. You will have no right to use, copy, display, perform, create derivative works from, distribute, have distributed, transmit or sublicense from materials or Content available on the Application, and you shall not use the name, logo or trademarked content of the application for any other reasons aside those stated herein and as may be reasonably necessary to use the emblems, logos, trademarked content and Services for their intended purpose and except as expressly set forth in these Terms.</p>
          </div>
        </div>
      </div>

      <div className="contentWrapper">
        <span>16</span>
        <div className="rightContent">
          <h1>PAYMENT</h1>
          <div className="content">
            <p>16.1 You may make payment via credit cards or cash for paid service on the Application (including bank transfer and mobile money payments). </p>
            <p>16.2 Schooln.ng reserves the right to establish, remove and/or revise fees at any time at its sole discretion. Schooln.ng may from time to time provide certain users with promotional offers and discounts that may result in different amounts charged for the Services.</p>
            <p>16.3 With respect to third party providers, Users will make payments directly to the third-party providers. Schooln.ng will collect its payment of those charges from the third-party providers. Hence, the User may need to adhere to the payment terms of the third party. Third party provider shall mean any contractor that Schooln.ng engages for online payment.</p>
          </div>
        </div>
      </div>


      <div className="contentWrapper">
        <span>17</span>
        <div className="rightContent">
          <h1>REFUND POLICY</h1>
          <div className="content">
            <p> 17.1 Charges paid by you are final and non-refundable, unless otherwise determined by Schooln.ng.</p>
            <p>17.2 The refund will be made on the same payment method, if applicable.</p>
            <p>17.3 Schooln.ng reserves its right to refund any amounts into the users account to be used in other services at its sole discretion. 17.4 Refunds are not applicable if the User is unsatisfied with the service provided by the Application.</p>
          </div>
        </div>
      </div>


      <div className="contentWrapper">
        <span>18</span>
        <div className="rightContent">
          <h1>DISCLAIMER OF WARRANTIES</h1>
          <div className="content">
            <p>18.1 We do not guarantee, represent or warrant that your use of our Service will be uninterrupted, timely, secure or error-free. We do not warrant that the results that may be obtained from the use of the Service will be accurate or reliable. </p>
            <p>18.2 You agree that from time to time we may remove the Service for indefinite periods of time or cancel the Service at any time, without notice to you.</p>
            <p>18.3 You expressly agree that your use of, or inability to use, the Service is at your sole risk. The Service and all products and Services delivered to you through the Service are (except as expressly stated by us) provided ‘as is’ and ‘as available’ for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement. </p>
            <p>18.4 In no case shall Schooln.ng, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the Service or any products procured using the Service, or for any other claim related in any way to your use of the Service or any product, including, but not limited to, any errors or omissions in any Content, or any loss or damage of any kind incurred as a result of the use of the Service or any Content (or product) posted, transmitted, or otherwise made available via the Application, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.</p>
            <p>18.5 You agree to indemnify, defend and hold harmless Schooln.ng and all its subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable legal fees, made by any third-party due to or arising out of your breach of these Terms or the documents they incorporate by reference or your violation of any law or the rights of a third-party.</p>
          </div>
        </div>
      </div>

      <div className="contentWrapper">
        <span>18</span>
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
        <span>19</span>
        <div className="rightContent">
          <h1>AMENDMENT</h1>
          <div className="content">
            <p>Internet Technology and applicable laws, rules and regulations change frequently. Accordingly, Schooln.ng reserves the right to make changes to this Terms at any time. Your continued use of the Application constitutes assent to any new or modified provision of these Terms that may be posted on the Application. We will post the amended Terms on the Application and indicate at the top, the date the agreement was last revised.</p>
          </div>
        </div>
      </div>

      <div className="contentWrapper">
        <span>20</span>
        <div className="rightContent">
          <h1>SEVERABILITY</h1>
          <div className="content">
            <p>In the event that any provision of Terms is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms, such determination shall not affect the validity and enforceability of any other remaining provisions.</p>
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

export default PageThree