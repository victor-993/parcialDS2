import React from 'react'
import { useCounter } from '../hooks/useCounter'
import { useFetch } from '../hooks/useFetch'
import './Estilo.css'

export const MuchosCustomHooks = () => {

   const {contando, incrementar} = useCounter(1)
    
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${contando}`)
    
    const { loading, data } = state
    const {author, quote} = !!data && data[0] 
    return (
        <div>
            <h1>MUCHOS HOOKS </h1>
            <hr/>
             {
               loading 
                ?
               (
                <div className="alert alert-success" role="alert">
                Cargando....
               </div>
               )
               :
               (
                <blockquote className="blockquote">
                <p className="mb-0">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
                </blockquote>
                
               )
             }

            <button onClick={incrementar} type="button" className="btn btn-primary">incrementar</button>

            
        </div>
    )
}
