import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                {/* ✏️ EDIT HERO HEADLINE BELOW */}
                <h1 className="hero-title">We build digital experiences people love to use.</h1>
                {/* ✏️ EDIT HERO SUBTITLE BELOW */}
                <p className="hero-subtitle">A specialized design and development studio turning complex problems into intuitive web interfaces.</p>
                {/* ✏️ EDIT HERO BUTTON TEXT BELOW */}
                <a href="#contact" className="btn btn-primary">Start a Project</a>
            </div>
        </section>
    );
};

export default Hero;
