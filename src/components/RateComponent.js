import React from 'react';
import './RateComponent.css';


const RateComponent = (props) =>{

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props.id)
    const rate = e.target.elements.rate.value;
    props.rate(props.id, rate);
}

return(

    <div id="rate-div">
        <h1>Oceń wycieczkę!</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <input className='rate-input' type="radio" name="rate" value="1" />
                1
            </label>
            <label>
                <input className='rate-input' type="radio" name="rate" value="2" />
                2
            </label>
            <label>
                <input className='rate-input' type="radio" name="rate" value="3" />
                3
            </label>
            <label>
                <input className='rate-input' type="radio" name="rate" value="4" />
                4
            </label>
            <label>
                <input className='rate-input' type="radio" name="rate" value="5" />
                5
            </label>
            <button id="rate-button" type="submit">Wyślij</button>
            </form>
    </div>
)
}

export default RateComponent;