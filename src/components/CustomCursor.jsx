import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Offset by 6px to perfectly center the 12x12 circle on the pointer
            setPosition({ x: e.clientX - 6, y: e.clientY - 6 });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
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
    }, []);

    return (
        <div 
            className={`custom-cursor ${isHovering ? 'cursor-grow' : ''}`} 
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        ></div>
    );
};

export default CustomCursor;
