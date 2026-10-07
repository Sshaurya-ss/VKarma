import React, { useState, useEffect } from 'react';
import logo from '../assets/logovks.png';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Auto-close menu if viewport is resized to desktop breakpoint
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="header">
            <div className="container header-container">
                {/* ✏️ EDIT LOGO IMAGE BELOW */}
                <div className="logo">
                    <a href="/" className="logo-link">
                        <div className="logo-icon">
                            <img src={logo} alt="VKarmaStacks Logo" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
                        </div>
                        <span className="logo-text">VKarmaStacks</span>
                    </a>
                </div>
                <nav className="nav">
                    {/* ✏️ EDIT NAVIGATION LINKS BELOW */}
                    <a href="#services">Services</a>
                    <a href="#work">Work</a>
                    <a href="#contact">Contact</a>
                </nav>
                <button
                    className="mobile-menu-btn"
                    onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? "Close Menu" : "Toggle Menu"}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="mobile-dropdown-menu">
                    <a href="#services" onClick={closeMobileMenu}>Services</a>
                    <a href="#work" onClick={closeMobileMenu}>Work</a>
                    <a href="#contact" onClick={closeMobileMenu}>Contact</a>
                </div>
            )}
        </header>
    );
};

export default Header;
