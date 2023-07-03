import React from 'react';
import Typed from 'react-typed';
import { FaCloudDownloadAlt } from "react-icons/fa";

const HeroSection = () => {

    const handleDownload = () => {
        const fileUrl = 'https://drive.google.com/file/d/1Sn001LCcwXvhAGNFaVZG3J8wiiOv7bmd/view';
        saveAs(fileUrl, 'document.pdf');
    }

    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container">
                <h1>Shihanur Rahman <br /> Chowdhury</h1>

                <p>I'm &nbsp;
                    <Typed
                        strings={['Full Stack Developer', 'MERN Stack Developer', 'JS Developer']}
                        typeSpeed={40}
                        loop
                    />
                </p>

                <div className='mt-3'>
                    <button onClick={handleDownload} className='downloadBtn heroDownloadBtn'><FaCloudDownloadAlt/> Download Resume</button>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;