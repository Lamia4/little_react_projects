import React from 'react'
import "./Card.css"
import sparkasse from "./sparkasse.png"

function Card({cardHolder}) {
    return (
        <div id="container">
            <div>
            <h1>{cardHolder.bankName}</h1>
            <img src={sparkasse} alt=""/>

            </div>
            <p id="iBan">DE {cardHolder.iBan}</p>
            <p id="shortNr">{cardHolder.shortNumber}</p>
            <p id="date">Gültig bis: {cardHolder.validDate}</p>
            <p id="person">{cardHolder.personName}</p>

        </div>
    )
}

export default Card
