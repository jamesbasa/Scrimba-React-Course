import React from "react"


export default function Card(props) {
    var { img, rating, reviewCount, location, title, price, openSpots } = props
    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            <img src={`./images/${img}`} className="card--img"/>
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <div className="card--stats">
                <img src="./images/star.png" className="card--star"/>
                <span>{rating} </span>
                <span className="gray">({reviewCount}) • </span>
                <span className="gray">{location}</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">From ${price}</span> / person</p>
        </div>
    )
}
