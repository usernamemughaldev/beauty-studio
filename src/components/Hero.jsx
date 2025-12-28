import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Background fade in
        tl.fromTo(heroRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5, ease: 'power2.out' }
        )
            // Text slide up
            .fromTo(textRef.current.children,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' },
                "-=0.5"
            );

    }, []);

    return (
        <section className="hero" id="home" ref={heroRef} style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-content" ref={textRef}>
                <span className="hero-subtitle">Welcome to Beauty Studio</span>
                <h1 className="hero-title">Luxury Beauty Experience <br /> in Gujrat</h1>
                <p className="hero-text">Discover a world of elegance, relaxation, and transformation. Expert care tailored to your unique beauty.</p>
                <div className="hero-buttons">
                    <a href="#contact" className="btn btn-primary">Book Appointment</a>
                    <a href="#services" className="btn btn-outline-light">Explore Services</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
