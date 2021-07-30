import React from 'react';
import Features from './Features';
import WithSchoolng from './WithSchooln';
import Header from './Header';
import HowItWorks from './HowItWorks';
import GetInTouch from './GetInTouch';
import Footer from './../components/Footer';
import Ambassordors from './Ambassardors';
import Modal from '../components/Modal'

const HomePage = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const onClose = () => {
    setIsOpen(false);
  }
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} />
      <Header />
      <HowItWorks />
      <WithSchoolng />
      <Features />
      <Ambassordors />
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default HomePage;