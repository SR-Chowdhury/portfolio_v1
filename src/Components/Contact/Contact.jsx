import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-title">
                    <h2>Contact</h2>
                    {/* <p></p> */}
                </div>

                <div className="row" data-aos="fade-in">

                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <h4>Location:</h4>
                                <p>Portsmouth, United Kingdom</p>
                            </div>

                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <p>chowdhuryshihan93@gmail.com</p>
                            </div>

                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>+447453321204</p>
                            </div>

                            
                        </div>

                    </div>

                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form className="php-email-form">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label>Your Name</label>
                                    <input type="text" name="name" className="form-control" id="name" required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Your Email</label>
                                    <input type="email" className="form-control" name="email" id="email" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text" className="form-control" name="subject" id="subject" required/>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea className="form-control" name="message" rows="10" required></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;