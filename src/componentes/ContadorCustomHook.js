import React from 'react'
import {useCounter } from '../hooks/useCounter'
import './Estilo.css'
export const ContadorCustomHook = () => {
    
    const {contando, incrementar, decrementar, resetear} = useCounter(0)


    return (
        <>
        <h1>CounterCustomHook : {contando}</h1>
        <hr/>
        <button onClick={incrementar} className="btn">+ 1</button>
        <button onClick={resetear} className="btn">Reset</button>
        <button onClick={decrementar} className="btn">- 1</button>            
        </>

    )
}
