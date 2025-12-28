import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaSpa, FaMagic, FaUserMd, FaCut } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Services.css';

const services = [
    {
        id: 1,
        title: "Facial Treatments",
        desc: "Revitalize your skin with our premium organic facials designed for glow and hydration.",
        icon: <FaSpa />
    },
    {
        id: 2,
        title: "Party Makeup",
        desc: "Get the perfect look for your special events with our professional makeup artists.",
        icon: <FaMagic />
    },
    {
        id: 3,
        title: "Skincare Therapy",
        desc: "Advanced treatments for acne, pigmentation, and anti-aging using top-tier products.",
        icon: <FaUserMd />
    },
    {
        id: 4,
        title: "Hair Styling & Cuts",
        desc: "From modern cuts to elegant updos, we give your hair the care it deserves.",
        icon: <FaCut />
    },
    {
        id: 5,
        title: "Manicure & Pedicure",
        desc: "Pamper your hands and feet with our relaxing mani-pedi sessions.",
        icon: <FaSpa />
    }
];

const Services = () => {
    return (
        <section className="services section-padding" id="services">
            <div className="container">
                <div className="text-center mb-5">
                    <span className="section-subtitle">Our Expertise</span>
                    <h2 className="section-title">Premium Services</h2>
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="services-swiper"
                >
                    {services.map((service) => (
                        <SwiperSlide key={service.id}>
                            <div className="service-card">
                                <div className="service-icon">
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <a href="#contact" className="service-link">Book Now</a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Services;
