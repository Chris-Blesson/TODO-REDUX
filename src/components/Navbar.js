import React from 'react';
import './Navbar.styles.css';
const Navbar = ({ title }) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <h4 className="app-heading mt-2">{title}</h4>
        </nav>
    )
}

export default Navbar;