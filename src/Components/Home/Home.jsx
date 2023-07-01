import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import About from '../About/About';
import Facts from '../Facts/Facts';
import Skills from '../Skills/Skills';
import Resume from '../Resume/Resume';
import Profile from '../Profile/Profile';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';

const Home = () => {

    return (
        <div className=''>
            <Header/>
            <HeroSection />
            <main id="main">
                <About />
                {/* <Facts/> */}
                <Skills/>
                <Resume/>
                <Profile/>
                {/* <Services/> */}
                <Testimonial/>
                <Contact/>
            </main>
        </div>
    );
};

export default Home;