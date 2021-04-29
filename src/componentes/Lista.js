import React, { useState } from 'react'
import useApi from '../hooks/useApi'
import Tarjeta from './Tarjeta'
import "./Estilo.css"
import { ErrorPoke } from './Error'
import { Loading } from './Loading'
import Nav from './Nav'


const Lista = () => {

  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
  const { data, error, loading } = useApi(url)

  const navegacion = (
    <div className="button-nav">
      {(data && data.previous) && (
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => {
            setUrl(data.previous)
          }}
        >{`Anterior`}</button>
      )}
      {(data && data.next) && (
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => {
            setUrl(data.next);
          }}
        >{`Siguiente`}</button>
      )}
    </div>
  );
  return (
    <div>
      <Nav setUrl={setUrl} />
      {loading ? <Loading /> :
        error ? <ErrorPoke /> :
          (<div> {navegacion}
            <div className="conte">
              {data.results ?
                (data.results.map((pok, index )=> (
                  <Tarjeta key={index} url={pok.url} />)
                )) :
                <Tarjeta url={url} />
              }
            </div>
            {navegacion}
          </div>
          )
      }</div>
  )
}

export default Lista