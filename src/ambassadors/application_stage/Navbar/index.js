import React from 'react'
import { useHistory } from 'react-router';
import LogoColored from '../../assets/img/logoColored.png'

import './styles.scss'

const Header = () => {
    const { push } = useHistory();
    const handleLogoClick = () => push('/')
    return (
        <div className="ambassadorNavWrapper">
            <div className="logoWrapper">
                <img src={LogoColored} alt="LogoImg" onClick={handleLogoClick} />
            </div>
        </div>
    )
}

export default Header
