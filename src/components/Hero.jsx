import React from "react"
import logoGrid from "../images/photo-grid.png"
import "../components/Hero.css"

function Hero() {
    return (
        <section className="hero-main">
            <img src={logoGrid} className="img-grid" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero