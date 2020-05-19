import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header clearfix">
            <img className="logo" src="/images/SPQR_sign.png" alt="SPQR" />
            <nav className="header-nav">
                <Link className="header-nav-link" to="/">
                    Home
                </Link>
                <Link className="header-nav-link" to="/about-us">
                    About the legions
                </Link>
                <Link className="header-nav-link" to="/contact-me">
                    Join the ranks
                </Link>
            </nav>
        </div>
    );
}

export default Header;