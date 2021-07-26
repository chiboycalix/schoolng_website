import React from 'react';
import './styles.scss';
import { useHistory } from 'react-router-dom';

const PageFour = () => {
  const history = useHistory();

  const handlePrevious = () => {
    history.push(`/terms-and-conditions?page=${'3'}`);
  }
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className="pageOneWrapper">
      <div className="contentWrapper">
        <span>21</span>
        <div className="rightContent">
          <h1>TERMINATION</h1>
          <div className="content">
            <p>Schooln.ng reserves the right to suspend or terminate your User Account and refuse any and all current or future use of the Application for any reason at any time. Such termination will result in the deactivation or deletion of, or access to, your User Account.</p>
          </div>
        </div>
      </div>

      <div className="contentWrapper">
        <span>22</span>
        <div className="rightContent">
          <h1>WAIVE</h1>
          <div className="content">
            <p>The failure of us to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.</p>
          </div>
        </div>
      </div>

      <div className="contentWrapper">
        <span>23</span>
        <div className="rightContent">
          <h1>GOVERNING LAW</h1>
          <div className="content">
            <p>These Terms and any dispute or claim (including non-contractual disputes or claims) arising out of or in connection with it, its subject matter or formation shall be governed by and construed in accordance with the law of the Federal Republic of Nigeria.</p>
          </div>
        </div>
      </div>

      <div className="contentWrapper">
        <span>24</span>
        <div className="rightContent">
          <h1>MISCELLANEOUS</h1>
          <div className="content">
            <p>We may freely assign these Terms in connection with a merger, acquisition, or sale of assets, or by operation of law or for any reason otherwise.</p>
          </div>
        </div>
      </div>

      <div className="contentWrapper">
        <span>25</span>
        <div className="rightContent">
          <h1>CONTACT INFORMATION</h1>
          <div className="content">
            <p>support@schooln.ng</p>
            <p>No 19 Nwosu Chuma Street Cooperatives Villa Estate,</p>
            <p>Lagos Nigeria</p>
            <p>+2348102548962</p>
          </div>
        </div>
      </div>

      <div className="navigationSection">
        <p onClick={handlePrevious}>Previous</p>
      </div>
    </div>
  )
}

export default PageFour