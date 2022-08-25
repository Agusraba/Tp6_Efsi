import React from 'react'
import '../App.css';
import Personas from '../Personas';
import { Link } from 'react-router-dom';


export default function Stadistics() {

  let edadMayor = 0;
  let edadMenor = 10000
  let personaMa;
  let personaMe;
  let contadorE = 0;
  Personas.forEach(p => {
    if (parseInt(p?.edad) > 35) {
      contadorE = contadorE + 1
    }

    if (parseInt(p?.edad) > edadMayor) {
      personaMa = p.nombre
      edadMayor = p.edad
    }

    else if(parseInt(p?.edad) == edadMayor) {
      personaMa = personaMa + ' - ' + p.nombre
    }
     
    else if (parseInt(p?.edad) < edadMenor) {
      personaMe = p.nombre
      edadMenor = p.edad
    }
    else if(parseInt(p?.edad) == edadMenor) {
      personaMe = personaMe + ' - ' + p.nombre
    }

  });
  return (
    <>
      <p>La cantidad de personas mayores a 35 años son {contadorE}</p>
      <p>La persona mayor es {personaMa}, con una edad de {edadMayor} años</p>
      <p>La persona menor es {personaMe}, con una edad de {edadMenor} años</p>

      <Link to='/'>Regresar a la home</Link>
    </>
  )
}
