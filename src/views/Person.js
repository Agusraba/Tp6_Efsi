import React from 'react'
import { useParams } from 'react-router-dom';
import '../App.css';


export default function Detalle() {
  let { id } = useParams();

  return (
    <div>Detalle: {id}</div>
  )
}
