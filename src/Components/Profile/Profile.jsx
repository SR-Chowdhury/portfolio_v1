import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const Profile = () => {
    const [filter, setFilter] = useState('*');

    const handleFilterClick = (event) => {
        const selectedFilter = event.target.getAttribute('data-filter');
        setFilter(selectedFilter);
    };

    const portfolioItems = [
        {
            imageSrc: 'https://i.ibb.co/ZXXwBRF/swmc.png',
            filters: ['laravel'],
            liveLink: 'https://swmc.edu.bd/',
        },
        {
            imageSrc: 'https://i.ibb.co/3rqNd5g/react-1.png',
            filters: ['react'],
            liveLink: 'https://shutter-sense.web.app/',
            githubClientLink: 'https://github.com/SR-Chowdhury/shutter-sense-client',
            githubServerLink: 'https://github.com/SR-Chowdhury/shutter-sense-server',
        },
        {
            imageSrc: 'https://i.ibb.co/JvCxPvd/swnc.png',
            filters: ['laravel'],
            liveLink: 'https://swnc.edu.bd/',
        },
        {
            imageSrc: 'https://i.ibb.co/bFHqnND/react-3.png',
            filters: ['react'],
            liveLink: 'https://asian-food-kings.web.app/',
            githubClientLink: 'https://github.com/SR-Chowdhury/chef-recipe-hunting-client',
            githubServerLink: 'https://github.com/SR-Chowdhury/chef-recipe-hunting-server',
        },
        {
            imageSrc: 'https://i.ibb.co/3YjJKm3/jswmc.png',
            filters: ['laravel'],
            liveLink: 'https://journal.swmc.edu.bd/',
        },
        {
            imageSrc: 'https://i.ibb.co/PC3MMWq/react-2.png',
            filters: ['react'],
            liveLink: 'https://zoo-zoom-toys.web.app/',
            githubClientLink: 'https://github.com/SR-Chowdhury/zoo-zoom-toys-client',
            githubServerLink: 'https://github.com/SR-Chowdhury/zoo-zoom-toys-server',
        }
    ];

    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Portfolio</h2>
                </div>

                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li
                                data-filter="*"
                                className={filter === '*' ? 'filter-active' : ''}
                                onClick={handleFilterClick}
                            >
                                All
                            </li>
                            <li
                                data-filter="laravel"
                                className={filter === 'laravel' ? 'filter-active' : ''}
                                onClick={handleFilterClick}
                            >
                                Laravel
                            </li>
                            <li
                                data-filter="react"
                                className={filter === 'react' ? 'filter-active' : ''}
                                onClick={handleFilterClick}
                            >
                                React
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                    {portfolioItems.map((item, index) => {
                        const { imageSrc, filters, liveLink, githubClientLink, githubServerLink } = item;
                        if (filter === '*' || filters.includes(filter)) {
                            return (
                                <div className={`col-lg-4 col-md-6 portfolio-item ${filters.join(' ')}`} key={index}>
                                    <div className="portfolio-wrap">
                                        <img src={imageSrc} className="img-fluid" alt="" />
                                        <div className="portfolio-links">
                                            <a href={liveLink} title="Live Link">
                                                <i className="bx bx-link"></i>
                                            </a>
                                            {githubClientLink && (
                                                <a href={githubClientLink} className="bx pt-1" title="Github - Client">
                                                    <FaGithub />
                                                </a>
                                            )}
                                            {githubServerLink && (
                                                <a href={githubServerLink} className="bx pt-1" title="Github - Server">
                                                    <FaGithub />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </section>
    );
};

export default Profile;
