import React, { Component } from "react"
import {useParams} from 'react-router-dom';
import Trip from "./Trip"
import RateComponent from "./RateComponent";

const TripPage = (props) => {
    const params = useParams();
    const id = params.id;
    return(
        <>
        {props.giveMeTrip(id)}
        <RateComponent id = {id} rate={props.rate}/>
        </>
        )
}

export default TripPage