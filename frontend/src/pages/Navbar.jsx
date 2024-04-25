import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Import your CSS file for styling

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Share My Project
                </Link>
                <ul className="nav-menu">
                    <li className="navnavbar-item">
                        <Link to="/home" className="nav-links">
                            Home
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/logout" className="nav-links">
                            logout
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links">
                            Contact
                        </Link>
                    </li>
                    {/* Add more navigation items as needed */}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
