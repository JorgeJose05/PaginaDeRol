import React from 'react'
import Lista from './Lista.jsx'
import ListaEstadisticas from './ListaEstadisticas.jsx'
import './estilos/MainEjemplos.css'




function MainEjemplos() {
    
return (
    <>
        <div className='ej-container'>
        <Lista />
        </div>
        <div className='ej-container'>
        <ListaEstadisticas />
        </div>
    </>
) 
}
export default MainEjemplos