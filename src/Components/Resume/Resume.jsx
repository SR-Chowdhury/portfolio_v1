import React from 'react';
import { saveAs } from 'file-saver';
import { FaDownload } from "react-icons/fa";


const Resume = () => {
    
    const handleDownload = () => {
        const fileUrl = 'https://drive.google.com/file/d/1Sn001LCcwXvhAGNFaVZG3J8wiiOv7bmd/view';
        saveAs(fileUrl, 'document.pdf');
    }

    return (
        <section id="resume" className="resume">
            <div className="container">

                <div className="section-title">
                    <h2>Resume</h2>
                    {/* <p></p> */}
                </div>

                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>MSc in Information Systems</h4>
                            <h5>2022 - 2023</h5>
                            <p><em>University of Portsmouth, UK</em></p>
                            <p style={{textAlign: 'justify'}}>
                                This degree has focused on the strategies that apply information technology to analyze and build innovative business solutions, developed problem-solving, managerial and communication skills.     
                            </p>
                            <ul>
                                <li><strong>Web product development and management:</strong> Evaluated the latest trends in web development and hypothesized on future developments.</li>
                                <li><strong> Database management:</strong> Critically reviewed the management of database technologies and performance tools.</li>
                                <li><strong> UX design:</strong> Assessed target users and their goals for specific tasks, and evaluated users' needs and environments.</li>
                                <li><strong> Computer management and networking:</strong> Identified and selected appropriate network devices or services to meet requirements needed by the end user.</li>
                                {/* <li><strong> Systems analysis for business:</strong> Developed a strategic understanding of systems analysis in modern organizations.</li> */}
                                <li><strong> Managing information systems:</strong> Critically reviewed all aspects of project strategy, development and maintenance.</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>BSc in CSE</h4>
                            <h5>2014 - 2017</h5>
                            <p><em>Leading University, Bangladesh</em></p>
                            <p className='mb-0'>Focused on the principles of computer science and engineering concepts as well as core understanding of programming, web & software development, problem solving, and critical thinking.</p>
                        </div>
                        <h3 className="resume-title">Language</h3>
                        <div className="resume-item">
                            <h4>Bengli</h4>
                            <p><em>Mother Tounge</em></p>
                        </div>
                        <div className="resume-item">
                            <h4>English</h4>
                            <p><em>Upper Intermediate</em></p>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                            <h4>IT Executive</h4>
                            <h5>2019 - 2022</h5>
                            <p><em>Sylhet Women's Medical College Hospital, Bangladesh </em></p>
                            <ul>
                                <li>Developed and maintained SWMC, SWNC, and Journal of SWMC websites.</li>
                                <li>Managed and maintained ERP software, including user management and administrative privileges, ensuring smooth operations and efficient user access.</li>
                                <li>Troubleshoot desktop and laptop issues, providing effective solutions.</li>
                                <li>Installed and configured network connections, ensuring seamless internet connectivity.</li>
                                <li>Generated and delivered reports to management, offering valuable insights.</li>
                                <li>Trained staff members on software utilization, enhancing their technical proficiency</li>
                                <li>Maintained effective communication with team members and stakeholders.</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Full Stack Web Developer</h4>
                            <h5>2017 - 2018</h5>
                            <p><em>Virtual Staffing, Sylhet, Bangladesh</em></p>
                            <ul>
                                <li>Designed websites from scratch and developed web applications for clients.</li>
                                <li>Assisted in developing and implementing systems artifacts.</li>
                                <li>Collaborated with a team of 11 members to accomplish project goals.</li>
                                <li>Provided technical support and solved challenges for customers and end-users.</li>
                                <li>Reported progress and updates to the team leader on a regular basis.</li> 
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='text-center mt-3'>
                    <button onClick={handleDownload} className='downloadBtn'><FaDownload/> Download Resume</button>
                </div>

            </div>
        </section>
    );
};

export default Resume;