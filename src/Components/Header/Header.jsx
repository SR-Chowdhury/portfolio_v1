import React, { useState, useEffect } from 'react';
// import profileImg from '../../assets/img/profile-img.jpg';
import profileImg from '../../assets/img/logo.jpeg';

const Header = () => {

    const [isMobileNavActive, setIsMobileNavActive] = useState(false);

    const handleMobileNavToggle = () => {
        setIsMobileNavActive(!isMobileNavActive);
    };


    const [activeSection, setActiveSection] = useState('#hero');

    const handleScrollTo = (e, hash) => {
        e.preventDefault();

        let body = document.querySelector('body');
        if (body.classList.contains('mobile-nav-active')) {
            setIsMobileNavActive(false);
        }

        const element = document.querySelector(hash);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    const handleSetActiveSection = (sectionId) => {
        setActiveSection(sectionId);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const sections = ['#hero', '#about', '#resume', '#portfolio', '#services', '#contact'];

            sections.forEach((sectionId) => {
                const sectionElement = document.querySelector(sectionId);
                if (sectionElement) {
                    const sectionTop = sectionElement.offsetTop;
                    const sectionBottom = sectionTop + sectionElement.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        setActiveSection(sectionId);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);


    return (
        <>
            <i className={`bi ${isMobileNavActive ? 'bi-x' : 'bi-list'} mobile-nav-toggle d-xl-none`}
                onClick={handleMobileNavToggle}>
            </i>

            <header id="header" className={isMobileNavActive ? 'mobile-nav-active' : ''}>
                <div className="d-flex flex-column">

                    <div className="profile">
                        <img src={profileImg} alt="SR - Profile Image" className="img-fluid rounded-circle" />
                        <h1 className="text-light"><a href="index.html">Shihan Chowdhury</a></h1>
                        <div className="social-links mt-3 text-center">
                            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>

                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li>
                                <a href="#hero"
                                    onClick={(e) => handleScrollTo(e, '#hero')}
                                    className={`nav-link scrollto ${activeSection === '#hero' ? 'active' : ''}`}>
                                    <i className="bx bx-home"></i> <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#about"
                                    onClick={(e) => handleScrollTo(e, '#about')}
                                    className={`nav-link scrollto ${activeSection === '#about' ? 'active' : ''}`}>
                                    <i className="bx bx-user"></i> <span>About</span>
                                </a>
                            </li>
                            <li>
                                <a href="#resume"
                                    onClick={(e) => handleScrollTo(e, '#resume')}
                                    className={`nav-link scrollto ${activeSection === '#resume' ? 'active' : ''}`}>
                                    <i className="bx bx-file-blank"></i> <span>Resume</span>
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio"
                                    onClick={(e) => handleScrollTo(e, '#portfolio')}
                                    className={`nav-link scrollto ${activeSection === '#portfolio' ? 'active' : ''}`}>
                                    <i className="bx bx-book-content"></i> <span>Portfolio</span>
                                </a>
                            </li>
                            <li>
                                <a href="#services"
                                    onClick={(e) => handleScrollTo(e, '#services')}
                                    className={`nav-link scrollto ${activeSection === '#services' ? 'active' : ''}`}>
                                    <i className="bx bx-server"></i> <span>Services</span>
                                </a>
                            </li>
                            <li>
                                <a href="#contact"
                                    onClick={(e) => handleScrollTo(e, '#contact')}
                                    className={`nav-link scrollto ${activeSection === '#contact' ? 'active' : ''}`}>
                                    <i className="bx bx-envelope"></i> <span>Contact</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>

    );
};

export default Header;