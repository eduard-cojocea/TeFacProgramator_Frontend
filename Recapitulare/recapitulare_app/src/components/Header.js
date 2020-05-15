import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header clearfix">
            <img className="logo" src="/images/SPQR_sign.png" alt="SPQR" />
            <nav className="header-nav">
                <a className="header-nav-link" href="/">Home</a>
                <a className="header-nav-link" href="/">About the legions</a>
                <a className="header-nav-link" href="/">Join the ranks</a>
            </nav>
        </div>
    );
}

export default Header;