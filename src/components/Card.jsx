import React from 'react';
import cardImg from "../images/katie-zaferes.png"
import star from "../images/star.png"
import "../components/Card.css"

function Card(props) {
    return (
        <div className ="card">
            <div className="photo-div">
                <img src={cardImg} className="photo"/>
            </div>
            <div className="description">
                <img src={star} className="star-img"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount})</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className = "bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;