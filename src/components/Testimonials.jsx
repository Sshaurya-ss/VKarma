import React from 'react';

const Testimonials = () => {
    return (
        <section id="testimonials" className="section testimonials-section">
            <div className="container">
                {/* ✏️ EDIT TESTIMONIALS SECTION TITLE BELOW */}
                <h2 className="section-title">What People Say</h2>
                
                <div className="testimonials-grid">
                    {/* Testimonial Card 1 */}
                    <div className="testimonial-card">
                        <div className="quote-mark">“</div>
                        {/* ✏️ EDIT TESTIMONIAL 1 QUOTE BELOW */}
                        <p className="testimonial-quote">
                            "The team transformed our complex, messy workflows into a sleek, intuitive digital experience. Our users absolutely love the new interface."
                        </p>
                        <div className="testimonial-footer">
                            {/* ✏️ EDIT TESTIMONIAL 1 NAME BELOW */}
                            <h4 className="client-name">Sarah Jenkins</h4>
                            {/* ✏️ EDIT TESTIMONIAL 1 COMPANY/ROLE BELOW */}
                            <p className="client-role">VP of Product, FinTech Innovators</p>
                        </div>
                    </div>

                    {/* Testimonial Card 2 */}
                    <div className="testimonial-card">
                        <div className="quote-mark">“</div>
                        {/* ✏️ EDIT TESTIMONIAL 2 QUOTE BELOW */}
                        <p className="testimonial-quote">
                            "Working with them was a seamless process. They understood our brand vision from day one and delivered a website that exceeded all expectations."
                        </p>
                        <div className="testimonial-footer">
                            {/* ✏️ EDIT TESTIMONIAL 2 NAME BELOW */}
                            <h4 className="client-name">Marcus Chen</h4>
                            {/* ✏️ EDIT TESTIMONIAL 2 COMPANY/ROLE BELOW */}
                            <p className="client-role">Founder, RetailSphere</p>
                        </div>
                    </div>

                    {/* Testimonial Card 3 */}
                    <div className="testimonial-card">
                        <div className="quote-mark">“</div>
                        {/* ✏️ EDIT TESTIMONIAL 3 QUOTE BELOW */}
                        <p className="testimonial-quote">
                            "Their attention to detail and design aesthetic is unmatched. Not only does the product look incredible, but it's also incredibly fast and responsive."
                        </p>
                        <div className="testimonial-footer">
                            {/* ✏️ EDIT TESTIMONIAL 3 NAME BELOW */}
                            <h4 className="client-name">Elena Rodriguez</h4>
                            {/* ✏️ EDIT TESTIMONIAL 3 COMPANY/ROLE BELOW */}
                            <p className="client-role">Director of Marketing, CloudScale</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
