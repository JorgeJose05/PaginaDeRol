import React, { useState } from "react";

function InfoBasica() {
  const cargar = (event) => {
    event.preventDefault();

    document.getElementById("jugador").textContent = "asdfasadfsdf";
    document.getElementById("nombre").textContent = "name";
    document.getElementById("raza").textContent = "raceede";
    document.getElementById("sexo").textContent = "sex";
    document.getElementById("escuela").textContent = "school";
    document.getElementById("nivel").textContent = "level";
    document.getElementById("hp").textContent = 5;
    document.getElementById("mp").textContent = 5;
    document.getElementById("cinco_e").textContent = 5;
  };

  return (
    <div class="fichas-container">
      <h1 className="fichas-titulo">Información básica</h1>
      <div>
        <div>
          <label for="jugador">Jugador </label>
          <label id="jugador">Jorge</label>
          <br />

          <label for="nombre">Nombre </label>
          <label id="nombre">Roko</label>
          <br />

          <label for="raza">Raza </label>
          <label id="raza">Draconido</label>
          <br />

          <label for="sexo">Sexo </label>
          <label id="sexo">Masculino</label>
          <br />

          <label for="escuela">Escuela </label>
          <label id="escuela">Estable</label>
          <br />

          <label for="nivel">Nivel </label>
          <label id="nivel">4</label>
          <br />

          <label for="hp">HP </label>
          <label id="hp" class="numb">
            98
          </label>
          <br />

          <label for="mp">MP </label>
          <label id="mp" class="numb">
            204
          </label>
          <br />

          <label for="cinco_e">5E </label>
          <label id="cinco_e" class="numb">
            EStados
          </label>
          <br />

          <button className="fichas-button" id="traer" onClick={cargar}>
            TRAER
          </button>
        </div>
        <div>
          <img src="./bateria.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
export default InfoBasica;
