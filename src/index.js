import React from 'react';
import ReactDOM from 'react-dom';
import Parcial from './componentes/Parcial';



const divRoot = document.querySelector('#root');


ReactDOM.render( <Parcial num1={23} num2={3} name={"victor Hernandez"}/>, divRoot);
