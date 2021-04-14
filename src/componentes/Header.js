import React, {useState} from 'react'

import './Estilo.css'

export const Header = () => {

    const [ dark , setDarkmode ] = useState(false)

    const handleDarkmode = () =>{
        setDarkmode(!dark)
    }

    return (
        <div>
            <h1>HOLA SOY HEADER</h1>
            <hr/>
            <button onClick={handleDarkmode}> Estado {(dark)? 'Modo Dark':'Modo light'}</button>


        </div>
    )
}
