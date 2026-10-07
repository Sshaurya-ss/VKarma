import React, { useState } from 'react';
import uiImg from './ui.png';
import webdevImg from './webdev.png';
import image6 from './image_6.png';
import erpImg from './erp.png';
import customImg from './custom.png';
import ecommerceImg from './ecommerce.png';

const services = [
    { title: 'UI/UX Design', desc: 'Wireframing, user journeys, and high-fidelity interfaces that captivate and convert.', image: uiImg, align: 'right' },
    { title: 'Web Development', desc: 'Responsive, performance-optimized web architectures built with modern frameworks.', image: webdevImg, align: 'right' },
    { title: 'Brand Identity', desc: 'Scalable design systems ensuring consistent experiences across all digital touchpoints.', image: image6, align: 'left' },
    { title: 'ERP Portal', desc: 'Custom enterprise resource planning solutions to streamline your business operations.', image: erpImg, align: 'right' },
    { title: 'Custom Software', desc: 'Tailor-made software applications designed to solve your unique business challenges.', image: customImg, align: 'left' },
    { title: 'E-commerce', desc: 'Robust and scalable online stores optimized for maximum conversion and user experience.', image: ecommerceImg, align: 'right' },
];

const Expertise = () => {
    const [activeHoverIndex, setActiveHoverIndex] = useState(null);

    return (
        <section id="services" className="section services-section">
            <div className="container">
                <h2 className="section-title dark-title">What we do.</h2>
                
                <div className="services-grid-wrapper">
                    <div className="service-accordion">
                        {services.map((service, index) => (
                            <div 
                                key={index} 
                                className={`service-row ${activeHoverIndex === index ? 'active' : ''}`}
                                onMouseEnter={() => setActiveHoverIndex(index)}
                                onMouseLeave={() => setActiveHoverIndex(null)}
                            >
                                <div className="service-bg">
                                    <img 
                                        src={service.image} 
                                        alt={service.title} 
                                        className="service-bg-img"
                                        style={{ objectPosition: service.align }}
                                    />
                                    <div className="service-overlay"></div>
                                </div>
                                <div className="service-content">
                                    <div className="service-header">
                                        <h3 className="service-title">{service.title}</h3>
                                        <span className={`service-arrow ${activeHoverIndex === index ? 'open' : ''}`}>➔</span>
                                    </div>
                                    <div className="service-reveal">
                                        <div className="service-desc-wrapper">
                                            <p className="service-desc">{service.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expertise;
