import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            if (typeof window === 'undefined') return false;
            const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
            const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
            return !hasCoarsePointer && !isSmallScreen;
        };

        const updateEnabled = () => {
            setIsEnabled(checkDevice());
        };

        updateEnabled();

        const mediaQuery = window.matchMedia('(pointer: coarse)');
        const screenQuery = window.matchMedia('(max-width: 768px)');

        mediaQuery.addEventListener?.('change', updateEnabled);
        screenQuery.addEventListener?.('change', updateEnabled);

        return () => {
            mediaQuery.removeEventListener?.('change', updateEnabled);
            screenQuery.removeEventListener?.('change', updateEnabled);
        };
    }, []);

    useEffect(() => {
        if (!isEnabled) return;

        const handleMouseMove = (e) => {
            // Offset by 6px to perfectly center the 12x12 circle on the pointer
            setPosition({ x: e.clientX - 6, y: e.clientY - 6 });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isEnabled]);

    useEffect(() => {
        if (!isEnabled) return;

        // Event delegation is used here instead of looping because it dynamically catches 
        // all buttons and links across the site instantly, even those rendered asynchronously by React.
        const handleMouseOver = (e) => {
            if (e.target.closest('h1, h2, h3, h4, h5, h6, p, span, li, a, button, label, .interactive, .cuberto-row')) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = (e) => {
            if (e.target.closest('h1, h2, h3, h4, h5, h6, p, span, li, a, button, label, .interactive, .cuberto-row')) {
                setIsHovering(false);
            }
        };

        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, [isEnabled]);

    if (!isEnabled) {
        return null;
    }

    return (
        <div 
            className={`custom-cursor ${isHovering ? 'cursor-grow' : ''}`} 
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        ></div>
    );
};

export default CustomCursor;
