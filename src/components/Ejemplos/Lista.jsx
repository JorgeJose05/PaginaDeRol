import React, { useState } from 'react';
import './estilos/Lista.css'

function Lista() {
  const [lista, setLista] = useState([]);
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [mostrarModal, setMostrarModal] = useState(false);

  const manejarCambioNombre = (event) => {
    setNombre(event.target.value);
  };

  const manejarCambioCantidad = (event) => {
    setCantidad(event.target.value);
  };

  const agregarElemento = () => {
    if (nombre !== '' && cantidad !== '') {
      setLista([...lista, { nombre, cantidad }]);
      setNombre('');
      setCantidad('');
      setMostrarModal(false);
    }
  };

  const actualizarElemento = (indice, nuevaCantidad) => {
    const listaActualizada = lista.map((item, idx) => {
      if (idx === indice) {
        return { ...item, cantidad: nuevaCantidad };
      }
      return item;
    });
    setLista(listaActualizada);
  };

  const eliminarElemento = (indice) => {
    const listaFiltrada = lista.filter((_, idx) => idx !== indice);
    setLista(listaFiltrada);
  };

  return (
    <div>
      <h1 className='ej-titulo'>Lista</h1>
      <button 
        onClick={() => setMostrarModal(true)}
        className="list-button-add"
      >
        <span>+</span>
      </button>
      {mostrarModal && (
        <div className="list-modal-overlay">
          <div className="list-modal-content">
            <input
              type="text"
              value={nombre}
              onChange={manejarCambioNombre}
              placeholder="Introduce el nombre"
              className="list-input-text"
            />
            <input
              type="number"
              value={cantidad}
              onChange={manejarCambioCantidad}
              placeholder="Introduce la cantidad"
              className="list-input-text"
            />
            <button 
              onClick={agregarElemento} 
              className="list-button-submit"
            >
              Agregar
            </button>
            <button 
              onClick={() => setMostrarModal(false)}
              className="list-button-cancel"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
      <ul>
        {lista.map((item, index) => (
          <li key={index} className="list-list-item">
            {item.nombre} - 
            <input 
              type="number" 
              value={item.cantidad} 
              onChange={(e) => actualizarElemento(index, e.target.value)}
              className="list-input-number"
            />
            <button
              onClick={() => eliminarElemento(index)}
              className="list-button-delete"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lista;
