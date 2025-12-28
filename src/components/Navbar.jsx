import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <div className="logo">
                    <a href="#">Beauty Studio <span className="logo-accent">by Aqsa</span></a>
                </div>

                <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
                        <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
                        <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
                        <li><a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</a></li>
                        <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
                    </ul>
                </div>

                <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
