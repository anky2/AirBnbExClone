import React from 'react';
import "../components/Card.css"

function Card(props) {
    return (
        <div className ="card">
            <div className="photo-div">
                <img src={`../images/${props.img}`} className="photo"/>
            </div>
            <div className="description">
                <img src="../images/star.png" className="star-img"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount})</span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className = "bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;