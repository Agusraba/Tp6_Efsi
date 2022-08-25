import React from 'react'
import '../App.css';
import Personas from '../Personas';


export default function Stadistics() {
  
  let edadMayor = 0;
  let personaM;
  Personas.forEach(p => {
      if(parseInt(p?.edad) > 35) contadorE =+ 1
      if(parseInt(p?.edad) > edadMayor) personaM =p.nombre
      else if(parseInt(p?.edad) = edadMayor) personaM + p.nombre
    });
  return (
    <div className='scroll'> {Personas.map((persona) =>
      <div class="one-half column">
          <><div class="cita">
              <p>
                  <span> {persona.nombre} {persona.apellido}</span>
              </p>
              <Link to={`/detalle/${persona.id}`}>
                  <button class="button elimnar u-full-width">Ir al detalle de {persona.nombre} {persona.apellido}</button>
              </Link>
          </div></>
      </div>
  )}</div>
  )
}
