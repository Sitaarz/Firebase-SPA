import React from 'react'
import './TripInfo.css'


const TripInfo = (props) => {
    
    const currency = props.isEuro() ? "€" : "zł"
    const price = props.isEuro() ? (props.price / 4.3).toFixed(2) : props.price

    

    return(
    <div id="trip-info">
        <p id="info-title">{props.name}</p>
        <p>Kraj: {props.country}</p>
        <p>Data: od {props.start} do {props.end}</p>
        <p>Cena: {price} {currency}</p>
        <p>Liczba osób: {props.people_signed}/{props.max_people} osób</p>
        <p>Opis: {props.description}</p>
    </div>
)}

export default TripInfo