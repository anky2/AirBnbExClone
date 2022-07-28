import React from "react"
import logo from "../images/airbnb-logo.png"
import "../components/Navbar.css"

function Navbar() {
    return (
        <nav className="nav-main">
            <img src={logo} className="nav-logo" />
        </nav>
    )
}

export default Navbar