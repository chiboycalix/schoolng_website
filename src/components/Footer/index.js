import './styles.scss';
import { GrTwitter, FiInstagram, FaFacebookSquare } from 'react-icons/all';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footerTop">
        <div className="footerAddress">
          <h1>office address</h1>
          <p>No 19 Nwosu Chuma Co-operatives villas Estate Badore, Ajah Lagos State</p>
        </div>
        <div className="footerTelephone">
          <h1 className="telephone">Telephone</h1>
          <p>08102548962</p>
          <Link to="/terms-and-conditions">
            Terms & conditions
          </Link>
        </div>
        <div className="footerEmail">
          <h1>Email</h1>
          <p>customersupport@schooln.ng</p>
          <Link to="/privacy-policy">
            Privacy Policy
          </Link>
        </div>
        <div className="footerSocials">
          <h1>Follow Us</h1>
          <div className="iconsWrapper">
            <a href="https://twitter.com/Schooln_ng" target="_blank" rel="noreferrer"><GrTwitter /></a>
            <a href="https://www.instagram.com/schooln_ng" target="_blank" rel="noreferrer"><FiInstagram /></a>
            <a href="https://web.facebook.com/schooln.ng" target="_blank" rel="noreferrer"><FaFacebookSquare /></a>
          </div>
        </div>
      </div>
      <div className="horizontalLine"></div>
      <div className="footerBottom">
        <div className="footerCopyright">
          <p>Copyright 2021, School.ng All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;