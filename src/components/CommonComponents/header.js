import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";


const Header = () => {
    return(
        <header>
            <h4>BONSTAY</h4>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/hotels">Hotels</Link>
                <Link to="/bookings">Bookings</Link>
                <span>Logout</span>
            </nav>
        </header>
    )
   
}

export default Header;