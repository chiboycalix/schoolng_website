import './styles.scss';
import LogoImg from '../../assets/img/logo.png';
import { useHistory, useLocation, Link } from 'react-router-dom';
import LogoColored from '../../assets/img/logoColored.png'

const NavBar = () => {
  const history = useHistory();
  const location = useLocation();
  const otherPath = location.pathname.split('/')[1];

  const handleLogoClick = () => {
    history.push('/')
  }
  return (
    <div className="navWrapper">
      <div className="logoWrapper">
        <img src={otherPath ? LogoColored : LogoImg} alt="LogoImg" onClick={handleLogoClick} />
      </div>

      {
        <div className="contactBtnWrapper">
          <Link to="/ambassadors">Ambassadors</Link>
          <a href="#contact">Contact</a>
        </div>
      }
    </div>
  )
}

export default NavBar;