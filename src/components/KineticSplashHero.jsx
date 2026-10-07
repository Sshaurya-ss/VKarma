import React, { useEffect, useState } from 'react';
import './KineticSplashHero.css';
import logo from '../assets/logovks.png';

const KineticSplashHero = () => {
    const [phase, setPhase] = useState('splash'); // 'splash' -> 'transition' -> 'done'

    useEffect(() => {
        // Phase 1 (0 to 2s): Splash screen with glowing particles and breathing logo
        const timer1 = setTimeout(() => {
            // Phase 2 (2s to 3.5s): Transition out overlay, scale down logo and slide it
            setPhase('transition');
        }, 2000);

        // Phase 3 (3s onwards): Fade in text, make particles permanent mesh
        const timer2 = setTimeout(() => {
            setPhase('done');
        }, 3000); // Trigger hero text fade in slightly before 3.5s so it feels smooth

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    // Global body class for header fade-in (simultaneous with Phase 3)
    useEffect(() => {
        if (phase === 'done') {
            document.body.classList.add('splash-complete');
        } else {
            document.body.classList.remove('splash-complete');
        }
    }, [phase]);

    return (
        <section className={`kinetic-wrapper ${phase}`}>
            {/* The Gradient Mesh / Particles */}
            <div className="kinetic-mesh-container">
                <div className="particle p-navy"></div>
                <div className="particle p-teal"></div>
                <div className="particle p-mint"></div>
            </div>

            {/* The Animating Splash Logo Overlay */}
            <div className="kinetic-logo-overlay">
                <img src={logo} alt="VKarmaStacks Logo" className="kinetic-logo-img" />
            </div>

            {/* The Actual Hero Content (Fades in at Phase 3) */}
            <div className="kinetic-hero-content section hero-section">
                <div className="container hero-container">
                    {/* ✏️ EDIT HERO TITLE BELOW */}
                    <h1 className="hero-title">
                        We build digital experiences<br />people love to use.
                    </h1>
                    
                    {/* ✏️ EDIT HERO SUBTITLE BELOW */}
                    <p className="hero-subtitle">
                        A specialized design and development studio turning complex problems into intuitive web interfaces.
                    </p>
                    
                    {/* ✏️ EDIT BUTTON TEXT & LINK BELOW */}
                    <div className="hero-cta">
                        <a href="#contact" className="btn btn-primary">Start a Project</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KineticSplashHero;
