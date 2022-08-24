import '../App.css';
import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import Personas from '../Personas';

export default function Home() {
    let navigate = useNavigate();

    
    const [personas, setPersonas] = useState([]);
    setPersonas(Personas);
    console.log(personas)
    return (
        <>
            <div className='container'>
                <div>home</div>
                <Link to='/stadistics'>Ir a Detalle</Link>
                <Link to='/person'>Ir a Persona</Link>
                <Link to='/contact'>ir a contacto</Link>
            </div>
        </>
    )
}
