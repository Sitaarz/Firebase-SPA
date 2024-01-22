import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

class AddTrip extends Component {
    constructor(props) {
        super(props);
        
        this.addTrip = props.addTrip;
    }

    state = {
        id: 0,
        nazwa: "",
        kraj: "",
        rozpoczęcie: "",
        zakończenie: "",
        cena: 0,
        max_uczestników: 0,
        opis: "",
        zdjecie: "",

        showMessage: false,
    }

    componentDidUpdate(){
        setTimeout(() => {
            this.setState({
                showMessage: false
            })
        }, 5000)
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        // console.log(event.target.value)
        this.setState({
            [name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.addTrip(this.state);
        this.setState({
            id: 0,
            nazwa: "",
            kraj: "",
            rozpoczęcie: "",
            zakończenie: "",
            cena: 0,
            max_uczestników: 0,
            opis: "",
            zdjecie: "",

            showMessage: true,
        })

        
        
    }

    render(){
        return(
            <>
        {this.state.showMessage && <div className="alert alert-success" role="alert">Wycieczka została dodana!</div>}
        <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
                <label for="title" className="form-label">Tutuł</label>
                <input type="text" className="form-control" id="title" name="nazwa" value={this.state.nazwa} onChange={this.handleInputChange}/>
            </div>
            <div className="mb-3">
                <label for="country" className="form-label">Kraj</label>
                <input type="text" className="form-control" id="country" name="kraj" value={this.state.kraj} onChange={this.handleInputChange}/>
            </div>
            <div className="mb-3">
                <label for="start" className="form-label">Rozpoczęcie</label>
                <input type="date" className="form-control" id="start" name="rozpoczęcie" value={this.state.rozpoczęcie} onChange={this.handleInputChange}/>
            </div>
            <div className="mb-3">
                <label for="end" className="form-label">Zakończenie</label>
                <input type="date" className="form-control" id="end" name="zakończenie"
                value={this.state.zakończenie} onChange={this.handleInputChange}/>
            </div>
            <div className="mb-3">
                <label for="price" className="form-label">Cena w złoty</label>
                <input type="number" className="form-control" id="price" name="cena"
                value={this.state.cena} onChange={this.handleInputChange}/>
            </div>
            <div className="mb-3">
                <label for="max-people" className="form-label">Maksymalna liczba uczestników</label>
                <input type="number" className="form-control" id="max-people" name="max_uczestników"
                value={this.state.max_uczestników} onChange={this.handleInputChange} />
            </div>
            <div className="mb-3">
                <label for="description" className="form-label">Opis</label>
                <input type="text" className="form-control" id="description" name="opis"
                value={this.state.opis} onChange={this.handleInputChange}/>
            </div>
            <div className="mb-3">
                <label for="link" className="form-label">Link do zdjęcia</label>
                <input type="url" className="form-control" id="link" name="zdjecie"
                value={this.state.zdjecie} onChange={this.handleInputChange}/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </>
        )
    }
}

export default AddTrip