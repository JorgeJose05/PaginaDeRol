import React from "react";
import { useState, useEffect } from "react";

function CrearFichas() {
  /*No me hace falta la lista porque solo voy a guardar una ficha a la vez
    por ahora hay que crear una variable por cada cosa que guarde en el json
    y al final previsiualizar la ficha y preguntarle si quiere cambiar algo y si no
    lo guardas todo en el json */

  //**HOY VAMOS A PONER EN ORDEN LAS PREGUNTAS ES DECIR 1 RAZAS Y DESPUES VAMOS HACER BIEN EL APARTADO RAZAS */

  //Esta supongo que no hara falta
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

  //4- Cuarta pregunta
  const [nombre, setNombre] = useState("");
  const [mostrarModalNombre, setMostrarModalNombre] = useState(false);
  const manejarCambioNombre = (event) => {
    setNombre(event.target.value);
  };
  const agregarNombre = () => {
    if (nombre !== "") {
      setMostrarModalNombre(false);
      setMostrarModalFinal(true);
    }
  };

  //const [cantidad, setCantidad] = useState('');
  //const [mostrarModal, setMostrarModal] = useState(false);

  //1 -Primera pregunta
  const [raza, setRaza] = useState("");
  const [mostrarModalRaza, setMostrarModalRaza] = useState(false);
  const manejarCambioRaza = (event) => {
    setRaza(event.target.value);
    //Mostrar la InfoBasica
    setMostrarInfoRaza(true);
  };
  const agregarRaza = () => {
    if (raza !== "") {
      setMostrarModalRaza(false);
      setMostrarModalEscuela(true);
    }
  };

  const [mostrarInfoRaza, setMostrarInfoRaza] = useState(false);

  //3- Tercera pregunta
  const [sexo, setSexo] = useState("");
  const [mostrarModalSexo, setMostrarModalSexo] = useState(false);
  const manejarCambioSexo = (event) => {
    setSexo(event.target.value);
  };
  const agregarSexo = () => {
    if (sexo !== "") {
      setMostrarModalSexo(false);
      setMostrarModalNombre(true);
    }
  };

  //2- Segunda pregunta
  const [escuela, setEscuela] = useState("");
  const [mostrarModalEscuela, setMostrarModalEscuela] = useState(false);
  const manejarCambioEscuela = (event) => {
    setEscuela(event.target.value);
  };
  const agregarEscuela = () => {
    if (escuela !== "") {
      setMostrarModalEscuela(false);
      setMostrarModalSexo(true);
    }
  };
  //ESTE ES EL MODAL FINAL CON LA PREVISUALIZACION ANTES DE GUARDAR AL JSON
  const [mostrarModalFinal, setMostrarModalFinal] = useState(false);
  //el nivel en el json empieza por 0
  //el hp, mp y 5e por ahora se dejan

  const log = (event) => {
    console.log(raza);
  };

  //Cuando se este mostrando el modal info se activa el efecto que le crea las etiquetas
  useEffect(() => {
    if (mostrarInfoRaza) {
      let nomraza = "";
      //ventajas y deventajas
      let origen = "";
      let origenP = "";
      let cultura = "";
      let culturaP = "";
      let creencias = "";
      let creenciasP = "";
      let habilidades = "";
      let habilidadesP = "";
      let rel = "";
      let relP = "";
      let conflictos = "";
      let conflictosP = "";

      let divcontent = document.getElementById("contenidoInfo");
      //recuerda createlement settext y add en ese orden importante
      switch (raza) {
        case "1":
          nomraza = document.createElement("h3");
          nomraza.textContent = "sadasdfads";
          divcontent.appendChild(nomraza);

          break;
        case "2":
          break;

        case "3":
          break;

        case "4":
          break;

        case "5":
          break;
        case "6":
          break;

        case "7":
          break;

        case "8":
          break;

        case "9":
          break;

        case "10":
          break;

        case "11":
          break;
      }
    }
  }, [mostrarInfoRaza]);

  return (
    <div>
      <h1 className="inicio-fichas-titulo">Fichas</h1>
      <button
        className="fichas-button"
        onClick={() => setMostrarModalRaza(true)}
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

            <button onClick={log} className="fichas-button">
              log
            </button>

            <select
              name="Razas"
              id=""
              value={raza}
              onChange={manejarCambioRaza}
            >
              {/*Neutras*/}
              {/*Le pongo values para probar*/}
              <option value="1">Humano</option>
              <option value="2">Enano</option>
              <option value="3">Elfo Arcano</option>
              <option value="4">Tabaxi</option>
              <option value="5">Centauro</option>
              <option value="6">Tiefling</option>
              <option value="7">Triton/Nereida</option>
              <option value="8">Gigante</option>
              <option value="9">Golem</option>
              <option value="10">Gnomo</option>
              <option value="11">Duende</option>

              {/*Buenas*/}
              <option value="">Elfo del bosque</option>
              <option value="">Hada</option>
              <option value="">Ninfa</option>
              <option value="">Ent</option>
              <option value="">Leprechaun</option>
              <option value="">Silfide</option>
              <option value="">Satiro</option>
              <option value="">Mediano</option>
              <option value="">Fenix</option>
              <option value="">Driada</option>
              <option value="">Draconido</option>
              <option value="">Solvian</option>

              {/*Malas*/}
              <option value="">Elfo Oscuro</option>
              <option value="">Vampira</option>
              <option value="">Sirena</option>
              <option value="">Licantropo</option>
              <option value="">Orco</option>
              <option value="">Sucubo/Incubo</option>
              <option value="">Ciclope</option>
              <option value="">Hada oscura</option>
              <option value="">Minotauro</option>
              <option value="">Lamia</option>
            </select>

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

      {mostrarInfoRaza && (
        <div className="list-modal-overlay">
          <div className="list-modal-content">
            <div id="contenidoInfo">
              {/*Aqui es donde se creara la info con el document.createelemtn */}
            </div>
          </div>
        </div>
      )}

      {mostrarModalSexo && (
        <div className="list-modal-overlay">
          <div className="list-modal-content">
            <h4>Selecciona tu sexo</h4>
            <label>
              <input
                id="masc"
                type="radio"
                value="Masculino"
                checked={sexo === "Masculino"}
                onChange={manejarCambioSexo}
              />
              Masculino
            </label>

            <label>
              <input
                id="fem"
                type="radio"
                value="Femenino"
                checked={sexo === "Femenino"}
                onChange={manejarCambioSexo}
              />
              Femenino
            </label>

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
