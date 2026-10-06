import React from 'react';

const Concepts = () => {
    return (
        <section id="work" className="section work-section">
            <div className="container">
                {/* ✏️ EDIT WORK SECTION TITLE BELOW */}
                <h2 className="section-title">Capabilities & Concepts</h2>
                <div className="work-grid">
                    {/* Work Item 1 */}
                    <div className="work-item">
                        <div className="work-text">
                            {/* ✏️ EDIT WORK ITEM 1 TITLE BELOW */}
                            <h3>Fintech Dashboard</h3>
                            {/* ✏️ EDIT WORK ITEM 1 DESCRIPTION BELOW */}
                            <p>A clean, data-dense interface architecture designed for clarity and rapid decision making in financial markets.</p>
                        </div>
                        <div className="mockup-container">
                            {/* ✏️ EDIT WORK ITEM 1 IMAGE PLACEHOLDER TEXT BELOW */}
                            <span className="placeholder-label">UI Mockup Placeholder</span>
                        </div>
                    </div>
                    {/* Work Item 2 */}
                    <div className="work-item reverse">
                        <div className="mockup-container">
                            {/* ✏️ EDIT WORK ITEM 2 IMAGE PLACEHOLDER TEXT BELOW */}
                            <span className="placeholder-label">UI Mockup Placeholder</span>
                        </div>
                        <div className="work-text">
                            {/* ✏️ EDIT WORK ITEM 2 TITLE BELOW */}
                            <h3>E-Commerce Experience</h3>
                            {/* ✏️ EDIT WORK ITEM 2 DESCRIPTION BELOW */}
                            <p>Frictionless checkout flows and immersive product discovery, enhancing the modern retail journey.</p>
                        </div>
                    </div>
                    {/* Work Item 3 */}
                    <div className="work-item">
                        <div className="work-text">
                            {/* ✏️ EDIT WORK ITEM 3 TITLE BELOW */}
                            <h3>SaaS Platform</h3>
                            {/* ✏️ EDIT WORK ITEM 3 DESCRIPTION BELOW */}
                            <p>Intuitive user management and analytics views that simplify complex workflows for enterprise teams.</p>
                        </div>
                        <div className="mockup-container">
                            {/* ✏️ EDIT WORK ITEM 3 IMAGE PLACEHOLDER TEXT BELOW */}
                            <span className="placeholder-label">UI Mockup Placeholder</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Concepts;
