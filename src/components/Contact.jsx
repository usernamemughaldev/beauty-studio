import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaInstagram, FaFacebook } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact section-padding" id="contact">
            <div className="container contact-container">
                <div className="contact-info">
                    <span className="section-subtitle">Visit Us</span>
                    <h2 className="section-title">Contact & Location</h2>
                    <p className="contact-desc">We are looking forward to welcoming you to our studio.</p>

                    <div className="info-item">
                        <div className="icon"><FaMapMarkerAlt /></div>
                        <div>
                            <h4>Address</h4>
                            <p>Ali Pura Rd, near Isma Institute, Gulberg Colony, Gujrat</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="icon"><FaPhoneAlt /></div>
                        <div>
                            <h4>Phone</h4>
                            <p>+92 342 9328532</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="icon"><FaClock /></div>
                        <div>
                            <h4>Hours</h4>
                            <p>Mon - Sun: 10:00 AM - 10:00 PM</p>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="#" className="social-icon"><FaInstagram /></a>
                        <a href="#" className="social-icon"><FaFacebook /></a>
                    </div>
                </div>

                <div className="contact-map">
                    {/* Placeholder Map - using a standard iframe embed */}
                    <div className="map-frame">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.228919690184!2d74.0725!3d32.5739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f1b2c4e111111%3A0x1111111111111111!2sGulberg%20Colony%2C%20Gujrat!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Salon Location"
                        ></iframe>
                    </div>
                    {/* Note: Coordinates are approximate for Gujrat based on address description */}
                </div>
            </div>
        </section>
    );
};

export default Contact;
