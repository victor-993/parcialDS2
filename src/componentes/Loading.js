import React from 'react'
import "./Estilo.css"
import loading from "../resource/loading.png"

export const Loading = () => {
  return (
    <div className="loading-conte">
      <img className="imagen-loading" src={loading}></img>
    </div>
  )
}