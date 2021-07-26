import React from 'react';
import Navbar from '../../components/Navbar';
import Header from './Header';
import MeetAmbassadors from './MeetAmbassadors/';
import Footer from '../../components/Footer';
import WithSchoolng from '../../sections/WithSchooln';
import './styles.scss'

const SelectedAmbassadors = () => {
  return (
    <div className="selectedAmbassadorsWrapper">
      <Navbar />
      <Header />
      <MeetAmbassadors />
      <WithSchoolng />
      <Footer />
    </div>
  )
}

export default SelectedAmbassadors