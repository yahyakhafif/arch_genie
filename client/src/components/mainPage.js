import React from 'react';
import { Link } from 'react-router-dom';

const mainPage = () => {
    return (
        <div className="index-page">
            <h1>Architecture Genie</h1>
            <p>Your gateway to architectural wonders and artistic inspiration.</p>
            <img src="/background-image.jpg" alt="Architectural landscape" />

            <div className="cta-buttons">
                <Link to="/login" className="cta-button">Sign In</Link>
                <Link to="/signup" className="cta-button">Create Account</Link>
            </div>
        </div>
    );
};

export default mainPage;