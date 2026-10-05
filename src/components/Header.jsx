import React from 'react';
import logo from '../assets/logovks.png';

const Header = () => {
    return (
        <header className="header">
            <div className="container header-container">
                {/* ✏️ EDIT LOGO IMAGE BELOW */}
                <div className="logo">
                    <a href="/" className="logo-link">
                        <div className="logo-icon">
                            <img src={logo} alt="VKarmaStacks Logo" style={{ height: '32px', width: 'auto' }} />
                        </div>
                        <span className="logo-text">VKarmaStacks</span>
                    </a>
                </div>
                <nav className="nav">
                    {/* ✏️ EDIT NAVIGATION LINKS BELOW */}
                    <a href="#services">Services</a>
                    <a href="#work">Work</a>
                    <a href="#team">Team</a>
                    <a href="#contact">Contact</a>
                </nav>
                <button className="mobile-menu-btn" aria-label="Toggle Menu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
