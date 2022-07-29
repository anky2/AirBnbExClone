import React from 'react';
import cardImg from "../images/katie-zaferes.png"
import star from "../images/star.png"
import "../components/Card.css"

function Card() {
    return (
        <div className ="card">
            <div className="photo-div">
                <img src={cardImg} className="photo"/>
            </div>
            <div className="description">
                <img src={star} className="star-img"/>
                <span className="gray">(6) .</span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className = "bold">From $136</span> / person</p>
        </div>
    )
}

export default Card;