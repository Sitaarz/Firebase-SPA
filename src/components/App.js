import React, { Component } from 'react';
import './App.css';
import Trip from './Trip'

import Welcome from './Welcome'
import AddTrip from './AddTrip';
import TripPage from './TripPage';
import SearchComponent from './SearchComponent';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";



class App extends Component {
  state = {
    trips: [],
    isEuro: false,

    newTripData:{
      id: 0,
      nazwa: "",
      kraj: "",
      rozpoczęcie: "",
      zakończenie: "",
      cena: 0,
      max_uczestników: 0,
      opis: "",
      zdjecie: ""
    },

    tripsToSearch:[],

    currentMinPrice:0,
    currentMaxPrice:0
  }

  componentDidMount() {
    fetch('./wycieczki.json')
      .then(response => response.json())
      .then(trips => {
        const tripsWithRate = trips.map(trip => {
          trip.ocena = 0;
          return trip;
        })
        this.setState({ trips:tripsWithRate, tripsToSearch:tripsWithRate })
      } )  
  }

  componentDidUpdate() {
    this.setMinMaxPrice()
  }

  setMinMaxPrice = () => {
    const najniższaCena = Math.min(...this.state.tripsToSearch.map(trip => trip.cena))
    const najwyższaCena = Math.max(...this.state.tripsToSearch.map(trip => trip.cena))

    if(this.state.currentMinPrice != najniższaCena || this.state.currentMaxPrice != najwyższaCena)
      {this.setState({
        currentMinPrice: najniższaCena,
        currentMaxPrice: najwyższaCena
      })}
  }

  deleteTrip = (id) => {
    const newTripsArray = this.state.trips.filter(trip => trip.id !== id)
    const newTripsArray2 = this.state.tripsToSearch.filter(trip => trip.id !== id)
    this.setState({
      trips: newTripsArray,
      tripsToSearch: newTripsArray2
    })
  }

  chandleChangeCurrency = () => {
    this.setState({
      isEuro: !this.state.isEuro
    })
  }

  sendValue = () => {
    return this.state.isEuro
  }

  sendPrices = () =>{
    const najniższaCena = Math.min(...this.state.trips.map(trip => trip.cena))
    const najwyższaCena = Math.max(...this.state.trips.map(trip => trip.cena))
    return {najnizsza: najniższaCena, najwyzsza: najwyższaCena}
  }

  giveMeTripsList = () =>(this.state.tripsToSearch.map((trip) => <Trip key={trip.id}
  id={trip.id} 
  name={trip.nazwa} country={trip.kraj} start={trip.rozpoczęcie}
  end={trip.zakończenie} price={trip.cena} max_people={trip.max_uczestników}
  description={trip.opis} picture={trip.zdjecie} deleteTrip={this.deleteTrip} sendValue = {this.sendValue} getPrices = {this.sendPrices}
    />))
  
  giveMaxTripId = () => Math.max(...this.state.trips.map(trip => trip.id))

  addTrip = (newTripData) => {
    newTripData.id = this.giveMaxTripId() + 1;
    this.setState({
      trips: [...this.state.trips, newTripData]
    })
  }

  

  findTripById = (id) => {
    const trip = this.state.trips.find(trip => trip.id == id)
    return(<Trip key={trip.id}
      id={trip.id} 
      name={trip.nazwa} country={trip.kraj} start={trip.rozpoczęcie}
      end={trip.zakończenie} price={trip.cena} max_people={trip.max_uczestników}
      description={trip.opis} picture={trip.zdjecie} deleteTrip={this.deleteTrip} sendValue = {this.sendValue} getPrices = {this.sendPrices}
    />)
  }

  handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const lokalizacja = data.get('lokalizacja');
    const cena_od = data.get('cena-od');
    const cena_do = data.get('cena-do');
    const data_od = data.get('data-od');
    const data_do = data.get('data-do');
    const ocena = data.get('ocena');
    console.log(lokalizacja, cena_od, cena_do, data_od, data_do, ocena)

    const tripsToSearch = this.state.trips.filter(trip => {
      console.log(trip.cena)
      if (lokalizacja != "" && trip.kraj.toLowerCase() != lokalizacja.toLocaleLowerCase()) return false;
      if (cena_od != "" && parseInt(trip.cena) < parseInt(cena_od)) return false;
      if (cena_do != "" && parseInt(trip.cena) > parseInt(cena_do)) return false;
      if (data_od != "" && trip.rozpoczęcie < data_od) return false;
      if (data_do != "" && trip.zakończenie > data_do) return false;
      if (ocena != "" && parseInt(trip.ocena) < parseInt(ocena)) return false;
      return true;
    })

    this.setState({
      tripsToSearch: tripsToSearch
    })
  }

  setTripRate = (id, rate) => {
    const trip = this.state.trips.find(trip => parseInt(trip.id) == parseInt(id))
    trip.ocena = rate;
    this.setState({
      trips: [...this.state.trips]
    })
  }


  render() {
    return (
      

      <BrowserRouter>

      
      <div className='main-box'>
        <nav>
          <ul className="nav justify-content-end">
              <li className="nav-item">
                  <Link to="/" className="nav-link active">Home</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link active" to="/lista">Lista wycieczek</Link>
              </li>
              <li className="nav-item">
                  <Link to="/add" className="nav-link active">Dodaj wycieczkę</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" href="#">Koszyk</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link " href="#">Historia</Link>
              </li>
              <li className="nav-item">
                  <button type="button" className="btn btn-dark" onClick = {this.chandleChangeCurrency}>Zmien walutę </button>
              </li>
              <li className="nav-item">
                  <div className="nav-link " style={{color:"black"}}>Waluta: {this.state.isEuro ? "Euro" : "Złoty"}</div>
              </li>
          </ul>
      </nav>


      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/lista" element={[
          <SearchComponent handleSearch = {this.handleSearch}
          minVal = {this.state.currentMinPrice} maxVal={this.state.currentMaxPrice}/>
          ,this.giveMeTripsList()]} />
        <Route path="/add" element={<AddTrip addTrip = {this.addTrip}/>} />
        <Route path="/wycieczka/:id" element= {
        <TripPage
        giveMeTrip = {this.findTripById} 
        rate = {this.setTripRate}/> }  />
      </Routes>
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
