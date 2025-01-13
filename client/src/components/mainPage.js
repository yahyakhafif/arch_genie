import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import '../App.css'

const MainPage = () => {
    return (
        <Router>
            <div className="index-page">
                <h1>Architecture Genie</h1>
                <p>Your gateway to architectural wonders and artistic inspiration.</p>
                <div className="cta-buttons">
                    <Link to="/login" className="cta-button">Sign In</Link>
                    <Link to="/signup" className="cta-button">Create Account</Link>
                </div>
            </div>
        </Router>
    );
};

export default MainPage;