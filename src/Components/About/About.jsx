import React from 'react';
import profileImg from '../../assets/img/profile-img.jpg';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">

                <div className="section-title">
                    <h2>About</h2>
                    <p style={{ textAlign: 'justify' }}>Experienced web developer with one year of experience in React and three years of experience in Laravel. Skilled in structuring, developing, and deploying interactive web applications. Proficient in advanced programming, design, web content management, landing page development, collaboration, website optimization, and problem-solving.</p>
                </div>

                <div className="row flex align-items-center">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src="https://i.ibb.co/vjR7y5R/IMG-4349.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>Full Stack Developer</h3>
                        {/* <p className="fst-italic"></p> */}
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>First Name:</strong> <span>Shihanur Rahman</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Last Name:</strong> <span>Chowdhury</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+447453321204</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Portsmouth, UK</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Nationality:</strong> <span>Bangladeshi</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>MSc Information Systems</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>chowdhuryshihan93@gmail.com</span></li>
                                </ul>
                            </div>
                        </div>
                        {/* <p></p> */}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;