import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './Reviews.css';

const reviews = [
    {
        id: 1,
        name: "Sana Khan",
        rating: 5,
        text: "Beautiful experience, staff is professional and welcoming. The facial treatments are out of this world!"
    },
    {
        id: 2,
        name: "Ayesha Malik",
        rating: 5,
        text: "Facial experience was amazing. My skin feels so rejuvenated. Highly recommended ♥️"
    },
    {
        id: 3,
        name: "Fatima Ahmed",
        rating: 4,
        text: "Great atmosphere and lovely staff. The party makeup was exactly what I wanted."
    },
    {
        id: 4,
        name: "Zainab Ali",
        rating: 5,
        text: "Best salon in Gujrat! The services are premium and the place is so relaxing."
    }
];

const Reviews = () => {
    return (
        <section className="reviews section-padding" id="reviews">
            <div className="container">
                <div className="text-center mb-5">
                    <span className="section-subtitle">What Clients Say</span>
                    <h2 className="section-title">Testimonials</h2>
                </div>

                <div className="reviews-rating-summary">
                    <span className="rating-score">4.8</span>
                    <div className="stars">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <span className="review-count">Based on 50+ Reviews</span>
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="reviews-swiper"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <div className="review-card">
                                <div className="quote-icon"><FaQuoteLeft /></div>
                                <p className="review-text">"{review.text}"</p>
                                <div className="review-stars">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>
                                <h4 className="review-name">{review.name}</h4>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Reviews;
