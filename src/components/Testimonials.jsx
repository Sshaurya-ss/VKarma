import React from 'react';

const testimonialsData = [
    {
        id: 1,
        quote: "They completely revamped our B2B SaaS platform from scratch. Our drop-off rates plummeted by nearly 40% within the first month of launching the new UI. Exceptional eye for micro-interactions and seamless user flows.",
        name: "Rohan Varma",
        role: "Co-founder & CPO, FinEdge Labs (Bengaluru)"
    },
    {
        id: 2,
        quote: "Finding a dev team that genuinely understands modern full-stack performance is rare. They built our customer portal on Next.js, and our page load speeds went from sluggish to sub-second. Smooth delivery and zero fuss.",
        name: "Ananya Deshmukh",
        role: "VP of Engineering, LogiFlow India (Pune)"
    },
    {
        id: 3,
        quote: "From wireframes and Figma prototypes to production-ready frontend code, their team handled everything effortlessly. Clean design system, maintainable code, and delivered ahead of our launch timeline.",
        name: "Vikramaditya Nair",
        role: "Head of Digital Products, UrbanKart (Mumbai)"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="section testimonials-section">
            <div className="container">
                {/* ✏️ EDIT TESTIMONIALS SECTION TITLE BELOW */}
                <h2 className="section-title">What People Say</h2>
                
                <div className="testimonials-grid">
                    {testimonialsData.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="quote-mark">“</div>
                            <p className="testimonial-quote">
                                "{testimonial.quote}"
                            </p>
                            <div className="testimonial-footer">
                                <h4 className="client-name">{testimonial.name}</h4>
                                <p className="client-role">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
