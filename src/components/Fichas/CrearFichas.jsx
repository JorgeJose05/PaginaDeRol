import React from "react";
import { useState } from "react";

function CrearFichas() {
  /*No me hace falta la lista porque solo voy a guardar una ficha a la vez
    por ahora hay que crear una variable por cada cosa que guarde en el json
    y al final previsiualizar la ficha y preguntarle si quiere cambiar algo y si no
    lo guardas todo en el json */

  const [jugador, setJugador] = useState("");
  const [mostrarModalJugador, setMostrarModalJugador] = useState(false);
  const manejarCambioJugador = (event) => {
    setJugador(event.target.value);
  };
  const agregarJugador = () => {
    if (jugador !== "") {
      setMostrarModalJugador(false);
      setMostrarModalNombre(true);
    }
  };

  const [nombre, setNombre] = useState("");
  const [mostrarModalNombre, setMostrarModalNombre] = useState(false);
  const manejarCambioNombre = (event) => {
    setNombre(event.target.value);
  };
  const agregarNombre = () => {
    if (nombre !== "") {
      setMostrarModalNombre(false);
      setMostrarModalRaza(true);
    }
  };

  //const [cantidad, setCantidad] = useState('');
  //const [mostrarModal, setMostrarModal] = useState(false);
  const [raza, setRaza] = useState("");
  const [mostrarModalRaza, setMostrarModalRaza] = useState(false);
  const manejarCambioRaza = (event) => {
    setRaza(event.target.value);
  };
  const agregarRaza = () => {
    if (raza !== "") {
      setMostrarModalRaza(false);
      setMostrarModalSexo(true);
    }
  };

  const [sexo, setSexo] = useState("");
  const [mostrarModalSexo, setMostrarModalSexo] = useState(false);
  const manejarCambioSexo = (event) => {
    setSexo(event.target.value);
  };
  const agregarSexo = () => {
    if (sexo !== "") {
      setMostrarModalSexo(false);
      setMostrarModalEscuela(true);
    }
  };

  const [escuela, setEscuela] = useState("");
  const [mostrarModalEscuela, setMostrarModalEscuela] = useState(false);
  const manejarCambioEscuela = (event) => {
    setEscuela(event.target.value);
  };
  const agregarEscuela = () => {
    if (escuela !== "") {
      setMostrarModalEscuela(false);
      setMostrarModalFinal(true);
    }
  };
  //ESTE ES EL MODAL FINAL CON LA PREVISUALIZACION ANTES DE GUARDAR AL JSON
  const [mostrarModalFinal, setMostrarModalFinal] = useState(false);
  //el nivel en el json empieza por 0
  //el hp, mp y 5e por ahora se dejan

  return (
    <div>
      <h1 className="inicio-fichas-titulo">Fichas</h1>
      <button
        className="fichas-button"
        onClick={() => setMostrarModalJugador(true)}
      >
        Crear Ficha
      </button>
      {/*Modales*/}

      {mostrarModalJugador && (
        <div className="list-modal-overlay">
          <div className="list-modal-content">
            <input
              type="text"
              value={jugador}
              onChange={manejarCambioJugador}
              placeholder="Introduce tu nombre jugador"
              className="list-input-text"
            />

            <button onClick={agregarJugador} className="list-button-submit">
              Insetar nombre de jugador
            </button>
            <button
              onClick={() => setMostrarModalJugador(false)}
              className="list-button-cancel"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {mostrarModalNombre && (
        <div className="list-modal-overlay">
          <div className="list-modal-content">
            <input
              type="text"
              value={nombre}
              onChange={manejarCambioNombre}
              placeholder="Introduce el nombre de tu personaje"
              className="list-input-text"
            />

            <button onClick={agregarNombre} className="list-button-submit">
              Insetar nombre de personaje
            </button>
            <button
              onClick={() => setMostrarModalJugador(false)}
              className="list-button-cancel"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {mostrarModalRaza && (
        <div className="list-modal-overlay">
          <div className="list-modal-content">
            {/**Esto despues se cambia a tres selectores:buenas,neutrales, malas y a la
             * derecha una foto que representa la raza y descripcion o directamente lo de jose
             */}

            <input
              type="text"
              value={raza}
              onChange={manejarCambioRaza}
              placeholder="Introduce tu raza"
              className="list-input-text"
            />

            <button onClick={agregarRaza} className="list-button-submit">
              Seleccionar raza
            </button>
            <button
              onClick={() => setMostrarModalRaza(false)}
              className="list-button-cancel"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {mostrarModalSexo && (
        <div className="list-modal-overlay">
          <div className="list-modal-content">
            <input
              type="text"
              value={sexo}
              onChange={manejarCambioSexo}
              placeholder="Introduce tu sexo"
              className="list-input-text"
            />

            <button onClick={agregarSexo} className="list-button-submit">
              Asignar sexo
            </button>
            <button
              onClick={() => setMostrarModalSexo(false)}
              className="list-button-cancel"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {mostrarModalEscuela && (
        <div className="list-modal-overlay">
          <div className="list-modal-content">
            <input
              type="text"
              value={escuela}
              onChange={manejarCambioEscuela}
              placeholder="Introduce tu escuela"
              className="list-input-text"
            />

            <button onClick={agregarEscuela} className="list-button-submit">
              Insetar escuela
            </button>
            <button
              onClick={() => setMostrarModalEscuela(false)}
              className="list-button-cancel"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CrearFichas;
