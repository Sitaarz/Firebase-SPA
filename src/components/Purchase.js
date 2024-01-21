import React from "react";
import './Purchase.css'


const Purchase = (props) => {

    return(
    <div id="purchase-div">
        {props.signed != props.max &&<button type="button" className="btn btn-success purchase-btn" onClick={props.addTrip}>Zarezerwuj miejscę</button>}
        { props.signed != 0 && <button type="button" className="btn btn-danger purchase-btn" onClick={props.removeTrip}>Usuń zarezerwowane miejsce</button>}
    </div>
)}

export default Purchase