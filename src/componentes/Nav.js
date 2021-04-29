import React, { useState, useEffect } from 'react'
import pika from "../resource/pikachu.gif"

const Nav = ({setUrl}) => {
  
  const [busqueda, setBusqueda] = useState('')

  const bus = e => {
    e.preventDefault();
    const b = busqueda.trim().replace(" ", "-");
    setUrl(`https://pokeapi.co/api/v2/pokemon/${b}`);

  }
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand" >
            <img src={pika} alt="logo" height="50" className="d-inline-block align-text-top" />
            <a>Pokemon</a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#col"
            aria-controls="col"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="col">
            <form className="d-flex" onSubmit={e => bus(e) }>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={busqueda}
                onChange={e => setBusqueda(e.target.value)}
                data-bs-toggle="tooltip" 
                data-bs-placement="bottom" 
                title="Write the number of the Pokemon or its name"
                />
              <button
                className="btn btn-outline-success"
                type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Nav