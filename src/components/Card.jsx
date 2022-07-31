import React from 'react';
import "../components/Card.css"

function Card(props) {
    return (
        <div className ="card">
            <div className="photo-div">
            {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
                <img src={`../images/${props.item.coverImg}`} className="photo"/>
            </div>
            <div className="description">
                <img src="../images/star.png" className="star-img"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount})</span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className = "bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}

export default Card;