import React from "react";
import "./estilos/MainFichas.css";
import InfoBasica from "./InfoBasica.jsx";
import Oro from "./Oro.jsx";
import CrearFichas from "./CrearFichas.jsx";

function MainFichas() {
  return (
    <>
      <h1 className="fichas-titulo">Fichas</h1>

      <CrearFichas />

      {/*<Oro /> */}
      {/*<Habilidades />*/}
      {/*<Estadisticas />*/}
      {/*<Inventario />*/}
      {/*<Objetivos />*/}
      {/*<Historia />*/}
    </>
  );
}
export default MainFichas;
