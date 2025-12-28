import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';
import aboutImage from '../assets/about-spa.png';

const About = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;

        gsap.fromTo(imageRef.current,
            { x: -50, opacity: 0 },
            {
                x: 0, opacity: 1, duration: 1, ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 70%',
                }
            }
        );

        gsap.fromTo(textRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 70%',
                }
            }
        );

    }, []);

    return (
        <section className="about section-padding" id="about" ref={sectionRef}>
            <div className="container about-container">
                <div className="about-image-wrapper" ref={imageRef}>
                    <img src={aboutImage} alt="Relaxing Spa Treatment" className="about-img" />
                    <div className="about-shape"></div>
                </div>

                <div className="about-content" ref={textRef}>
                    <span className="section-subtitle">About Us</span>
                    <h2 className="section-title">Experience the Art of Beauty</h2>
                    <p className="about-text">
                        At Beauty Studio by Aqsa, we believe that beauty is a personal journey. Located in the heart of Gujrat, our salon offers a sanctuary where you can escape the daily rush and indulge in premium care.
                    </p>
                    <p className="about-text">
                        Our team of professional stylists and aestheticians are dedicated to bringing out your best version using high-quality products and modern techniques. Whether it's a refreshing facial, a stunning makeover, or a relaxing hair treatment, we ensure a luxurious experience.
                    </p>
                    <div className="about-stats">
                        <div className="stat-item">
                            <h3>5+</h3>
                            <p>Years Experience</p>
                        </div>
                        <div className="stat-item">
                            <h3>1k+</h3>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                    <a href="#services" className="btn btn-primary">Our Services</a>
                </div>
            </div>
        </section>
    );
};

export default About;
