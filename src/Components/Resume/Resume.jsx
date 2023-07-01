import React from 'react';

const Resume = () => {
    return (
        <section id="resume" className="resume">
            <div className="container">

                <div className="section-title">
                    <h2>Resume</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3 className="resume-title">Sumary</h3>
                        <div className="resume-item pb-0">
                            <h4>Alex Smith</h4>
                            <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                            <ul>
                                <li>Portland par 127,Orlando, FL</li>
                                <li>(123) 456-7891</li>
                                <li>alice.barkley@example.com</li>
                            </ul>
                        </div>

                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>MSc in Information Systems</h4>
                            <h5>2022 - 2023</h5>
                            <p><em>University of Portsmouth, UK</em></p>
                        </div>
                        <div className="resume-item">
                            <h4>BSc in CSE</h4>
                            <h5>2014 - 2017</h5>
                            <p><em>Leading University, Bangladesh</em></p>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                            <h4>IT Executive</h4>
                            <h5>2019 - 2022</h5>
                            <p><em>Sylhet Women's Medical College Hospital, Bangladesh </em></p>
                            <ul>
                                <li>Maintained ERP software along with the official website of SWMC, SWNC & JSWMC.</li>
                                <li>Provided technical assistance and training to staff members to use Software.</li>
                                <li>Problem diagnosis and support via phone & online</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Full Stack Web Developer</h4>
                            <h5>2017 - 2018</h5>
                            <p><em>Virtual Staffing, Sylhet, Bangladesh</em></p>
                            <ul>
                                <li>Design Website and Develop Web Applications</li>
                                <li>Assisted in developing and implementing systems artifacts.</li>
                                <li>Technical support and troubleshooting assistance to clients and end-users.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Resume;