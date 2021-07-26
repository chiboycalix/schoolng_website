import React from 'react';
import './styles.scss';
import NavBar from '../../components/Navbar';
import { HiArrowNarrowDown } from 'react-icons/all';
import Students from '../../assets/img/headerimg.png';
import circlesIcon from '../../assets/img/speakIcons.svg'
import Typewriter from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index.css';
import DownloadHeader from '../../components/DownloadHeader'

const Header = () => {

  return (
    <div className="headerWrapper">
      <NavBar />

      <div className="headerContentWrapper">
        <div className="headerContentWrapperLeft">
          <div className="headerContent">
            <p className="schooolnText">Schooln.ng</p>
            <h1 className="schoolnHeaderText">Who said Schooling can't be
            <span style={{ fontWeight: 'bold' }}>
                <Typewriter
                  loop
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={200}
                  delaySpeed={1000}
                  words={[' fun?', ' amazing?']}
                />
              </span>
            </h1>

            <p className="schooolnParagraph">Make friends and connect with students from schools all around you</p>
            <DownloadHeader />
          </div>
        </div>
        <div className="headerContentWrapperRight">
          <div className="contentRightWrapper">
            <img src={Students} alt="Students" className="students" />
            <img src={circlesIcon} alt="circlesIcon" className="circlesIcon" />
            <div className="gistWrapper">
              <p>
                <Typewriter
                  loop
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={200}
                  delaySpeed={1000}
                  words={["Schooln.ng is one of the easiest and most effective way to connect with students and alumni from your institution and other institutions. You just decide where you want them from."]}
                />
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="scrollbuttonWrapper">
        <a href="#howitworks">Scroll Down</a>
        <span><HiArrowNarrowDown /></span>
      </div>

    </div>
  )
}

export default Header;