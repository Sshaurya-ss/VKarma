import React, { useState } from 'react';

const services = [
    { title: 'UI/UX Design', desc: 'Wireframing, user journeys, and high-fidelity interfaces that captivate and convert.' },
    { title: 'Web Development', desc: 'Responsive, performance-optimized web architectures built with modern frameworks.' },
    { title: 'Brand Identity', desc: 'Scalable design systems ensuring consistent experiences across all digital touchpoints.' },
    { title: 'ERP Portal', desc: 'Custom enterprise resource planning solutions to streamline your business operations.' },
    { title: 'Custom Software', desc: 'Tailor-made software applications designed to solve your unique business challenges.' },
    { title: 'E-commerce', desc: 'Robust and scalable online stores optimized for maximum conversion and user experience.' },
];

const Expertise = () => {
    const [activeHoverIndex, setActiveHoverIndex] = useState(null);

    return (
        <section id="services" className="section services-section">
            <div className="container">
                {/* ✏️ EDIT SERVICES SECTION TITLE BELOW */}
                <h2 className="section-title dark-title">What we do.</h2>
                
                <div className="services-grid-wrapper">
                    <div className="cuberto-list">
                        {services.map((service, index) => (
                            <div 
                                key={index} 
                                className={`cuberto-row ${activeHoverIndex === index ? 'active' : ''}`}
                                onMouseEnter={() => setActiveHoverIndex(index)}
                                onMouseLeave={() => setActiveHoverIndex(null)}
                            >
                                <div className="cuberto-row-content">
                                    <h3 className="cuberto-title">{service.title}</h3>
                                    <span className="cuberto-arrow">➔</span>
                                </div>
                                <div className="cuberto-reveal">
                                    <div className="cuberto-media-placeholder">
                                        <p className="cuberto-desc">{service.desc}</p>
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
