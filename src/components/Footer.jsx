import React from 'react';
import logo from '../assets/logovks.png';

const Footer = () => {
    return (
        <>
            {/* Section 6: Contact */}
            <section id="contact" className="section contact-section">
                <div className="container contact-container">
                    {/* ✏️ EDIT CONTACT SECTION TITLE BELOW */}
                    <h2 className="section-title">Let's build something beautiful.</h2>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Jane Doe" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Work Email</label>
                            <input type="email" id="email" name="email" placeholder="jane@company.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="details">Project Details</label>
                            <textarea id="details" name="details" rows="5" placeholder="Tell us about your goals..." required></textarea>
                        </div>
                        {/* ✏️ EDIT CONTACT BUTTON TEXT BELOW */}
                        <button type="submit" className="btn btn-primary submit-btn">Start a Project</button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container footer-container">
                    <div className="footer-grid">
                        {/* Column 1: About */}
                        <div className="footer-column">
                            {/* ✏️ EDIT FOOTER COLUMN 1 HEADING BELOW */}
                            <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                                <img src={logo} alt="VKarmaStacks Logo" style={{ height: '32px', width: 'auto' }} />
                                <h4 className="footer-heading" style={{ marginBottom: 0 }}>VKarmaStacks</h4>
                            </div>
                            {/* ✏️ EDIT FOOTER COLUMN 1 TEXT BELOW */}
                            <p className="footer-text">
                                We are a premium design and development agency turning complex problems into intuitive web interfaces. Our mission is to build digital experiences people love to use.
                            </p>
                        </div>
                        
                        {/* Column 2: Services */}
                        <div className="footer-column">
                            {/* ✏️ EDIT FOOTER COLUMN 2 HEADING BELOW */}
                            <h4 className="footer-heading">Services</h4>
                            <ul className="footer-links">
                                {/* ✏️ EDIT FOOTER COLUMN 2 LINKS BELOW */}
                                <li><a href="#services">UI/UX Design</a></li>
                                <li><a href="#services">Web Development</a></li>
                                <li><a href="#services">Design Systems</a></li>
                                <li><a href="#services">E-Commerce</a></li>
                            </ul>
                        </div>

                        {/* Column 3: Connect */}
                        <div className="footer-column">
                            {/* ✏️ EDIT FOOTER COLUMN 3 HEADING BELOW */}
                            <h4 className="footer-heading">Connect</h4>
                            <ul className="footer-links">
                                {/* ✏️ EDIT FOOTER COLUMN 3 LINKS BELOW */}
                                <li><a href="#">LinkedIn</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Dribbble</a></li>
                                <li><a href="#contact">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Column 4: Legal/Info */}
                        <div className="footer-column">
                            {/* ✏️ EDIT FOOTER COLUMN 4 HEADING BELOW */}
                            <h4 className="footer-heading">Legal</h4>
                            <ul className="footer-links">
                                {/* ✏️ EDIT FOOTER COLUMN 4 LINKS BELOW */}
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Cookie Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="footer-bottom">
                        {/* ✏️ EDIT FOOTER COPYRIGHT TEXT BELOW */}
                        <p className="footer-copyright">&copy; 2026 VKarmaStacks. All rights reserved.</p>
                        {/* ✏️ EDIT FOOTER LOCATION TEXT BELOW */}
                        <p className="footer-location">Headquartered in Bangalore, India</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
