import React from 'react';
import Features from './Features';
import WithSchoolng from './WithSchooln';
import Header from './Header';
import HowItWorks from './HowItWorks';
import GetInTouch from './GetInTouch';
import Footer from './../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <HowItWorks />
      <WithSchoolng />
      <Features />
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default HomePage;