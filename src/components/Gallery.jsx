import React from 'react';
import './Gallery.css';

// Using placeholder images for demo, in production replace with real salon work
const galleryImages = [
    "https://images.unsplash.com/photo-1560066984-d9493f21cf33?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1596178065248-f8d910ba6a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
];

const Gallery = () => {
    return (
        <section className="gallery section-padding" id="gallery">
            <div className="container">
                <div className="text-center mb-5">
                    <span className="section-subtitle">Our Portfolio</span>
                    <h2 className="section-title">Gallery</h2>
                </div>

                <div className="gallery-grid">
                    {galleryImages.map((src, index) => (
                        <div className="gallery-item" key={index}>
                            <img src={src} alt={`Gallery ${index + 1}`} loading="lazy" />
                            <div className="gallery-overlay">
                                <div className="overlay-content">Beauty Studio</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
