import React from 'react';

const Profile = () => {
    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".laravel">Laravel</li>
                            <li data-filter=".react">REACT</li>
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                    <div className="col-lg-4 col-md-6 portfolio-item laravel">
                        <div className="portfolio-wrap">
                            <img src="/src/assets/img/portfolio/swmc.png" className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                   <a href="https://swmc.edu.bd/" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item react">
                        <div className="portfolio-wrap">
                            <img src="/src/assets/img/portfolio/react_1.png" className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a href="https://shutter-sense.web.app/" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item laravel">
                        <div className="portfolio-wrap">
                            <img src="/src/assets/img/portfolio/swnc.png" className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a href="https://swnc.edu.bd/" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item react">
                        <div className="portfolio-wrap">
                            <img src="/src/assets/img/portfolio/react_2.png" className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a href="https://zoo-zoom-toys.web.app/" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item react">
                        <div className="portfolio-wrap">
                            <img src="/src/assets/img/portfolio/react_3.png" className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item laravel">
                        <div className="portfolio-wrap">
                            <img src="/src/assets/img/portfolio/jswmc.png" className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <a href="https://journal.swmc.edu.bd/" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Profile;