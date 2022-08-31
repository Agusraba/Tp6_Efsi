import '../App.css';
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Personas from '../Personas';
import Detalle from './Person';

export default function Home() {

    return (
        <>
            <div className='container'>
                <p>
                <Link to='/stadistics'>Estadisticas</Link>
                </p>
                <p>
                <Link to='/detalle'>Persona</Link>
                </p>
                <p>
                <Link to='/contact'> Contacto</Link>
                </p>

                <div className='scroll'> {Personas.map((persona) =>
                    <div class="one-half column">
                        <><div class="cita">
                            <p>
                                <span class='nombre'> {persona.nombre} {persona.apellido}</span>
                            </p>
                            <Link to={`/detalle/${persona.id}`}>
                                <button class="button elimnar u-full-width">Detalle de {persona.nombre} {persona.apellido}</button>
                            </Link>
                        </div></>
                    </div>
                )}</div>

            </div>
        </>
    )
}
