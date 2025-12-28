import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-logo">
                    <h2>Beauty Studio <span className="logo-accent">by Aqsa</span></h2>
                </div>
                <div className="footer-links">
                    <p>&copy; {new Date().getFullYear()} Beauty Studio by Aqsa. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
