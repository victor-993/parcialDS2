import React, {useState} from 'react'
import PropTypes from 'prop-types';

const Parcial = ({num1, num2, name}) => {

  const [resul, setResul] = useState('')
  

  const suma = () =>{
    const su = num1 + num2;
    setResul(su)
  }

  const resta = () =>{
    const res = num1 - num2;
    setResul(res)
  }
  
  return (
    <div>
      <h1> Señor {name} la suma o resta es {resul}</h1>
      <button onClick={ () => suma()} > Suma</button>
      <button onClick={ () => resta()} > Resta</button>
    </div>
  )
}

Parcial.propTypes = {
  name: PropTypes.string.isRequired,
  num1: PropTypes.number.isRequired,
  num1: PropTypes.number.isRequired,
}

export default Parcial;