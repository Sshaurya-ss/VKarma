import React from 'react';

const Expertise = () => {
    return (
        <section id="services" className="section services-section">
            <div className="container">
                {/* ✏️ EDIT SERVICES SECTION TITLE BELOW */}
                <h2 className="section-title dark-title">What we do.</h2>
                
                <div className="cuberto-list">
                    {/* Service Row 1 */}
                    <div className="cuberto-row">
                        <div className="cuberto-row-content">
                            {/* ✏️ EDIT SERVICE 1 TITLE BELOW */}
                            <h3 className="cuberto-title">UI/UX Design</h3>
                            <span className="cuberto-arrow">➔</span>
                        </div>
                        <div className="cuberto-reveal">
                            <div className="cuberto-media-placeholder">
                                {/* ✏️ EDIT SERVICE 1 DESCRIPTION BELOW */}
                                <p className="cuberto-desc">Wireframing, user journeys, and high-fidelity interfaces that captivate and convert.</p>
                            </div>
                        </div>
                    </div>

                    {/* Service Row 2 */}
                    <div className="cuberto-row">
                        <div className="cuberto-row-content">
                            {/* ✏️ EDIT SERVICE 2 TITLE BELOW */}
                            <h3 className="cuberto-title">Web Development</h3>
                            <span className="cuberto-arrow">➔</span>
                        </div>
                        <div className="cuberto-reveal">
                            <div className="cuberto-media-placeholder">
                                {/* ✏️ EDIT SERVICE 2 DESCRIPTION BELOW */}
                                <p className="cuberto-desc">Responsive, performance-optimized web architectures built with modern frameworks.</p>
                            </div>
                        </div>
                    </div>

                    {/* Service Row 3 */}
                    <div className="cuberto-row">
                        <div className="cuberto-row-content">
                            {/* ✏️ EDIT SERVICE 3 TITLE BELOW */}
                            <h3 className="cuberto-title">Brand Identity</h3>
                            <span className="cuberto-arrow">➔</span>
                        </div>
                        <div className="cuberto-reveal">
                            <div className="cuberto-media-placeholder">
                                {/* ✏️ EDIT SERVICE 3 DESCRIPTION BELOW */}
                                <p className="cuberto-desc">Scalable design systems ensuring consistent experiences across all digital touchpoints.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expertise;
