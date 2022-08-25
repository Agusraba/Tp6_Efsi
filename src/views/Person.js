import React from 'react'
import { useParams } from 'react-router-dom';
import '../App.css';
import Personas from '../Personas';
import { Link } from "react-router-dom";

export default function Detalle() {

  let { personaId }  = useParams();
  console.log(personaId)
  let personaElegida= Personas.find(pers => pers.id === personaId)
  console.log(personaElegida)

  return (
    <>
    <p>Nombre: {personaElegida.nombre}</p>
    <p>Apellido: {personaElegida.apellido}</p>
    <p>Email: {personaElegida.email}</p>
    <p>Edad: {personaElegida.edad}</p>


    <Link to='/'>Regresar a la home</Link>
    </>
  )
}
