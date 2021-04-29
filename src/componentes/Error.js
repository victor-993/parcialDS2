import React from 'react'
import "./Estilo.css"
import errorPokemon from "../resource/404pokemon.png"

export const ErrorPoke = () => {
  return (
    <div className="error-conte">
      <img className="imagen-error" src={errorPokemon}></img>
    </div>
  )
}
