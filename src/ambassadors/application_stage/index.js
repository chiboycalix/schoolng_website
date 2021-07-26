import React from 'react'
import Footer from '../../components/Footer'
import About from './About'
import Benefits from './Benefits'
import HowTo from './HowTo'
import Navbar from './Navbar'
import Role from './Role'

const Ambassadors = () => {
    return (
        <div>
            <Navbar />
            <About />
            <Role />
            <HowTo />
            <Benefits />
            <Footer />
        </div>
    )
}

export default Ambassadors
