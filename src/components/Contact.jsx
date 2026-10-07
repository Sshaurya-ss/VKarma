import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import contactVideo from '../Contactuspage.mp4';

const Contact = () => {
    const form = useRef();
    const videoRef = useRef(null);
    const [isSent, setIsSent] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && videoRef.current) {
                    videoRef.current.currentTime = 0;
                    videoRef.current.play().catch(error => console.log('Video play failed:', error));
                }
            },
            { threshold: 0.5 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_wupkpe2',
            'template_l11fum9',
            form.current,
            '8zVT3cTZdwZzlxJnN'
        ).then(
            () => {
                setIsSent(true);
                form.current.reset();
            },
            (error) => {
                console.log('FAILED...', error.text);
            }
        );
    };

    return (
        <section id="contact" className="section contact-section" style={{ position: 'relative', overflow: 'hidden' }}>
            <video
                ref={videoRef}
                src={contactVideo}
                muted
                playsInline
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2 }}
            />
            <div className="video-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(10, 10, 12, 0.6), rgba(10, 10, 12, 0.8))', zIndex: -1 }}></div>
            <div className="container contact-container" style={{ position: 'relative', zIndex: 1, backgroundColor: 'transparent' }}>
                <h2 className="section-title" style={{ color: '#FFFFFF' }}>Let's build something beautiful.</h2>
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name" style={{ color: '#FFFFFF' }}>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Snehil Shaurya"
                            required
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', border: '2px solid #000000', color: '#FFFFFF' }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" style={{ color: '#FFFFFF' }}>Work Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="snehilshaurya@vkarmastacks.xyz"
                            required
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', border: '2px solid #000000', color: '#FFFFFF' }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" style={{ color: '#FFFFFF' }}>Project Details</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Tell us about your goals..."
                            required
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', border: '2px solid #000000', color: '#FFFFFF' }}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary submit-btn">
                        {isSent ? 'Message Sent!' : 'Start a Project'}
                    </button>
                    {isSent && (
                        <p style={{ color: '#4ade80', marginTop: '1rem', fontSize: '0.95rem', fontWeight: '600', textAlign: 'center' }}>
                            Thank you! Your project details have been sent to our team.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
