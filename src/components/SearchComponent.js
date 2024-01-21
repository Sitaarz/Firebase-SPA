import React from 'react';

const SearchComponent = (props) => (
    <div id="search-box">
        <h1>Filtruj wycieczki</h1>
        <form id="search-form" onSubmit={props.handleSearch}>
          <input type="text" name="lokalizacja" id="search" placeholder="Lokalizacja"/>
          <input type="number" name="cena-od" id="search"
          min={props.minVal} max={props.maxVal} placeholder="Cena od"/>
          <input type="number" name="cena-do" id="search" placeholder="Cena do" min={props.minVal} max={props.maxVal} />
          <input type="date" name="data-od" id="search" placeholder="Data od"/>
          <input type="date" name="data-do" id="search" placeholder="Data do"/>
          <input type="number" name="ocena" id="search" placeholder="Ocena powyżej"/>
          
          <input type="submit" value="Szukaj" id="search"/>
        </form>
      </div>
)

export default SearchComponent;