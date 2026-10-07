import React from 'react';
import fintechImg from '../images/1st image.jpg';
import ecommerceImg from '../images/2nd image.jpg';
import saasImg from '../images/3rd image.jpg';

const Concepts = () => {
    return (
        <section id="work" className="section work-section">
            <div className="container">
                {/* ✏️ EDIT WORK SECTION TITLE BELOW */}
                <h2 className="section-title">Capabilities & Concepts</h2>
                <div className="work-grid">
                    {/* Work Item 1 */}
                    <div className="work-item">
                        <div className="work-text">
                            {/* ✏️ EDIT WORK ITEM 1 TITLE BELOW */}
                            <h3>Fintech Dashboard</h3>
                            {/* ✏️ EDIT WORK ITEM 1 DESCRIPTION BELOW */}
                            <p>A clean, data-dense interface architecture designed for clarity and rapid decision making in financial markets.</p>
                        </div>
                        <div 
                            className="mockup-container"
                            style={{
                                width: '100%',
                                aspectRatio: '16 / 10',
                                maxHeight: '320px',
                                overflow: 'hidden',
                                borderRadius: '12px'
                            }}
                        >
                            <img 
                                src={fintechImg} 
                                alt="Fintech analytics and metrics dashboard preview" 
                                loading="lazy" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }}
                            />
                        </div>
                    </div>
                    {/* Work Item 2 */}
                    <div className="work-item reverse">
                        <div 
                            className="mockup-container"
                            style={{
                                width: '100%',
                                aspectRatio: '16 / 10',
                                maxHeight: '320px',
                                overflow: 'hidden',
                                borderRadius: '12px'
                            }}
                        >
                            <img 
                                src={ecommerceImg} 
                                alt="Modern e-commerce shopping experience interface" 
                                loading="lazy" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }}
                            />
                        </div>
                        <div className="work-text">
                            {/* ✏️ EDIT WORK ITEM 2 TITLE BELOW */}
                            <h3>E-Commerce Experience</h3>
                            {/* ✏️ EDIT WORK ITEM 2 DESCRIPTION BELOW */}
                            <p>Frictionless checkout flows and immersive product discovery, enhancing the modern retail journey.</p>
                        </div>
                    </div>
                    {/* Work Item 3 */}
                    <div className="work-item">
                        <div className="work-text">
                            {/* ✏️ EDIT WORK ITEM 3 TITLE BELOW */}
                            <h3>SaaS Platform</h3>
                            {/* ✏️ EDIT WORK ITEM 3 DESCRIPTION BELOW */}
                            <p>Intuitive user management and analytics views that simplify complex workflows for enterprise teams.</p>
                        </div>
                        <div 
                            className="mockup-container"
                            style={{
                                width: '100%',
                                aspectRatio: '16 / 10',
                                maxHeight: '320px',
                                overflow: 'hidden',
                                borderRadius: '12px'
                            }}
                        >
                            <img 
                                src={saasImg} 
                                alt="Cloud-based SaaS platform workflow interface" 
                                loading="lazy" 
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Concepts;
