import React from 'react';
import { FaGithub } from "react-icons/fa";

const Profile = () => {
    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Portfolio</h2>
                    {/* <p></p> */}
                </div>

                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".laravel">Laravel</li>
                            <li data-filter=".react">REACT</li>
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-container">

                    <div className="col-lg-4 col-md-6 portfolio-item laravel">
                        <div className="portfolio-wrap">
                            <img src="https://i.ibb.co/ZXXwBRF/swmc.png" className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                   <a href="https://swmc.edu.bd/" title="Live Link"><i className="bx bx-link"></i></a>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item react">
                        <div className="portfolio-wrap">
                            <img src="https://i.ibb.co/3rqNd5g/react-1.png" className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a href="https://shutter-sense.web.app/" title="Live Link"><i className="bx bx-link"></i></a>
                                    <a href="https://github.com/SR-Chowdhury/shutter-sense-client" className='bx pt-1' title="Github - Client"><FaGithub/></a>
                                    <a href="https://github.com/SR-Chowdhury/shutter-sense-server" className='bx pt-1' title="Github - Server"><FaGithub/></a>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item laravel">
                        <div className="portfolio-wrap">
                            <img src="https://i.ibb.co/JvCxPvd/swnc.png" className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a href="https://swnc.edu.bd/" title="Live Link"><i className="bx bx-link"></i></a>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item react">
                        <div className="portfolio-wrap">
                            <img src="https://i.ibb.co/PC3MMWq/react-2.png" className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a href="https://zoo-zoom-toys.web.app/" title="Live Link"><i className="bx bx-link"></i></a>
                                    <a href="https://github.com/SR-Chowdhury/zoo-zoom-toys-client" className='bx pt-1' title="Github - Client"><FaGithub/></a>
                                    <a href="https://github.com/SR-Chowdhury/zoo-zoom-toys-server" className='bx pt-1' title="Github - Server"><FaGithub/></a>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item react">
                        <div className="portfolio-wrap">
                            <img src="https://i.ibb.co/bFHqnND/react-3.png" className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a href="https://asian-food-kings.web.app/" title="Live Link"><i className="bx bx-link"></i></a>
                                    <a href="https://github.com/SR-Chowdhury/chef-recipe-hunting-client" className='bx pt-1' title="Github - Client"><FaGithub/></a>
                                    <a href="https://github.com/SR-Chowdhury/chef-recipe-hunting-server" className='bx pt-1' title="Github - Server"><FaGithub/></a>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item laravel">
                        <div className="portfolio-wrap">
                            <img src="https://i.ibb.co/3YjJKm3/jswmc.png" className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a href="https://journal.swmc.edu.bd/" title="Live Link"><i className="bx bx-link"></i></a>
                                </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Profile;