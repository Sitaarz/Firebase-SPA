import React from 'react'
import './Picture.css'

const Picture = (props) => (
<div id="picture-div">
    <img id="trip-picture" src={props.picture} alt="Nie można było załadować zdjęcia." />
</div>)

export default Picture