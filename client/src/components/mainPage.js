import React from 'react';
import { NavLink } from "react-router-dom";
import '../App.css'


const MainPage = () => {
    return (
        <div className="index-page">
            <h1>Architecture Genie</h1>
            <p>Your gateway to architectural wonders and artistic inspiration.</p>
            <div className="cta-buttons">
                <NavLink to="/signin" className={({ isActive }) => isActive ? "cta-button active" : "cta-button"}>Sign In</NavLink>
                <NavLink to="/signup" className={({ isActive }) => isActive ? "cta-button active" : "cta-button"}>Create Account</NavLink>
            </div>
        </div>
    );
};

export default MainPage