import React, { Component } from "react"
import { Link } from "react-router-dom"
import './Trip.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Picture from './Picture'
import TripInfo from './TripInfo'
import Purchase from './Purchase'



class Trip extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: props.id,
            name: props.name.toUpperCase(),
            country: props.country.toUpperCase(),
            start: props.start,
            end: props.end,
            price: props.price,
            max_people: props.max_people,
            description: props.description,
            picture: props.picture,
            people_signed: 0
        }
        this.giveCurrency = props.sendValue

        this.deleteTrip = props.deleteTrip
        this.getPrices = props.getPrices
    }

    addTrip = () => {
        this.setState({
            people_signed: this.state.people_signed + 1
        })
    }

    removeTrip = () => {
        this.setState({
            people_signed: this.state.people_signed - 1
        })
    }



    render() {
        let styles = "trip-frame"
        if (this.state.max_people - this.state.people_signed <= 2 ) {
            styles += " red-background"
        }
        if(this.getPrices().najwyzsza == this.state.price)  styles += " red-border"
        if(this.getPrices().najnizsza == this.state.price)  styles += " green-border"
        console.log(this.state.najwyzsza, this.state.najnizsza)

        return(
            
            <div className={styles}>
                <Link className="link-bez-stylu" to= {'/wycieczka/'+this.state.id}>
                <Picture picture={this.state.picture}/>
                </Link>
                <TripInfo name={this.state.name} country={this.state.country}
                start={this.state.start} end={this.state.end}
                price={this.state.price} max_people={this.state.max_people}
                description={this.state.description} 
                people_signed={this.state.people_signed}
                isEuro = {this.giveCurrency}/>

                <Purchase addTrip={this.addTrip} removeTrip={this.removeTrip}
                signed={this.state.people_signed} max = {this.state.max_people}/>
                
                <button type="button" className="btn btn-danger deleting-button" onClick={() => this.deleteTrip(this.state.id)}>X</button>
            </div>
            
        )
    }
}

export default Trip