import '../App.css';
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Personas from '../Personas';
import Detalle from './Person';

export default function Home() {

    return (
        <>
            <div className='container'>
                <Link to='/stadistics'>Ir a las estadisticas</Link>
                <Link to='/detalle'>Ir a Persona</Link>
                <Link to='/contact'>ir a contacto</Link>

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

            </div>
        </>
    )
}
